import { cva, type VariantProps } from "class-variance-authority"

type IconProps = 
  React.ComponentProps<"svg"> &
  VariantProps<typeof iconVariants> & {
  svg: React.FC<React.ComponentProps<"svg">>
}

export const iconVariants = cva("flex",
  {
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
      size: "md",
      color: "primary"
    }
  }
)

export default function Icon({svg: SvgComponent, color, size, className, ...props}: IconProps) {
  return <SvgComponent className={iconVariants({color, size, className})} {...props} />
}