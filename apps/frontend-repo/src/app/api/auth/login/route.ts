import { BASE_URL } from "@/helpers/constant";
import { ResponseAuthLogin } from "@/types/auth";

export async function POST(request: Request) {
  const body = await request.json();

  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response: ResponseAuthLogin = await res.json();

  return Response.json(response);
}
