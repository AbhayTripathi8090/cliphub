import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import LogoutButton from "@/features/auth/components/LogoutButton";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <main className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Welcome, {session?.user?.name || session?.user?.email}
          </p>
        </div>

        <LogoutButton />
      </div>

      <div className="mt-8 rounded border p-6">
        <h2 className="text-xl font-semibold">Image Gallery App</h2>
        <p className="mt-2 text-gray-600">
          Authentication is working. Next step is image upload.
        </p>
      </div>
    </main>
  );
}