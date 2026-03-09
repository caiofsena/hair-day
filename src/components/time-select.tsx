import { cva, cx, type VariantProps } from "class-variance-authority"
import Text, { textVariants } from "./text"

type TimeSelectProps = 
  Omit<React.ComponentProps<"label">, "disabled"> & 
  React.ComponentProps<"input"> &
  VariantProps<typeof timeSelectTextVariants>
  {

  }

export const timeSelectTextVariants = cva("w-fit py-2 px-5",
  {
    variants: {
      variant: {
        primary: `border border-solid rounded-lg transition-colors cursor-pointer 
        border-gray-500 text-gray-200 bg-gray-600 hover:bg-gray-500
        peer-checked:border-yellow  peer-checked:text-yellow peer-checked:bg-gray-600 peer-checked:pointer-events-none`
      },
      disabled: {
        true: "border-gray-600 text-gray-500 bg-gray-900 pointer-events-none"
      }
    },
    defaultVariants: {
      variant: "primary",
      disabled: false
    }
  }
)

export default function TimeSelect({
  id,
  name,
  value,
  variant,
  disabled,
  children
}: TimeSelectProps) {
  return (
    <div className={"flex items-center justify-center"}>
      <input
        type="radio"
        id={id}
        name={name}
        className={"appearance-none peer"}
        value={value}
        disabled={disabled}
      />
      <Text 
        as="label"
        htmlFor={id}
        variant="text-md-regular"
        className={timeSelectTextVariants(({variant, disabled}))}>
        {children}
      </Text>
      
    </div>
  )

}