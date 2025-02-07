import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full disabled:cursor-not-allowed disabled:opacity-50 bg-white rounded-md",
  {
    variants: {
      variant: {
        default: "input input-md input-bordered",
        file: "file-input file-input-bordered file-input-md [&>*]:bg-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Input = React.forwardRef(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
