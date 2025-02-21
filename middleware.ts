import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import deploymentId from "./staticId";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/refresh") {
    const clientDeploymentId =
      request.nextUrl.searchParams.get("dpl") ||
      request.headers.get("x-deployment-id");
    if (clientDeploymentId && clientDeploymentId !== deploymentId) {
      console.log("client deployment id", clientDeploymentId);
      console.log("server deployment id", deploymentId);
      return NextResponse.redirect(new URL("/refresh", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
