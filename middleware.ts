import { NextResponse, type NextRequest } from "next/server"
import { getUser } from "./utils/user-service"
import { updateSession } from "./utils/supabase/middleware"

export async function middleware(request: NextRequest) {
  const user = await getUser()

  if (!user && request.nextUrl.pathname.startsWith("/account")) {
    const response = NextResponse.redirect(new URL("/", request.url))
    response.cookies.set("login-modal", "true", { path: "/" })
    return response
  }

  if (request.nextUrl.pathname === "/account") {
    return NextResponse.redirect(new URL("/account/orders", request.url))
  }

  if (user?.role !== "admin" && request.nextUrl.pathname === "/orders") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return await updateSession(request)
}

// http://localhost:3000/account

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
