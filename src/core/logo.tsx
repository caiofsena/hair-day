import Container from "../components/container";

import LogoImage from "../assets/images/logo.svg?react"

export default function Logo() {
  return (
    <Container 
      className="flex items-center justify-center bg-gray-600 rounded-br-md absolute top-0 left-0 md:h-14 w-36">
      <LogoImage className="h-16 md:h-24" />      
    </Container>
  )
}