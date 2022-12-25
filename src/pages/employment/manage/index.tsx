import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/user.store";
import { Authority } from "../../../types/user.type";
import { useModal } from "../../../utils/modal";

const ManageEmployment = () => {
  const user = useRecoilValue(userState);
  const {openModal} = useModal();

  useEffect(() => {
    if (user.authority === Authority.LOADING) return;
    if (user.authority !== Authority.ROOT) return openModal('superAdminLogin');
  }, [user]);
  
  return (
    <></>
  );
}

export default ManageEmployment;