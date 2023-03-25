import { atom } from "recoil";
import { CreatMenuType, CreatPostType } from "../../etc/TypeColletion";

export const FloatingMenuWidth = atom<number | undefined>({
  key: "FloatingMenuWidth",
  default: 0,
});

export const UserEmail = atom<string>({
  key: "UserEmail",
  default: "",
});
export const UserData = atom({
  key: "UserData",
  default: {
    gender: "",
    nickname: "",
    userContents: "",
    userImageUrl: "",
  },
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
