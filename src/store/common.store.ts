import { atom } from "recoil";

export const footerHeightState = atom<number>({
    key: 'footerHeight',
    default: 0
});

export const changeAdminState = atom<boolean>({
    key: 'changeAdmin',
    default: false
});
