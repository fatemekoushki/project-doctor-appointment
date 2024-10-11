import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get("tokenLogin");
    if (pathname.startsWith("/details")) {
        if (!token?.value) {
            return NextResponse.redirect(new URL("/register", request.url));
        }
    }
}

export const config = {
    matcher: "/details/:path*"
};
