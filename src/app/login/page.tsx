import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign in — Waivy",
  description: "Sign in or create your Waivy account.",
};

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-md py-16 text-center text-sm text-ink-muted">
          Loading…
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
