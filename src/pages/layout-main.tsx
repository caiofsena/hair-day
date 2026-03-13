import { Outlet } from "react-router";
import Header from "../core/header";
import MainContent from "../core/main-content";
import Footer from "../core/footer";
import Container from "../components/container";

export default function LayoutMain() {
  return (
    <Container className="flex flex-col">
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </Container>
  )
}