import { NextResponse } from "next/server";
import { isLoggedIn } from "./actions/authAtions"

export function middleware(request) {
    const  isLogged = isLoggedIn() ;
    console.log(isLogged)
    const pathName = request.nextUrl.pathname ;
    if(pathName.startsWith("/details") && !isLogged ){
        return NextResponse.redirect(new URL('/auth/register', request.url))
    }

}

export const config = {
    matcher:[ '/details/:path*' , "/auth/register" ]
  }