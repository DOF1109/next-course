import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  // extract params from url
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  ).then((res) => res.json());

  // exctract search params or query from url
  const { searchParams } = new URL(request.url);
  console.log(searchParams.get("name"));
  console.log(searchParams.get("last_name"));

  // url for this example: http://localhost:3000/api/users/1?name=patroclo&last_name=messi

  return NextResponse.json(resp);
};
