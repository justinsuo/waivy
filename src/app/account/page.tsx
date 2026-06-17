import type { Metadata } from "next";
import { AccountView } from "@/components/auth/AccountView";

export const metadata: Metadata = {
  title: "Account — Waivy",
  description: "Your Waivy account.",
};

export default function AccountPage() {
  return <AccountView />;
}
