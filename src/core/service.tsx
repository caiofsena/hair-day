import Button from "../components/button";
import Container from "../components/container";
import InputText from "../components/input-text";
import Text from "../components/text";

import CaretDown from "../assets/icons/caret-down.svg?react"
import CalendarBlank from "../assets/icons/calendar-blank.svg?react"
import UserSquare from "../assets/icons/user-square.svg?react"
import ScheduleList from "./schedule-list";

export default function Service() {
  return (
    <Container as="aside" size="sm" className="flex flex-col gap-1 p-20 bg-gray-700 rounded-xl">
      <Container className="flex flex-col pb-6">
        <Text variant="title-lg-bold" color="secondary" className="pb-2">Agende um atendimento</Text>
        <Text variant="text-sm-regular" color="tertiary">Selecione data, horário e informe o nome do cliente para criar o agendamento</Text>
      </Container>

      <Container className="flex flex-col pb-6">
        <Container className="flex flex-1 flex-col pb-8">
          <Text variant="title-md-bold" className="pb-2">Data</Text>
          <Button variant="secondary" size="sm" iconLeft={CalendarBlank} iconRight={CaretDown} color="secondary">
            <Container className="flex flex-auto">
              <InputText variant="secondary" size="sm" placeholder="Data" />
            </Container>
          </Button>
        </Container>

        <ScheduleList />

        <Container className="flex flex-col">
          <Text variant="title-md-bold" className="pb-2">Cliente</Text>
          <InputText icon={UserSquare} placeholder="Nome do cliente" />
        </Container>
      </Container>
      
      <Button text="AGENDAR" />
    </Container>
  )
}