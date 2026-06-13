import bcrypt from "bcryptjs";

import { prisma } from "@/lib/db";

type RegisterInput = {
  name?: string;
  email?: string;
  password?: string;
};

export async function registerUser(input: RegisterInput) {
  const name = input.name?.trim();
  const email = input.email?.trim().toLowerCase();
  const password = input.password;

  if (!email || !password) {
    return {
      status: 400,
      message: "Email and password are required",
    };
  }

  if (password.length < 6) {
    return {
      status: 400,
      message: "Password must be at least 6 characters",
    };
  }

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
