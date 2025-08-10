import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const req = request.url;
  const { searchParams } = new URL(req);
  console.log(searchParams);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request: Request, { params }) {
  const body = await request.json();

  return NextResponse.json(body);
}
