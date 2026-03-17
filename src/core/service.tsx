import Button from "../components/button";
import Container from "../components/container";
import InputText from "../components/input-text";
import Text from "../components/text";

import CaretDown from "../assets/icons/caret-down.svg?react"
import CalendarBlank from "../assets/icons/calendar-blank.svg?react"
import UserSquare from "../assets/icons/user-square.svg?react"
import ScheduleList from "./schedule-list";
import React from "react";
import useEntry from "../hooks/use-entry";
import { generateNewId } from "../helpers";
import type { Entry } from "../models";
import useSchedule from "../hooks/use-schedule";

export default function Service() {
  const { saveEntry } = useEntry();
  const { updateScheduleList } = useSchedule();
  const [ client, setClient ] = React.useState("");
  const [ selectedDate, setSelectedDate ] = React.useState("13/03/2026");
  const [ selectedHour, setSelectedHour ] = React.useState("");
  const [ selectedPeriod, setSelectedPeriod ] = React.useState("");

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
      console.log("handleSaveEntry: ", newEntry);
      const updatedEntryList =  await saveEntry(newEntry);
      await updateScheduleList(selectedDate, updatedEntryList);

      setSelectedHour("");
      setSelectedPeriod("");
      setClient("");
    }
  }

  function handleChangeDate(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedDate(e.target.value);
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
            <Button 
              type="button" 
              variant="secondary" 
              size="sm" 
              iconLeft={CalendarBlank} 
              iconRight={CaretDown} 
              color="secondary">
              <Container className="flex flex-auto">
                <InputText 
                  variant="secondary" 
                  size="sm" 
                  placeholder="Data" 
                  value={selectedDate} 
                  onChange={handleChangeDate} />
              </Container>
            </Button>
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
              required />
          </Container>
        </Container>
        <Button type="submit" text="AGENDAR" disabled={!validEntryFields()} />
      </form>
    </Container>
  )
}