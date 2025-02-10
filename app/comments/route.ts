import {comments} from "./data";
import { NextRequest } from "next/server";


// export async function GET() {
//   return Response.json(comments);
// }

// http://localhost:3000/comments?query=second 
export async function GET( request : NextRequest){
    const searchParams = request.nextUrl.searchParams;
    // console.log("searchParams", searchParams); // searchParams: URLSearchParams { 'query' => 'second1' }
    console.log(" request nextUrl",  request.nextUrl);
    const query = searchParams.get("query");
    const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

    return Response.json(filteredComments)
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = { id: comments.length + 1, text: comment.text };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  }