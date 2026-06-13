import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Image Gallery App</h1>

        <p className="mt-4 text-gray-600">
          Upload your images and view them securely after login.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/auth/register"
            className="rounded bg-black px-5 py-2 text-white"
          >
            Register
          </Link>

          <Link
            href="/auth/login"
            className="rounded border px-5 py-2"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}