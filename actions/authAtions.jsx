import { cookies } from "next/headers"

export const isLoggedIn = ()=> {
    const token = cookies().get("loginToken")
    if(!token) return false

    return true
}

