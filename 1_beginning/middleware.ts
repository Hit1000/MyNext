import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));}

  // must exist and /:path for all paths
export const config = {
  matcher: "/f1",
};