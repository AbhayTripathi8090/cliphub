"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import TextInput from "@/components/ui/TextInput";
import {
  loginSchema,
  type LoginFormValues,
} from "@/features/auth/schemas";

export default function LoginForm() {
  const router = useRouter();

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormValues) {
    setError("");

    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid email or password");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
      {error && (
        <p className="rounded bg-red-100 p-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <TextInput
        placeholder="Email"
        type="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <TextInput
        placeholder="Password"
        type="password"
        error={errors.password?.message}
        {...register("password")}
      />

      <button
        disabled={isSubmitting}
        className="w-full rounded bg-black px-4 py-2 text-white disabled:opacity-60"
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
