import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../store/user.store";
import { Authority } from "../../types/user.type";
import { useModal } from "../../utils/modal";

const Notice = () => {
  const user = useRecoilValue(userState);
  const {openModal} = useModal();

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ROOT && user.authority !== Authority.ADMIN) return openModal('adminLogin');
  }, [user]);

  return (
    <></>
  );
}

export default Notice;
