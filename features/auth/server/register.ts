import bcrypt from "bcryptjs";

import { registerSchema } from "@/features/auth/schemas";
import { prisma } from "@/lib/db";

type RegisterInput = unknown;

export async function registerUser(input: RegisterInput) {
  const parsedInput = registerSchema.safeParse(input);

  if (!parsedInput.success) {
    return {
      status: 400,
      message: parsedInput.error.issues[0]?.message ?? "Invalid input",
    };
  }

  const { email, password } = parsedInput.data;
  const name = parsedInput.data.name || undefined;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      status: 409,
      message: "User already exists with this email",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return {
    status: 201,
    message: "User registered successfully",
  };
}
