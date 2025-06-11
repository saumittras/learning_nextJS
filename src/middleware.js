import { NextResponse } from "next/server";

export function middleware(request) {

    const token = request.cookies.get("nextjs")
    console.log(token)
  const fakeData = {
    role: "admin",
    email: "admin@gmail.com",
  };
  const isAdmin = fakeData.role === "admin";
  const isInService = request.nextUrl.pathname.startsWith("/services");
  if (!isAdmin && isInService) {
    return NextResponse.rewrite(new URL("/login", request.url));
  } else {
    return NextResponse.next();
  }
}
