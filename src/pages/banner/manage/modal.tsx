import * as S from "./style";
import { ChangeEvent, useState } from "react";
import { FormSubmitButton } from "../../../components/common/button/style";
import Modal from "../../../components/common/modal/modal";
import { HttpMethod, useAjax } from "../../../utils/ajax";
import { useModal } from "../../../utils/modal";
import { Input } from "../../../components/common/input/style";
import { Banner } from "../../../types/banner.type";

interface BannerManageModalProps {
  loadBannerList: () => void
}

const BannerManageModal = ({
  loadBannerList
}: BannerManageModalProps) => (<>
  <CreateBannerModal loadBannerList={loadBannerList} />
</>);

interface CreateBannerModalProps {
  loadBannerList: () => void
}

const CreateBannerModal = ({
  loadBannerList
}: CreateBannerModalProps) => {
  const { ajax } = useAjax();
  const { closeModal } = useModal();
  const [newBannerFile, setNewBannerFile] = useState<File | null>(null);
  const [newBannerLink, setNewBannerLink] = useState<string>('');

  const imageInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return;
    setNewBannerFile(file);
  }

  const createBanner = async () => {
    if (!newBannerFile) return alert('배너 이미지를 업로드해주세요');
    const payload = new FormData();
    payload.append('link', newBannerLink);
    payload.append('image', newBannerFile);

    const [, error] = await ajax<Banner[]>({
      url: 'banner',
      method: HttpMethod.POST,
      payload
    });
    if (error) return;
    setNewBannerFile(null);
    setNewBannerLink('');
    closeModal('createBanner');
    loadBannerList();
  }

  return (
    <Modal
      id='createBanner'
      title="배너 생성"
      callback={() => {
        setNewBannerFile(null);
        setNewBannerLink('');
      }}
    >
      <form onSubmit={e => {
        e.preventDefault();
        createBanner();
      }}>
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
            style={{ display: 'none' }}
          />
        </S.BannerImgWrap>
        <Input
          placeholder='배너 클릭 시 이동할 링크(필수 아님)'
          onChange={e => setNewBannerLink(e.target.value)}
        />
        <FormSubmitButton>배너 생성</FormSubmitButton>
      </form>
    </Modal>
  );
}

export default BannerManageModal;