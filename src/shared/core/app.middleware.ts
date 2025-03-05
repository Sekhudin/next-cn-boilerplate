import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log(request.url);
  console.log("middleware in");
  return NextResponse.next();
};
