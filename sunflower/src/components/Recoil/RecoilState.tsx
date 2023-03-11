import axios from "axios";
import { atom } from "recoil";
import { getCookie } from "../../etc/Cookie";
import { CreatMenuType, CreatPostType } from "../../etc/TypeColletion";

export const FloatingMenuWidth = atom<number | undefined>({
  key: "FloatingMenuWidth",
  default: 0,
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

export const CreatePost = atom<(data:FormData) => void>({
  key: "createPost",
  default: async (data) => {
    await axios
      .post("http://15.165.19.237:8080/posts/", data, {
        headers: {
            "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
