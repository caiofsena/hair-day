import { cva, type VariantProps } from "class-variance-authority";
import Icon, { iconVariants } from "./icon"
import Text, { textVariants } from "./text";

type ButtonProps = 
  Omit<React.ComponentProps<"button">, "size" | "disabled"> & 
  VariantProps<typeof buttonVariants> & 
  {
    iconLeft?: React.ComponentProps<typeof Icon>["svg"];
    iconRight?: React.ComponentProps<typeof Icon>["svg"];
    iconColor?: VariantProps<typeof iconVariants>["color"];
    textColor?: VariantProps<typeof textVariants>["color"]
    text?: string;
  }

export const buttonVariants = cva(
  'flex cursor-pointer transition rounded-lg group gap-2',
  {
    variants: {
      variant: {
        primary: "w-full items-center justify-center bg-yellow hover:border-2 border-yellow-light",
        secondary: "items-center bg-transparent border border-solid border-gray-500"
      },
      size: {
        md: "h-14 px-4",
        sm: "h-12 p-3"
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

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  text,
  textColor = "quaternary",
  iconLeft: IconLeftComponent,
  iconRight: IconRightComponent,
  iconColor = "secondary",
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({variant, size, disabled, className})} {...props}>
      {IconLeftComponent && (
        <Icon
          svg={IconLeftComponent}
          className={iconVariants({color: iconColor, size})}
        />
      )}
      {text && (
        <Text variant="title-sm-bold" className={textVariants({variant: "title-sm-bold", color: textColor})}>
          {text}
        </Text>
      )}
      {children}
      {IconRightComponent && (
        <Icon
          svg={IconRightComponent}
          className={iconVariants({color: iconColor, size})}
        />
      )}
    </button>
  )
}