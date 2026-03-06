import CalendarBlank from "./assets/icons/calendar-blank.svg?react"
import Trash from "./assets/icons/trash.svg?react"
import UserSquare from "./assets/icons/user-square.svg?react"

import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import Icon from "./components/icon";
import InputText from "./components/input-text";
import Text from "./components/text";

export default function App() {
  return (
    <div className="flex flex-col gap-2 bg-gray-900">
      <Text variant="title-sm-bold">Teste</Text>
      <Icon svg={CalendarBlank} className="fill-yellow" />
      <Button>Botão teste</Button>
      <ButtonIcon icon={Trash} />
      <InputText icon={UserSquare} placeholder="Nome do cliente" />
    </div>
  )
  
}
