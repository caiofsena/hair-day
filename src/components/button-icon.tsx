import { cva, type VariantProps } from "class-variance-authority";
import Icon, { iconVariants } from "./icon";

type ButtonIconProps = 
  Omit<React.ComponentProps<"button">, "size"> & 
  VariantProps<typeof buttonIconVariants> &
  VariantProps<typeof iconVariants> &
  {
    icon: React.ComponentProps<typeof Icon>["svg"]
  }

export const buttonIconVariants = cva("inline-flex items-center justify-center cursor-pointer")

export default function ButtonIcon({size, className, icon, ...props} : ButtonIconProps) {
  return (
    <button className={buttonIconVariants({className})} {...props}>
      <Icon svg={icon} className={iconVariants({size, className: "hover:fill-yellow-dark"})} />
    </button>
  )
}