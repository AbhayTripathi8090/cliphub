"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import TextInput from "@/components/ui/TextInput";
import {
  registerSchema,
  type RegisterFormValues,
} from "@/features/auth/schemas";

export default function RegisterForm() {
  const router = useRouter();

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: RegisterFormValues) {
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      router.push("/auth/login");
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
        placeholder="Name"
        error={errors.name?.message}
        {...register("name")}
      />

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
        {isSubmitting ? "Creating account..." : "Register"}
      </button>
    </form>
  );
}
