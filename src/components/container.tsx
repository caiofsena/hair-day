import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

type ContainerProps =  
  React.ComponentProps<"div"> & 
  VariantProps<typeof containerVariants> &
  {
    as?: keyof React.JSX.IntrinsicElements;
  }

export const containerVariants = cva("mx-auto", {
    variants: {
      size: {
        full: "",
        lg: "max-w-360 py-2",
        md: "max-w-226.5 py-2",
        sm: "max-w-124.5 py-2",
      }
    },
    defaultVariants: {
      size: "full"
    }
  }
)


export default function Container({
  as = "div",
  children,
  className,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: containerVariants({size: "lg", className}),
      ...props
    },
    children
  )
}