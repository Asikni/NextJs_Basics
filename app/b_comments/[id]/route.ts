import { comments } from "../data";
//find a comment
export async function POST(
  _request: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  console.log("the comment is :", typeof comment);
  return Response.json(comment); // extract JSON content from a Response object
}

// Patch Requests

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  console.log("the index is ", index);
  comments[index].text = text; //replace text in the original by new

  return Response.json(comments);
}

//Delete REquests

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );

  const deletedComment = comments[index];
  console.log("The deleted comment is :", deletedComment);
  comments.splice(index, 1);
  return Response.json(comments);
}
