import { NextResponse } from "next/server";
import { fetchProjects, addProjects } from "@/data/firestore";

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

export async function POST() {
  const addedProject = await addProjects();

  const response = {
    message: "프로젝트 추가 테스트",
    data: addedProject,
  };

  return NextResponse.json(response, { status: 200 });
}
