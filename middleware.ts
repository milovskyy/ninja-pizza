import { NextResponse, type NextRequest } from "next/server"
import { createMiddlewareClient } from "./utils/supabase/middleware"
import { getUser } from "./utils/user-service"

export async function middleware(request: NextRequest) {
  const { response } = createMiddlewareClient(request)

  const user = await getUser()

  if (user?.role !== "admin" && request.nextUrl.pathname === "/orders") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // if (!user && request.nextUrl.pathname.startsWith("/account")) {
  //   return NextResponse.redirect(new URL("/", request.url))
  // }

  if (!user && request.nextUrl.pathname.startsWith("/account")) {
    const loginUrl = new URL("/", request.url)
    loginUrl.searchParams.set("login", "true")
    return NextResponse.redirect(loginUrl)
  }

  if (request.nextUrl.pathname === "/account") {
    return NextResponse.redirect(new URL("/account/orders", request.url))
  }

  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
