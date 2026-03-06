import { cva, cx, type VariantProps } from "class-variance-authority"
import { textVariants } from "./text"
import Icon from "./icon"

type InputTextProps = 
  Omit<React.ComponentProps<"input">, "size"> & 
  VariantProps<typeof inputTextContainerVariants> & 
  VariantProps<typeof inputTextVariants> & 
  VariantProps<typeof inputTextIconVariants> & 
  {
    icon?: React.FC<React.ComponentProps<"svg">>
  }

export const inputTextContainerVariants = cva(
  "flex items-center border border-solid border-gray-500 focus-within:border-yellow", 
  {
    variants: {
      size: {
        md: "p-3"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
)

export const inputTextVariants = cva("outline-none", 
  {
    variants: {
      textColor: {
        primary: "text-gray-200 placeholder:text-gray-400"
      }
    },
    defaultVariants: {
      textColor: "primary"
    }
  }
)

export const inputTextIconVariants = cva("pr-2",
  {
    variants: {
      iconColor: {
        primary: "fill-yellow"
      }
    },
    defaultVariants: {
      iconColor: "primary"
    }
  }
)

export default function InputText({
  icon: IconComponent,
  size,
  textColor,
  iconColor,
  className,
  ...props
}: InputTextProps) {
  return (
    <div className={inputTextContainerVariants({size})}>
      {IconComponent && <Icon svg={IconComponent}  className={inputTextIconVariants({iconColor})} />}
      <input
        className={
          cx(
            inputTextVariants({textColor}),
            textVariants({variant: "text-md-regular"}),
            className
          )
        }
        {...props} />
    </div>
  )
}