import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import deploymentId from "./staticId";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/refresh") {
    return NextResponse.next();
  }

  const clientDeploymentId =
    request.nextUrl.searchParams.get("dpl") ||
    request.headers.get("x-deployment-id");

  if (clientDeploymentId && clientDeploymentId !== deploymentId) {
    console.log("Client deployment id:", clientDeploymentId);
    console.log("Server deployment id:", deploymentId);

    const isAction =
      request.method === "POST" && request.headers.has("Next-Action");
    const refreshUrl = new URL("/refresh", request.url);

    if (isAction) {
      // For server actions, set a header to be handled by the action
      const response = NextResponse.next();
      response.headers.set("x-action-redirect", refreshUrl.toString());
      return response;
    } else {
      // For regular requests, redirect directly
      return NextResponse.redirect(refreshUrl);
    }
  }
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
