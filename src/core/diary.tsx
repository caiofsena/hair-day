import Container from "../components/container";
import Text from "../components/text";

import CalendarBlank from "../assets/icons/calendar-blank.svg?react"
import CaretDown from "../assets/icons/caret-down.svg?react"
import EntryList from "./entry-list";
import React from "react";
import Icon from "../components/icon";
import DatePicker from "react-datepicker";
import useEntry from "../hooks/use-entry";

import "react-datepicker/dist/react-datepicker.css";

export default function Diary() {
  const { getEntryListByDate } = useEntry();
  const [ selectedDate, setSelectedDate ] = React.useState(new Date().toDateString());

  async function handleChangeDate(date: Date | null) {
    if (date) {
      setSelectedDate(date?.toDateString());
      getEntryListByDate(date?.toDateString());
    }
  }

  return (
    <Container size="md" className="w-full px-28 py-20">
      <Container className="flex flex-col">
        <Container as="header" className="flex">
          <Container className="flex flex-col w-lg">
            <Text variant="title-lg-bold">Sua agenda</Text>
            <Text variant="text-sm-regular">Consulte os seus cortes de cabelo agendados por dia</Text>
          </Container>
          <Container className="flex items-center gap-2 p-3 ml-3 mb-2 border border-gray-500 rounded-lg">
            <Icon svg={CalendarBlank} />
            <DatePicker 
              icon={<CalendarBlank />} 
              locale="ptBR"
              dateFormat="dd/MM/yyyy"
              selected={new Date(selectedDate)} 
              onChange={(date: Date | null) => handleChangeDate(date)} 
              onKeyDown={(e) => {
                e.preventDefault();
              }}
              className="flex flex-auto max-inline-20 text-gray-200 pt-1 outline-none"
            />
            <Icon svg={CaretDown} color="secondary" />
          </Container>
        </Container>
        <EntryList selectedDate={selectedDate}  />
      </Container>
    </Container>
  )
}