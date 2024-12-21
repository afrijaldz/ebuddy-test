import { BASE_URL } from "@/helpers/constant";
import { cookies } from "next/headers";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;

  console.log(slug);

  // const cookieStore = await cookies();
  // const res = await fetch(`${BASE_URL}/api/users/fetch-user-data/${body}`, {
  //   method: "PUT",
  //   body: JSON.stringify(body),
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${cookieStore.get("token")?.value}`,
  //   },
  // });

  // const response = await res.json();

  return Response.json("response");
}
