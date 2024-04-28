export const getProjectAllData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/project`, {
    cache: "no-store",
  }).then((res) => res.json());

  return res;
};
