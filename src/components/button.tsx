import { cva, type VariantProps } from "class-variance-authority";
import type Icon from "./icon"
import Text from "./text";

type ButtonProps = 
  Omit<React.ComponentProps<"button">, "size" | "disabled"> & 
  VariantProps<typeof buttonVariants> & 
  {
    icon?: React.ComponentProps<typeof Icon>["svg"];
  }

export const buttonVariants = cva(
  'flex items-center justify-center cursor-pointer transition rounded-lg group gap-2',
  {
    variants: {
      variant: {
        primary: "bg-yellow hover:border-2 border-yellow-light"
      },
      size: {
        md: "h-14 px-4"
      },
      disabled: {
        true: "opacity-30 pointer-events-none"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false
    }
  }
)

export const buttonTextVariants = cva("",
  {
    variants: {
      variant: {
        primary: "text-gray-900"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
)

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({variant, size, disabled, className})} {...props}>
      <Text variant="title-sm-bold" className={buttonTextVariants({variant})}>
        {children}
      </Text>
    </button>
  )
}