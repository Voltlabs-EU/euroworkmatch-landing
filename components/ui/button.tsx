import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:bg-red-600 dark:text-white dark:hover:bg-red-700",
        outline:
          "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600",
        ghost:
          "hover:bg-accent/10 hover:text-accent-foreground dark:text-slate-300 dark:hover:bg-slate-700/50 dark:hover:text-white",
        link: "text-primary underline-offset-4 hover:underline dark:text-accent",
        // WorkMatch custom variants
        hero: "bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        "hero-outline":
          "border-2 border-teal-400/30 bg-teal-400/10 text-white backdrop-blur-sm hover:bg-teal-400/20 hover:border-teal-400/50",
        navy: "bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-md hover:shadow-lg hover:scale-[1.02] dark:from-slate-700 dark:to-slate-600",
        "teal-glow":
          "bg-teal-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:brightness-110",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
