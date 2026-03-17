import Container from "../components/container";
import Text from "../components/text";

import CalendarBlank from "../assets/icons/calendar-blank.svg?react"
import CaretDown from "../assets/icons/caret-down.svg?react"
import EntryList from "./entry-list";
import React from "react";
import Icon from "../components/icon";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useEntry from "../hooks/use-entry";

export default function Diary() {
  const { getEntryListByDate } = useEntry();
  const [ selectedDate, setSelectedDate ] = React.useState(new Date().toDateString());

  async function handleChangeDate(date: Date | null) {
    console.log("handleChangeClient 1");
    if (date) {
      console.log("handleChangeClient 2: ", date);
      setSelectedDate(date?.toDateString());
      await getEntryListByDate(date?.toDateString());
    }
  }

  return (
    <Container size="md" className="w-full px-28 py-20">
      <Container className="flex flex-col">
        <Container as="header" className="flex">
          <Container className="flex flex-col">
            <Text variant="title-lg-bold">Sua agenda</Text>
            <Text variant="text-sm-regular">Consulte os seus cortes de cabelo agendados por dia</Text>
          </Container>
            <Container className="flex flex-auto items-center gap-2 p-3 w-full border border-gray-500 rounded-lg">
              <Icon svg={CalendarBlank} />
              <DatePicker 
                icon={<CalendarBlank />} 
                locale="ptBR"
                dateFormat="dd/MM/yyyy"
                selected={new Date(selectedDate)} 
                onChange={(date: Date | null) => handleChangeDate(date)} 
                className="flex flex-auto text-gray-200 pt-1"
              />
              <Icon svg={CaretDown} color="secondary" />
            </Container>
        </Container>
        <EntryList selectedDate={selectedDate}  />
      </Container>
    </Container>
  )
}