import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

type TextProps = 
  React.ComponentProps<"span"> &
  VariantProps<typeof textVariants> & 
  {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
    htmlFor?: string
  }

export const textVariants = cva("font-sans", {
  variants: {
    variant: {
      "title-lg-bold": "text-3xl leading-6 font-bold",
      "title-md-bold": "text-lg leading-6 font-bold",
      "title-sm-bold": "text-sm leading-5 font-bold",
      "text-md-regular": "text-lg leading-6 font-normal",
      "text-sm-regular": "text-sm leading-5 font-normal"
    },
    color: {
      primary: "text-gray-200",
      secondary: "text-gray-100",
      tertiary: "text-gray-300",
      quaternary: "text-gray-900",
    }
  },
  defaultVariants: {
    variant: "text-sm-regular",
    color: "primary"
  }
})

export default function Text({as = "span", variant, color, className, children, ...props}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({variant, color, className}),
      ...props
    },
    children
  )
}