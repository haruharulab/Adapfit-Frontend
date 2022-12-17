import axios, { AxiosError, AxiosPromise } from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import { TokenRes, tokenState, userState } from "../store/user.store";

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
    headers?: any
    noToken?: boolean
}

export const useAjax = () => {
    const  [token, setToken] = useRecoilState(tokenState);
    const resetUser = useResetRecoilState(userState);
    const navigate = useNavigate();

    const ajax = async <T>({
        url,
        method,
        payload,
        headers = {},
        noToken
    }: Ajax):Promise<[T, false] | [void, AxiosError | true]> => {
        if (!noToken) {
            headers.Authorization = token.accessToken;
        }
    
        try {
            const rawRes = await ((): AxiosPromise<T> => {
                switch (method) {
                    case HttpMethod.GET: return instance.get(url, headers);
                    case HttpMethod.POST: return instance.post(url, payload, headers);
                    case HttpMethod.PUT: return instance.put(url, payload, headers);
                    case HttpMethod.DELETE: return instance.delete(url, headers);
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
                    navigate('/admin/login');
                    return [, err];
                }
                const [newToken, newTokenError] = await ajax<TokenRes>({
                    method: HttpMethod.PUT,
                    url: 'auth/refresh',
                    headers: {
                        'X-Refresh-Token': token.refreshToken
                    },
                    noToken: true
                });
                if (newTokenError) {
                    resetUser();
                    navigate('/admin/login');
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
                    noToken: true
                });
            }

            if (err.response.data?.message) {
                alert(err.response.data?.message);
            } else if (err.response.data?.error) {
                alert(err.response.data?.error);
            } else {
                alert(`HTTP ERROR ${err.response.status}`);
            }
            return [, true];
        }
    }

    return {
        ajax
    }
}