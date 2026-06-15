"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function Form({ className, children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form className={cn("space-y-4", className)} {...props}>
      {children}
    </form>
  )
}

export function FormField({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-1">{children}</div>
}

export function FormItem({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>
}

export function FormLabel({ className, children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={cn("text-sm font-medium", className)} {...props}>
      {children}
    </label>
  )
}

export function FormControl({ children }: { children: React.ReactNode }) {
  return <div className="mt-1">{children}</div>
}

export function FormMessage({ children }: { children: React.ReactNode }) {
  if (!children) return null
  return <p className="text-sm text-red-600">{children}</p>
}

export default Form
