import { atom } from "recoil";
import {
  CreatMenuType,
  CreatPostType,
  PostItemType,
  UserDataType,
} from "../../etc/TypeColletion";

export const FloatingMenuWidth = atom<number | undefined>({
  key: "FloatingMenuWidth",
  default: 0,
});

export const UserEmail = atom<string>({
  key: "UserEmail",
  default: "",
});

export const UserData = atom<UserDataType>({
  key: "UserData",
  default: {
    gender: "",
    nickname: "",
    userContents: "",
    userImageUrl: "",
  },
});

export const PostItemList = atom<PostItemType[][]>({
  key: "PostItemList",
  default: [
    [
      {
        postId: "",
        postImageUrls: "",
        postLikeCounts: "",
        commentCounts: "",
        mealCount: "",
        nuKcal: "",
      },
    ],
  ],
});

export const UploadFiles = atom<File[]>({
  key: "UploadFiles",
  default: [],
});

export const CreateContentsData = atom<string>({
  key: "CreateContentsData",
  default: "",
});

export const CreateMenuData = atom<CreatMenuType>({
  key: "CreatePost",
  default: {
    menuList: [],
    nuCarbs: 0,
    nuProtein: 0,
    nuFat: 0,
    nuKcal: 0,
  },
});

export const DetailItemModal = atom<boolean>({
  key : "DetailItemModal",
  default: false
})