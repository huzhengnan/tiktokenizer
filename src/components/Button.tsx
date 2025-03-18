import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "~/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-700 shadow-sm focus:ring-blue-500 focus:ring-offset-white",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-sm focus:ring-red-500 focus:ring-offset-white",
        outline:
          "bg-transparent border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 focus:ring-slate-400 focus:ring-offset-white",
        subtle:
          "bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-slate-400 focus:ring-offset-white",
        ghost:
          "bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 focus:ring-slate-400 focus:ring-offset-white",
        link: "bg-transparent underline-offset-4 hover:underline text-blue-600 hover:text-blue-700 focus:ring-blue-500 focus:ring-offset-white",
        primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md focus:ring-blue-500 focus:ring-offset-white",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md text-xs",
        lg: "h-11 px-8 rounded-md text-base",
        icon: "h-9 w-9 p-0 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
