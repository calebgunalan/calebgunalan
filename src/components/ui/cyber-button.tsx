import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cyberButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-mono uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-neon hover:shadow-glow border border-primary/50",
        neon: "bg-transparent text-cyber-blue border-2 border-cyber-blue shadow-neon hover:bg-cyber-blue/10 hover:shadow-glow",
        matrix: "bg-gradient-matrix text-foreground shadow-cyber hover:shadow-glow border border-cyber-green/50",
        cyber: "bg-gradient-cyber text-foreground shadow-neon hover:shadow-glow border border-cyber-purple/50",
        ghost: "text-cyber-blue hover:bg-cyber-blue/10 hover:text-cyber-blue border border-transparent hover:border-cyber-blue/30",
        terminal: "bg-background/80 text-cyber-green border border-cyber-green/50 font-mono hover:bg-cyber-green/10 hover:shadow-neon"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface CyberButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cyberButtonVariants> {
  asChild?: boolean
}

const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(cyberButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
CyberButton.displayName = "CyberButton"

export { CyberButton, cyberButtonVariants }