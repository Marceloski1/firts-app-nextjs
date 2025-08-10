import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  return NextResponse.json({ message: "El sueño bro" });
}

export function POST() {
  return NextResponse.json({ message: "Hello POST User" });
}

export function PUT() {
  return NextResponse.json({ message: "Hello PUT User" });
}

export function DELETE() {
  return NextResponse.json({ message: "Hello DELETE User" });
}
