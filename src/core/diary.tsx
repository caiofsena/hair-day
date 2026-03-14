import Button from "../components/button";
import Container from "../components/container";
import Text from "../components/text";

import CalendarBlank from "../assets/icons/calendar-blank.svg?react"
import CaretDown from "../assets/icons/caret-down.svg?react"
import InputText from "../components/input-text";
import EntryList from "./entry-list";

export default function Diary() {
  return (
    <Container size="md" className="w-full px-28 py-20">
      <Container className="flex flex-col">
        <Container as="header" className="flex">
          <Container className="flex flex-col">
            <Text variant="title-lg-bold">Sua agenda</Text>
            <Text variant="text-sm-regular">Consulte os seus cortes de cabelo agendados por dia</Text>
          </Container>
          <Button 
            variant="secondary" 
            size="sm" 
            iconLeft={CalendarBlank} 
            iconRight={CaretDown} 
            color="secondary">
              <Container className="flex flex-auto">
                <InputText variant="secondary" size="sm" placeholder="Data" maxLength={10} width={10} />
              </Container>
          </Button>
        </Container>
        <EntryList />
      </Container>
    </Container>
  )
}