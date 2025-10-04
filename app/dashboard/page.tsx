import { auth } from "@/lib/auth";
import DashboardClientPage from "./dashboard-client";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const sesssion = await auth.api.getSession({
    headers: await headers(),
  });
  if (!sesssion) {
    redirect("/auth");
  }
  return <DashboardClientPage />;
}
