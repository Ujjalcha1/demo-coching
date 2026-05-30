import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg border border-blue-950/10 bg-white/80 px-4 py-2 text-sm outline-none transition placeholder:text-slate-400 focus:border-royal focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/10",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";
