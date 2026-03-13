import Container from "../components/container";
import Diary from "../core/diary";
import Service from "../core/service";

export default function PageHome() {
  return (
    <Container className="flex gap-3 pl-3">
      <Service />
      <Diary />
    </Container>
  )
}