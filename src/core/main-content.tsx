import { cx } from "class-variance-authority"
import Container from "../components/container"

type MainContentProps = Omit<React.ComponentProps<"main">, "ref"> & {}

export default function MainContent({
  children,
  className,
  ...props
}: MainContentProps) {
  return (
    <Container as="main" size="lg" className={cx("", className)} {...props}>
      {children}
    </Container>
  )
}