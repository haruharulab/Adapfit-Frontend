import { AdminLevel, Authority, UserType } from "../types/user.type"

interface LevelCheck {
  requireLevel: number,
  user: UserType,
  openModal: (msg: string) => void
}

export const levelCheck = ({
  requireLevel,
  user,
  openModal
}: LevelCheck): boolean => {
  if (user.authority === Authority.LOADING) return false;
  if (user.authority === Authority.NO_LOGIN) {
    openModal('adminLogin');
    return false;
  }

  // pass
  if (AdminLevel[user.authority] >= requireLevel) return true;

  if (requireLevel >= 4) {
    openModal('superAdminLogin');
    return false;
  }

  openModal('adminLogin');
  return false;
}