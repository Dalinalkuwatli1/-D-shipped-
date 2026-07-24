"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { toast } from "sonner";
import { Mail, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const forgotSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotFormValues = z.infer<typeof forgotSchema>;

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotFormValues>({
    resolver: zodResolver(forgotSchema),
  });

  const onSubmit = async (data: ForgotFormValues) => {
    // Simulate reset request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    toast.success("Password reset link sent!");
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-card border border-border rounded-3xl p-8 shadow-sm space-y-6">
        <div className="text-center">
          <Link href="/" className="font-display text-3xl font-extrabold tracking-tight">
            SHIPPED
          </Link>
          <h2 className="font-display text-2xl font-bold mt-4">Reset Password</h2>
          <p className="text-sm text-muted-foreground mt-1">
            We&apos;ll send you instructions to reset your password.
          </p>
        </div>

        {submitted ? (
          <div className="space-y-6 text-center">
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
              <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                Check your inbox for a reset link.
              </p>
            </div>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Login
            </Link>
          </div>
        ) : (
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 mt-2"
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
              {!isSubmitting && <ArrowRight className="w-4 h-4" />}
            </button>

            <div className="text-center">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
