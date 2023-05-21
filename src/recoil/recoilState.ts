import { atom } from "recoil";
import { dummy } from "../dummy";

export const boardItemListState = atom({
    key:"boardItemList",
    default : dummy
})

export const postDetailModal = atom({
    key:"postDetail",
    default : {
        modal : false,
        postId : 0
    }
})