import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

type ContainerProps =  
  React.ComponentProps<"div"> & 
  VariantProps<typeof containerVariants> &
  {
    as?: keyof React.JSX.IntrinsicElements;
  }

export const containerVariants = cva("", 
  {
    variants: {
      size: {
        full: "",
        lg: "max-w-360",
        md: "max-w-226.5",
        sm: "max-w-126",
      }
    },
    defaultVariants: {
      size: "full"
    }
  }
)


export default function Container({
  as = "div",
  size,
  children,
  className,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: containerVariants({size, className}),
      ...props
    },
    children
  )
}