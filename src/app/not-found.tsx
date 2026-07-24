import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-4">
      <h1 className="font-display text-[120px] font-extrabold text-foreground/5 leading-none">404</h1>
      <h2 className="font-display text-3xl font-bold mt-4">Page Not Found</h2>
      <p className="text-muted-foreground mt-2 max-w-sm">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4" /> Go back home
      </Link>
    </div>
  );
}
