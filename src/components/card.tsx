import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

type CardProps = 
  React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & 
  {
    as?: keyof React.JSX.IntrinsicElements;
  }

export const cardVariants = cva(
  "rounded-lg border border-solid border-gray-600 bg-transparent", 
  {
    variants: {
      size: {
        none: "",
        md: 'p-5'
      }
    },
    defaultVariants: {
      size: "none"
    }
  }
)

export default function Card({
  as = "div",
  size,
  children,
  className,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({size, className}),
      ...props
    },
    children
  )
}