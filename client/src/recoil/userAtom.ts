import { IUser } from "@/interfaces/userInterface";
import { atom } from "recoil";

export const authState = atom<String | null>({
    key: 'authTokenState',
    default: localStorage.getItem('authToken') || null
})

export const userState = atom<IUser | null>({
    key: "userState",
    default : null
})

