import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";

type ButtonIconProps = 
  Omit<React.ComponentProps<"button">, "size"> & 
  VariantProps<typeof buttonIconVariants> &
  {
    icon: React.ComponentProps<typeof Icon>["svg"]
  }

export const buttonIconVariants = cva(
  "inline-flex items-center justify-center cursor-pointer",
  {
    variants: {
      variant: {
        primary: "fill-yellow hover:fill-yellow-dark"
      },
      size: {
        sm: "w-8 h-8"
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm"
    }
  }
)

export default function ButtonIcon({variant, size, className, icon, ...props} : ButtonIconProps) {
  return (
    <button {...props}>
      <Icon svg={icon} className={buttonIconVariants({variant, size, className})}  />
    </button>
  )
}