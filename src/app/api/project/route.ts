// import { getIsLiked, toggleIsLiked } from "@/app/server";
import { NextResponse } from "next/server";
import { PROJECTS_DATA } from "@/mocks/project";

export async function GET() {
  return NextResponse.json(PROJECTS_DATA, {
    status: 200,
  });
}

export async function POST() {
  // 네트워크 지연 시뮬레이션
  // await new Promise((resolve) =>
  //   setTimeout(resolve, 1200 * Math.random() + 200)
  // );
  // const isLiked = toggleIsLiked();
  // return NextResponse.json({ isLiked });
  // return "post";
}
