"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Lock, Mail, ArrowRight } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    // Simulate login API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Successfully logged in!");
    router.push("/account");
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-card border border-border rounded-3xl p-8 shadow-sm space-y-6">
        <div className="text-center">
          <Link href="/" className="font-display text-3xl font-extrabold tracking-tight">
            SHIPPED
          </Link>
          <h2 className="font-display text-2xl font-bold mt-4">Welcome Back</h2>
          <p className="text-sm text-muted-foreground mt-1">Sign in to your premium account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                {...register("email")}
                type="email"
                placeholder="sarah@example.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-muted/20 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Password</label>
              <Link href="/forgot-password" className="text-xs text-primary hover:underline font-semibold">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                {...register("password")}
                type="password"
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-muted/20 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 mt-2"
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
            {!isSubmitting && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-primary hover:underline">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
}
