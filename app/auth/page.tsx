import { auth } from "@/lib/auth";
import AuthClientPage from "./auth-client";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthPage() {
  const sesssion = await auth.api.getSession({
    headers: await headers(),
  });
  if (sesssion) {
    redirect("/dashboard");
  }
  return <AuthClientPage />;
}
