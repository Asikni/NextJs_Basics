import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
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
