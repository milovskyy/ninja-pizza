import { NextResponse, type NextRequest } from "next/server"
import { createMiddlewareClient } from "./utils/supabase/middleware"
import { getUser } from "./utils/users-service"

export async function middleware(request: NextRequest) {
  const { response } = createMiddlewareClient(request)

  // const user = await getUser()

  // if (
  //   user?.role !== "admin" &&
  //   (request.nextUrl.pathname === "/orders" ||
  //     request.nextUrl.pathname.startsWith("/account"))
  // ) {
  //   return NextResponse.redirect(new URL("/", request.url))
  // }

  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
