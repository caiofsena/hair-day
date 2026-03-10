import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon"
import Text from "./text";

type ButtonProps = 
  Omit<React.ComponentProps<"button">, "size" | "disabled"> & 
  VariantProps<typeof buttonVariants> & 
  VariantProps<typeof buttonTextVariants> & 
  VariantProps<typeof buttonIconVariants> & 
  {
    iconLeft?: React.ComponentProps<typeof Icon>["svg"];
    iconRight?: React.ComponentProps<typeof Icon>["svg"];
    text?: string;
  }

export const buttonVariants = cva(
  'flex items-center justify-center cursor-pointer transition rounded-lg group gap-2',
  {
    variants: {
      variant: {
        primary: "bg-yellow hover:border-2 border-yellow-light",
        secondary: "bg-transparent border border-solid border-gray-500"
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

export const buttonTextVariants = cva("",
  {
    variants: {
      color: {
        primary: "text-gray-900",
        secondary: ""
      }
    },
    defaultVariants: {
      color: "primary"
    }
  }
)

export const buttonIconVariants = cva("",{
  variants: {
    color: {
      primary: "fill-yellow",
      secondary: "fill-gray-300"
    },
    size: {
      md: "w-5 h-5",
      sm: "w-4 h-4"
    }
  },
  defaultVariants: {
    color: "primary",
    size: "md"
  }
})

export default function Button({
  variant,
  size,
  disabled,
  color,
  className,
  children,
  text,
  iconLeft: IconLeftComponent,
  iconRight: IconRightComponent,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({variant, size, disabled, className})} {...props}>
      {IconLeftComponent && (
        <Icon
          svg={IconLeftComponent}
          className={buttonIconVariants({color, size})}
        />
      )}
      {text && (
        <Text variant="title-sm-bold" className={buttonTextVariants({color})}>
          {text}
        </Text>
      )}
      {children}
      {IconRightComponent && (
        <Icon
          svg={IconRightComponent}
          className={buttonIconVariants({color, size})}
        />
      )}
    </button>
  )
}