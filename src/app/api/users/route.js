import { NextResponse } from "next/server";

export const GET = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  return NextResponse.json(resp);
};

export const POST = async (request) => {
  const {name, last_name} = await request.json(); // access to request body
  console.log(name, last_name);

  return NextResponse.json({ message: "POST correct response" });
};

export const PUT = () => {
  return NextResponse.json({ message: "PUT correct response" });
};

export const DELETE = () => {
  return NextResponse.json({ message: "DELETE correct response" });
};
