import axios, { AxiosError, AxiosPromise, AxiosRequestConfig } from "axios";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { TokenRes, tokenState, userState } from "../store/user.store";
import { Authority, UserType } from "../types/user.type";
import { useModal } from "./modal";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Pragma: 'no-cache'
  },
  timeout: 30000
});

export enum HttpMethod {
  GET,
  POST,
  PUT,
  DELETE
}

interface Ajax {
  url: string,
  method: HttpMethod,
  payload?: any,
  headers?: any,
  noToken?: boolean,
  config?: AxiosRequestConfig,
  errorCallback?: (data: AxiosError | void) => boolean | void
}

const showLoginBox = (
  user: UserType,
  openModal: (key: string, closeable?: boolean) => void,
  closeModal: (key: string) => void
) => {
  if (user.authority === Authority.ROOT) {
    closeModal('adminLogin');
    openModal('superAdminLogin');
    return;
  }
  closeModal('superAdminLogin');
  openModal('adminLogin');
}

export const useAjax = () => {
  const {openModal, closeModal} = useModal();
  const [token, setToken] = useRecoilState(tokenState);
  const user = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);

  const ajax = async <T>({
    url,
    method,
    payload,
    headers = {},
    config,
    noToken,
    errorCallback
  }: Ajax):Promise<[T, false] | [void, AxiosError | true]> => {
    if (!noToken && token.accessToken) {
      headers.Authorization = token.accessToken;
    }

    try {
      const rawRes = await ((): AxiosPromise<T> => {
        switch (method) {
          case HttpMethod.GET: return instance.get(url, {...config, headers});
          case HttpMethod.POST: return instance.post(url, payload, {...config, headers});
          case HttpMethod.PUT: return instance.put(url, payload, {...config, headers});
          case HttpMethod.DELETE: return instance.delete(url, {...config, headers});
        }
      })();
      return [rawRes.data, false];
    } catch (err) {
      if (!(err instanceof AxiosError) || !err.response?.status) {
        console.log(err);
        return [, true];
      };

      if (err.response?.status === 401) {
        if (!(token?.refreshToken)) {
          resetUser();
          showLoginBox(user, openModal, closeModal);
          return [, err];
        }
        const [newToken, newTokenError] = await ajax<TokenRes>({
          method: HttpMethod.PUT,
          url: 'auth/refresh',
          headers: {
            'Refresh-Token': token.refreshToken
          },
          noToken: true,
          errorCallback() {
            return true;
          },
        });
        if (newTokenError) {
          resetUser();
          showLoginBox(user, openModal, closeModal);
          return [, newTokenError];
        }
        setToken(prev => ({
          ...prev,
          accessToken: newToken.accessToken
        }));
        return ajax({
          url,
          method,
          payload,
          headers: {
            ...headers,
            Authorization: newToken.accessToken
          },
          config,
          noToken: true,
          errorCallback
        });
      }

      if (err.response.data?.message) {
        !(errorCallback && errorCallback()) && alert(err.response.data?.message);
      } else if (err.response.data?.error) {
        !(errorCallback && errorCallback()) && alert(err.response.data?.error);
      } else {
        !(errorCallback && errorCallback()) && alert(`HTTP ERROR ${err.response.status}`);
      }
      return [, true];
    }
  }

  return {
      ajax
  }
}