import axios from "axios"
import { atom } from "recoil"
import { CreatMenuType, CreatPostType } from "../../etc/TypeColletion"

export const FloatingMenuWidth = atom<number | undefined>({
    key : "FloatingMenuWidth",
    default : 0
})

export const UploadFiles = atom<string[]>({
    key : "UploadFiles",
    default : []
})

export const CreateContentsData = atom<string>({
    key: "CreateContentsData",
    default:""
})

export const CreateMenuData = atom<CreatMenuType>({
    key: "CreatePost",
    default : {
        menuList : [],
        nuCarbs : 0,
        nuProtein : 0,
        nuFat : 0,
        nuKcal : 0
    }
})

export const CreatePost = atom<(data:CreatPostType)=>void>({
    key:"createPost",
    default: async (data)=>{
        console.log("저장데이터",data)
        await axios.post("http://3.36.57.184/api/posts",data).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
})