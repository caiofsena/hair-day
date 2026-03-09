import CalendarBlank from "./assets/icons/calendar-blank.svg?react"
import Trash from "./assets/icons/trash.svg?react"
import UserSquare from "./assets/icons/user-square.svg?react"

import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import Card from "./components/card";
import Container from "./components/container";
import Icon from "./components/icon";
import InputText from "./components/input-text";
import Text from "./components/text";
import TimeSelect from "./components/time-select";

export default function App() {
  return (
    <Container className="flex flex-col gap-2 bg-gray-900">
      <Text variant="title-sm-bold">Teste</Text>
      <Icon svg={CalendarBlank} className="fill-yellow" />
      <ButtonIcon icon={Trash} />
      <InputText icon={UserSquare} placeholder="Nome do cliente" />
      <TimeSelect id="time-id-1" value="teste-1" name="time">Teste 1</TimeSelect>
      <TimeSelect id="time-id-2" value="teste-2" name="time" disabled>Teste 2</TimeSelect>
      <TimeSelect id="time-id-3" value="teste-3" name="time">Teste 3</TimeSelect>
      <Button>Botão teste</Button>
      <Card>Ola mundo</Card>
    </Container>
  )
  
}
