import { NextResponse } from "next/server";
import { PROJECTS_DATA } from "@/mocks/project";

export async function GET() {
  return NextResponse.json(PROJECTS_DATA, {
    status: 200,
  });
}

export async function POST() {}
