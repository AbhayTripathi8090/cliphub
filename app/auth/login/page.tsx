import Link from "next/link";
import LoginForm from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-2 text-3xl font-bold">Login</h1>
        <p className="mb-6 text-gray-600">
          Login to view and upload your images.
        </p>

        <LoginForm />

        <p className="mt-4 text-sm">
          Do not have an account?{" "}
          <Link href="/auth/register" className="font-medium underline">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}