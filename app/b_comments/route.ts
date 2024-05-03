import { comments } from "./data";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  //nextrequest object provides methods to handle query parameters
  const searchParams = request.nextUrl.searchParams; //access all query parameters in the url
  console.log("the search params are:", searchParams);
  const query = searchParams.get("query");  
  const check = searchParams.has("number");
  console.log("check is there", check)
  console.log(query)  
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  //server is recieving the request
  const comment = await request.json(); //converting that request into json format

  const newcomment = {
    id: comments.length + 1,
    text: comment.text,
    place: comment.place,
  };
  comments.push(newcomment);
  return new Response(JSON.stringify(comments), {
    //object or value to json string
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
