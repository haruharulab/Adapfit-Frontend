import { atom } from "recoil";

export const footerHeightState = atom<number>({
    key: 'footerHeight',
    default: 0
});