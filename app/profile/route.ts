
import { type NextRequest } from "next/server";
import { redirect } from "next/navigation";
// import { type Response } from "next/server";
import { headers } from "next/headers";


export async function GET(req: NextRequest) {
    // redirect("/comments");
    // const requestHeader = new Headers(req.headers);
    // console.log(requestHeader.get("Authorization"));
    const headerList = await req.headers;
    const name = req.cookies.get("name");
    console.log("name", name);
    // console.log(headerList);
    return Response.json("<h1>Profile Page</h1>",
        {headers: {
            "Content-Type" : "text/html",
            "Set-Cookie": "name=John; HttpOnly; SameSite=Strict"
        }}
    );
    // return Response.json({name: "John Doe", age: 25});
}