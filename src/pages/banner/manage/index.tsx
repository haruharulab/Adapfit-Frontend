import { useEffect, useState } from "react";
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

    const [data, error] = await ajax<Banner[]>({
      url: `banner/${id}`,
      method: HttpMethod.DELETE
    });
    if (error) return;
    getBannerList();
  }

  return (
    <S.BannerPageWrap>
      <S.BannerListWrap>{
        bannerList.map(banner => (
          <S.BannerImgWrap>
              <S.BannerImg src={banner.fileUrl} />
              <S.BannerDeleteButton
                onClick={() => deleteBanner(banner.id)}
              >×</S.BannerDeleteButton>
          </S.BannerImgWrap>
        ))
      }</S.BannerListWrap>
    </S.BannerPageWrap>
  );
};

export default BannerManage;
