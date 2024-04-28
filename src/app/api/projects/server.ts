import { redirect } from "next/navigation";

export const getProjectAllData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
      cache: "no-store",
    }).then((res) => res.json());
    return res;
  } catch (e) {
    redirect("/");
  }
};
