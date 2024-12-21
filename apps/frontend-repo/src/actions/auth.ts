import {
  SignupFormSchema,
  FormStateRegister,
  FormStateLogin,
  LoginFormSchema,
} from "@/lib/definitions";
import { createSession } from "@/lib/session";
import { ResponseAuthLogin, ResponseAuthRegister } from "@/types/auth";
import { redirect } from "next/navigation";

export async function signup(_: FormStateRegister, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    displayName: formData.get("displayName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(validatedFields.data),
  });

  const response: ResponseAuthRegister = await res.json();

  if (response) {
    redirect("/login");
  }
}

export async function signin(_: FormStateLogin, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const res = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(validatedFields.data),
  });

  const response: ResponseAuthLogin = await res.json();

  if (response.status === "success") {
    createSession(response.data.stsTokenManager.accessToken);
    redirect("/");
  }
}
