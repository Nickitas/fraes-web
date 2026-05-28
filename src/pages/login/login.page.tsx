import { LoginForm } from "@/features/auth";

export function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4">
      <LoginForm />
    </div>
  );
}
