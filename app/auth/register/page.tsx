import Link from "next/link";
import RegisterForm from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-2 text-3xl font-bold">Create Account</h1>
        <p className="mb-6 text-gray-600">
          Register to upload and manage your images.
        </p>

        <RegisterForm />

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-medium underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}