import { NextResponse } from "next/server";

import { registerUser } from "@/features/auth/server/register";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await registerUser(body);

    return NextResponse.json(
      { message: result.message },
      { status: result.status }
    );
  } catch (error) {
    console.error("REGISTER_ERROR", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
