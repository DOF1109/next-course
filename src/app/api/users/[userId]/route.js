import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  ).then((res) => res.json());

  return NextResponse.json(resp);
};
