import Button from "../components/button";
import Container from "../components/container";
import InputText from "../components/input-text";
import Text from "../components/text";
import TimeSelect from "../components/time-select";

import CaretDown from "../assets/icons/caret-down.svg?react"
import CalendarBlank from "../assets/icons/calendar-blank.svg?react"
import UserSquare from "../assets/icons/user-square.svg?react"

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

        <Container className="flex flex-col pb-6">
          <Text variant="title-md-bold" className="pb-2">Horários</Text>
          <Text variant="text-sm-regular" color="tertiary" className="pb-2">Manhã</Text>
          <Container className="flex flex-wrap pb-3 gap-1">
            <TimeSelect id="time-id-1" value="teste-1" name="time">09:00</TimeSelect>
            <TimeSelect id="time-id-2" value="teste-2" name="time" disabled>10:00</TimeSelect>
            <TimeSelect id="time-id-3" value="teste-3" name="time">11:00</TimeSelect>
            <TimeSelect id="time-id-4" value="teste-4" name="time">12:00</TimeSelect>
          </Container>
          
          <Text variant="text-sm-regular" color="tertiary" className="pb-2">Tarde</Text>
          <Container className="flex flex-wrap pb-3 gap-1">
            <TimeSelect id="time-id-1" value="teste-1" name="time">13:00</TimeSelect>
            <TimeSelect id="time-id-2" value="teste-2" name="time" disabled>14:00</TimeSelect>
            <TimeSelect id="time-id-3" value="teste-3" name="time">15:00</TimeSelect>
            <TimeSelect id="time-id-4" value="teste-4" name="time">16:00</TimeSelect>
            <TimeSelect id="time-id-5" value="teste-5" name="time">17:00</TimeSelect>
            <TimeSelect id="time-id-6" value="teste-6" name="time">18:00</TimeSelect>
          </Container>
          
          <Text variant="text-sm-regular" color="tertiary" className="pb-2">Noite</Text>
          <Container className="flex flex-wrap pb-3 gap-1">
            <TimeSelect id="time-id-1" value="teste-1" name="time">09:00</TimeSelect>
            <TimeSelect id="time-id-2" value="teste-2" name="time" disabled>10:00</TimeSelect>
            <TimeSelect id="time-id-3" value="teste-3" name="time">11:00</TimeSelect>
            <TimeSelect id="time-id-4" value="teste-4" name="time">12:00</TimeSelect>
          </Container>
        </Container>

        <Container className="flex flex-col">
          <Text variant="title-md-bold" className="pb-2">Cliente</Text>
          <InputText icon={UserSquare} placeholder="Nome do cliente" />
        </Container>
      </Container>
      
      <Button text="AGENDAR" />
    </Container>
  )
}