import { notFound } from "next/navigation";
import AdminClient from "./AdminClient";

export default function AdminProjectsPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return <AdminClient />;
}
