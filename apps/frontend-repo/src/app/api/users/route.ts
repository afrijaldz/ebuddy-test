import { BASE_URL } from "@/helpers/constant";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const res = await fetch(`${BASE_URL}/api/users/fetch-user-data`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookieStore.get("token")?.value}`,
    },
  });

  const response = await res.json();

  return Response.json(response);
}
