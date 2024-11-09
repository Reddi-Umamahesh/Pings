import { IUser } from "@/interfaces/userInterface";
import { atom } from "recoil";


const token = localStorage.getItem('authToken') != 'undefined' ?localStorage.getItem('authToken'): null

const userFromStroage = token ?JSON.parse(localStorage.getItem('user') || '{}') : null
export const authState = atom<String | null>({
    key: 'authTokenState',
    default: localStorage.getItem('authToken') || null
})

export const userState = atom<IUser | null>({
    key: "userState",
    default :userFromStroage || null,
})

