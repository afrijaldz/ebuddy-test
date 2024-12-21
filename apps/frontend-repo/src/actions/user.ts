import { FormStateUser, UserFormSchema } from "@/lib/definitions";

export async function updateUser(_: FormStateUser, formData: FormData) {
  const validatedFields = UserFormSchema.safeParse({
    name: formData.get("name"),
    uid: formData.get("uid"),
  });
  console.log(validatedFields);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log(validatedFields.data.uid);

  // await fetch("/api/users/update/" + validatedFields.data.uid, {
  //   method: "PUT",
  //   body: JSON.stringify(validatedFields.data),
  // });
}
