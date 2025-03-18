import * as React from "react";

import { cn } from "~/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-200 bg-white py-2 px-3 text-sm text-slate-700 shadow-sm transition-colors placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50 dark:focus:ring-blue-600 dark:focus:ring-opacity-25",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex w-full rounded-md border border-slate-200 bg-white py-2 px-3 text-sm text-slate-700 shadow-sm transition-colors placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50 dark:focus:ring-blue-600 dark:focus:ring-opacity-25",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
TextArea.displayName = "TextArea";

export { Input, TextArea };
