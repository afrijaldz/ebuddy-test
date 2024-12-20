import { ResponseAuthRegister } from "@/types/auth";

const BASE_URL = "http://localhost:3333";

export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch(`${BASE_URL}/api/auth/register`, {
    body,
    method: "POST",
  });

  const response: ResponseAuthRegister = await res.json();

  return Response.json(response);
}
