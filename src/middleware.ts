export { middleware } from "src/shared/core/app.middleware";

export const config = {
  matcher: ["/dashboard/:path*", "/group/:path*", "/node/:path*", "/user/:path*"],
};
