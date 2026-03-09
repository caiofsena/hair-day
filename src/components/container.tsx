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
        lg: "max-w-360 px-2"
      }
    },
    defaultVariants: {
      size: "lg"
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