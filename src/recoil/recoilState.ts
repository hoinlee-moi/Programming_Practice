import { atom } from "recoil";
import { dummy } from "../dummy";

export const boardItemListState = atom({
    key:"boardItemList",
    default : dummy
})