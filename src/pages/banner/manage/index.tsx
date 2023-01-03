import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";
import { Banner } from "../../../types/banner.type";
import { Authority } from "../../../types/user.type";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useModal } from "../../../utils/modal";
import BannerManageModal from "./modal";
import * as S from "./style";

const ManageBanner = () => {
  const { openModal } = useModal();
  const user = useRecoilValue(userState);
  const { ajax } = useAjax();
  const [bannerList, setBannerList] = useState<Banner[]>([]);

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ROOT) return openModal('superAdminLogin');
    loadBannerList();
  }, [user]);

  const loadBannerList = async () => {
    const [data, error] = await ajax<{
      count: number,
      data: Banner[]
    }>({
      url: 'banner',
      method: HttpMethod.GET
    });
    if (error) return;
    setBannerList(data.data);
  }

  const deleteBanner = async (id: number) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    const [, error] = await ajax<Banner[]>({
      url: `banner/${id}`,
      method: HttpMethod.DELETE
    });
    if (error) return;
    loadBannerList();
  }

  return (
    <S.BannerPageWrap>
      <BannerManageModal loadBannerList={loadBannerList} />
      <S.Header>배너 관리</S.Header>
      <S.BannerListWrap>
        <S.BannerImgWrap onClick={() => openModal('createBanner')}>
          <label>+</label>
        </S.BannerImgWrap>
        {bannerList.map(banner => (
          <S.BannerImgWrap>
            <S.BannerImg src={banner.fileUrl} />
            <S.BannerDeleteButton
              onClick={() => deleteBanner(banner.id)}
            >×</S.BannerDeleteButton>
          </S.BannerImgWrap>
        ))}
      </S.BannerListWrap>
    </S.BannerPageWrap>
  );
};

export default ManageBanner;
