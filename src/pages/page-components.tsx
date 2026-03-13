import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputText from "../components/input-text";
import Text from "../components/text";
import TimeSelect from "../components/time-select";

import CaretDown from "../assets/icons/caret-down.svg?react"
import CalendarBlank from "../assets/icons/calendar-blank.svg?react"
import UserSquare from "../assets/icons/user-square.svg?react"
import Trash from "../assets/icons/trash.svg?react"

export default function PageComponents() {
  return (
      <Container className="flex bg-gray-800">

        <Container size="sm" className="flex flex-col gap-3 bg-gray-700">
          <Container className="flex flex-col">
            <Text variant="title-lg-bold" color="secondary">Agende um atendimento</Text>
            <Text variant="text-sm-regular" color="tertiary">Selecione data, horário e informe o nome do cliente para criar o agendamento</Text>
          </Container>

          <Container className="flex flex-col">
            <Text variant="title-md-bold">Data</Text>
            <Button variant="secondary" size="sm" iconRight={CaretDown} color="secondary">
              <InputText variant="secondary" size="sm" icon={CalendarBlank} placeholder="Data" />
            </Button>

            <Text variant="title-md-bold">Horários</Text>
            <Text variant="text-sm-regular" color="tertiary">Manhã</Text>
            <Container className="flex">
              <TimeSelect id="time-id-1" value="teste-1" name="time">Teste 1</TimeSelect>
              <TimeSelect id="time-id-2" value="teste-2" name="time" disabled>Teste 2</TimeSelect>
              <TimeSelect id="time-id-3" value="teste-3" name="time">Teste 3</TimeSelect>
            </Container>
            
            <Text variant="text-sm-regular" color="tertiary">Tarde</Text>
            <Container className="flex">
              <TimeSelect id="time-id-1" value="teste-1" name="time">Teste 1</TimeSelect>
              <TimeSelect id="time-id-2" value="teste-2" name="time" disabled>Teste 2</TimeSelect>
              <TimeSelect id="time-id-3" value="teste-3" name="time">Teste 3</TimeSelect>
            </Container>
            
            <Text variant="text-sm-regular" color="tertiary">Noite</Text>
            <Container className="flex">
              <TimeSelect id="time-id-1" value="teste-1" name="time">Teste 1</TimeSelect>
              <TimeSelect id="time-id-2" value="teste-2" name="time" disabled>Teste 2</TimeSelect>
              <TimeSelect id="time-id-3" value="teste-3" name="time">Teste 3</TimeSelect>
            </Container>
            
            <Text variant="title-md-bold">Cliente</Text>
            <InputText icon={UserSquare} placeholder="Nome do cliente" />
          </Container>
          
          <Button text="AGENDAR" />
        </Container>

        <Container size="md" className="flex flex-col gap-3 bg-yellow w-full">
          <Container>
            <Text variant="title-sm-bold">Teste</Text>
            <Text variant="title-sm-bold">Teste</Text>
            <Button>Botão teste</Button>
          </Container>
          <Container>
            <Card>
              <Icon svg={CalendarBlank} className="fill-yellow" />
              <Text variant="title-sm-bold">Teste</Text>
              <Text variant="title-sm-bold">Teste</Text>
              <>
                <Text variant="title-sm-bold">Teste</Text>
                <Text variant="title-sm-bold">Teste</Text>
                <ButtonIcon icon={Trash} />
              </>
            </Card>
            <Card>
              <Icon svg={CalendarBlank} className="fill-yellow" />
              <Text variant="title-sm-bold">Teste</Text>
              <Text variant="title-sm-bold">Teste</Text>
              <>
                <Text variant="title-sm-bold">Teste</Text>
                <Text variant="title-sm-bold">Teste</Text>
                <ButtonIcon icon={Trash} />
              </>
            </Card>
            <Card>
              <Icon svg={CalendarBlank} className="fill-yellow" />
              <Text variant="title-sm-bold">Teste</Text>
              <Text variant="title-sm-bold">Teste</Text>
              <>
                <Text variant="title-sm-bold">Teste</Text>
                <Text variant="title-sm-bold">Teste</Text>
                <ButtonIcon icon={Trash} />
              </>
            </Card>
          </Container>
        </Container>

      </Container>
  )
}