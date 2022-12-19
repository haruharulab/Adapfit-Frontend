import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";
import { Banner } from "../../../types/banner.type";
import { Resume } from "../../../types/resume.type";
import { Authority } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import * as S from "./style";

const BannerManage = () => {
  const user = useRecoilValue(userState);
  const {ajax} = useAjax();
  const [bannerList, setBannerList] = useState<Banner[]>([]);
  const [newBannerFile, setNewBannerFile] = useState<File | null>(null);
  const [newBannerLink, setNewBannerLink] = useState<string>('');

  useEffect(() => {
    getBannerList();
  }, []);

  const getBannerList = async () => {
    const [data, error] = await ajax<Banner[]>({
      url: 'banner',
      method: HttpMethod.GET
    });
    if (error) return;
    setBannerList(data);
  }
  
  const deleteBanner = async (id: number) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    const [, error] = await ajax<Banner[]>({
      url: `banner/${id}`,
      method: HttpMethod.DELETE
    });
    if (error) return;
    getBannerList();
  }
  
  const imageInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return;
    setNewBannerFile(file);
  }

  const addBanner = async () => {
    if (!newBannerFile) return;
    const payload = new FormData();
    payload.append('link', newBannerLink);
    payload.append('image', newBannerFile);

    const [, error] = await ajax<Banner[]>({
      url: 'banner',
      method: HttpMethod.POST,
      payload
    });
    if (error) return;
    getBannerList();
  }

  return (
    <S.BannerPageWrap>
      <S.BannerListWrap>
        {bannerList.map(banner => (
          <S.BannerImgWrap>
            <S.BannerImg src={banner.fileUrl} />
            <S.BannerDeleteButton
              onClick={() => deleteBanner(banner.id)}
            >×</S.BannerDeleteButton>
          </S.BannerImgWrap>
        ))}
        <S.BannerImgWrap>
          <label htmlFor='banner_upload'>{
              newBannerFile
              ? <S.BannerImg src={URL.createObjectURL(newBannerFile)} />
              : '+'
          }</label>
          <input
              type='file'
              id='banner_upload'
              onChange={(e) => imageInputHandler(e)}
              style={{display: 'none'}}
          />
          {
            newBannerFile && 
            <>
              <S.BannerLinkInput
                placeholder='배너 클릭 시 이동할 링크'
                onChange={e => setNewBannerLink(e.target.value)}
              />
              <S.BannerAddButton onClick={addBanner}>
                배너 추가
              </S.BannerAddButton>
            </>
          }
        </S.BannerImgWrap>
      </S.BannerListWrap>
    </S.BannerPageWrap>
  );
};

export default BannerManage;
