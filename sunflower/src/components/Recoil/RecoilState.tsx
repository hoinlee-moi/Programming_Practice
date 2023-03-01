import { atom } from "recoil"

export const FloatingMenuWidth = atom<number | undefined>({
    key : "FloatingMenuWidth",
    default : 0
})