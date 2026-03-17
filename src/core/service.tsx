import Button from "../components/button";
import Container from "../components/container";
import InputText from "../components/input-text";
import Text from "../components/text";
import Icon from "../components/icon";

import CaretDown from "../assets/icons/caret-down.svg?react"
import CalendarBlank from "../assets/icons/calendar-blank.svg?react"
import UserSquare from "../assets/icons/user-square.svg?react"

import ScheduleList from "./schedule-list";
import React from "react";
import useEntry from "../hooks/use-entry";
import { generateNewId } from "../helpers";
import type { Entry } from "../models";
import useSchedule from "../hooks/use-schedule";
import DatePicker, { registerLocale } from "react-datepicker";
import { ptBR } from 'date-fns/locale';

import "react-datepicker/dist/react-datepicker.css";

export default function Service() {
  const { saveEntry, entryList } = useEntry();
  const { updateScheduleList } = useSchedule();
  const [ client, setClient ] = React.useState("");
  const [ selectedDate, setSelectedDate ] = React.useState(new Date().toDateString());
  const [ selectedHour, setSelectedHour ] = React.useState("");
  const [ selectedPeriod, setSelectedPeriod ] = React.useState("");

  registerLocale('ptBR', ptBR);

  function validEntryFields() {
    if (selectedDate && selectedHour && client) {
      return true;
    }
    return false;
  }

  async function handleSaveEntry(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validEntryFields()) {
      const newEntry: Entry = {
        id: generateNewId(),
        period: selectedPeriod,
        date: selectedDate,
        hour: selectedHour,
        client,
        createdAt: new Date().toDateString()
      }
      
      const updatedEntryList =  await saveEntry(newEntry);
      await updateScheduleList(selectedDate, updatedEntryList);

      setSelectedHour("");
      setSelectedPeriod("");
      setClient("");
    }
  }

  async function handleChangeDate(date: Date | null) {
    if (date) {
      setSelectedDate(date?.toDateString());
      await updateScheduleList(date?.toDateString(), entryList);
    }
  }

  function handleChangeClient(e: React.ChangeEvent<HTMLInputElement>) {
    setClient(e.target.value);
  }

  return (
    <Container as="aside" size="sm" className="flex flex-col gap-1 p-20 bg-gray-700 rounded-xl">
      <Container className="flex flex-col pb-6">
        <Text variant="title-lg-bold" color="secondary" className="pb-2">Agende um atendimento</Text>
        <Text variant="text-sm-regular" color="tertiary">Selecione data, horário e informe o nome do cliente para criar o agendamento</Text>
      </Container>
      <form onSubmit={handleSaveEntry}>
        <Container className="flex flex-col pb-6">
          <Container className="flex flex-1 flex-col pb-8">
            <Text variant="title-md-bold" className="pb-2">Data</Text>
            <Container className="flex flex-auto items-center p-3 w-full border border-gray-500 rounded-lg">
              <Icon svg={CalendarBlank} />
              <DatePicker 
                icon={<CalendarBlank />} 
                locale="ptBR"
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                selected={new Date(selectedDate)} 
                onChange={(date: Date | null) => handleChangeDate(date)}
                onKeyDown={(e) => {
                  e.preventDefault();
                }}
                className="flex w-64 max-w-64 ml-2 text-gray-200 outline-none"
              />
              <Icon svg={CaretDown} color="secondary" className="ml-2" />
            </Container>
          </Container>

          <ScheduleList selectedHour={selectedHour} setSelectedHour={setSelectedHour} setSelectedPeriod={setSelectedPeriod} />

          <Container className="flex flex-col">
            <Text variant="title-md-bold" className="pb-2">Cliente</Text>
            <InputText 
              icon={UserSquare} 
              placeholder="Nome do cliente" 
              value={client}
              onChange={handleChangeClient} 
              autoFocus
              required
              className="w-72 max-w-72" 
            />
          </Container>
        </Container>
        <Button type="submit" text="AGENDAR" disabled={!validEntryFields()} />
      </form>
    </Container>
  )
}