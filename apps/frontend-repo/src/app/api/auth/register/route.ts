import { BASE_URL } from "@/helpers/constant";
import { ResponseAuthRegister } from "@/types/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch(`${BASE_URL}/api/auth/register`, {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response: ResponseAuthRegister = await res.json();

  return Response.json(response);
}
