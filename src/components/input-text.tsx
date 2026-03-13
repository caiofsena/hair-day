import { cva, cx, type VariantProps } from "class-variance-authority"
import { textVariants } from "./text"
import Icon from "./icon"

type InputTextProps = 
  Omit<React.ComponentProps<"input">, "size"> & 
  VariantProps<typeof inputTextContainerVariants> & 
  {
    icon?: React.FC<React.ComponentProps<"svg">>
  }

export const inputTextContainerVariants = cva(
  "flex items-center gap-2", 
  {
    variants: {
      variant: {
        primary: "border border-solid border-gray-500 focus-within:border-yellow",
        secondary: ""
      },
      size: {
        md: "p-3",
        sm: "p-0"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
)

export default function InputText({
  icon: IconComponent,
  size,
  variant,
  className,
  ...props
}: InputTextProps) {
  return (
    <div className={inputTextContainerVariants({variant, size})}>
      {IconComponent && <Icon svg={IconComponent} />}
      <input
        className={
          cx(
            "placeholder:text-gray-400",
            textVariants({variant: "text-md-regular"}),
            className
          )
        }
        {...props} />
    </div>
  )
}