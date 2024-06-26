//two ways to create headers

import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers); //first method
  const headerList = headers(); //next provides headers on its own
  const theme = request.cookies.get("theme")
 
  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));
  console.log(headerList.get("Accept"));
  console.log(theme)


  return new Response("<h1> profile </h1>", {
    headers: {
      "Content-Type": "text/html",
      'Set-Cookie':'theme-dark'
    },
  });
}
