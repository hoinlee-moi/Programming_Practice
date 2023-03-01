import { atom } from "recoil"
import { UserToken } from "../../etc/TypeColletion"

export const userToken = atom<UserToken[]>({
    key: "Token",
    default:[{
        AccessToken:"",
        RefreshToken:""
    }]
})