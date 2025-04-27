import { NextRequest, NextResponse } from "next/server";
// import { isMatch } from "src/utils/base";
// import * as env from "src/configs/env.config";

export const middleware = (request: NextRequest) => {
  const cookies = request.cookies;
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams;
  console.log(cookies, pathname, searchParams);
  // const cookies = request.cookies;
  // const pathname = request.nextUrl.pathname;
  // const refreshToken = cookies.get(env.server.REFRESH_TOKEN_NAME);
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/", "/group/:path*", "/node/:path*", "/user/:path*"],
};
