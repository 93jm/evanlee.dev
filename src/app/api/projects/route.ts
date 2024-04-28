import { NextResponse } from "next/server";
import { fetchProjects } from "@/data/firestore";

export async function GET() {
  const fetchedProjects = await fetchProjects();
  const response = {
    message: "projects를 가지고 왔습니다.",
    data: fetchedProjects,
  };

  return NextResponse.json(response, {
    status: 200,
  });
}

export async function POST() {}
