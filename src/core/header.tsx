import Container from "../components/container";

import Logo from "../assets/images/logo.svg?react"

export default function Header() {
  return (
    <Container 
      as="header" 
      className="flex items-center justify-center bg-gray-600 rounded-br-md md:h-14 w-36">
      <Logo className="h-16 md:h-24" />      
    </Container>
  )
}