import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import Text from "../components/text";

import CloudSun from "../assets/icons/cloud-sun.svg?react"
import MoonStars from "../assets/icons/moon-stars.svg?react"
import SunHorizon from "../assets/icons/sun-horizon.svg?react"

import EntryItem from "./entry-item";
import useEntry from "../hooks/use-entry";
import useSchedule from "../hooks/use-schedule";

type EntryListProps = {
  selectedDate: string;
}

export default function EntryList({ selectedDate }: EntryListProps) {
  const { entryList, removeEntry } = useEntry();
  const { updateScheduleList } = useSchedule();
  
  const currentEntryList = entryList.filter(entry => entry.date === selectedDate);
  const currentEntryListByMorning = currentEntryList.filter(item => item.period === "Manhã");
  const currentEntryListByAfternoon = currentEntryList.filter(item => item.period === "Tarde");
  const currentEntryListByNight = currentEntryList.filter(item => item.period === "Noite");
  
  const NoEntry = () => <><Text>Nenhum agendamento para este período</Text></>;

  async function handleRemoveEntry(id: string) {
    const updatedEntryList = await removeEntry(id);
    await updateScheduleList(selectedDate, updatedEntryList);
  } 

  return (
    <Container className="flex flex-col pt-8 gap-3">
      {entryList && (
        <>
          <Card className="border border-gray-600">
            <Container className="flex items-center border-b border-b-gray-600 py-3 px-5 gap-3">
              <Icon svg={SunHorizon} className="fill-yellow" />
              <Text variant="title-sm-bold" className="flex flex-auto">{"Manhã"}</Text>
              <Text variant="title-sm-bold">{"09h-12h"}</Text>
            </Container>
            <Container className="p-5 gap-0.5">
              {currentEntryListByMorning && currentEntryListByMorning.length > 0 ? 
                currentEntryListByMorning.map(item => (
                  <EntryItem key={item.id} hour={item?.hour} client={item.client} onRemoveEntry={() => handleRemoveEntry(item.id)} />
                )
              ) : <NoEntry />}
            </Container>
          </Card>
          <Card className="border border-gray-600">
            <Container className="flex items-center border-b border-b-gray-600 py-3 px-5 gap-3">
              <Icon svg={CloudSun} className="fill-yellow" />
              <Text variant="title-sm-bold" className="flex flex-auto">{"Tarde"}</Text>
              <Text variant="title-sm-bold">{"13h-17h"}</Text>
            </Container>
            <Container className="p-5 gap-0.5">
              {currentEntryListByAfternoon && currentEntryListByAfternoon.length > 0 ?
                currentEntryListByAfternoon.map(item => (
                  <EntryItem key={item.id} hour={item?.hour} client={item.client} onRemoveEntry={() => handleRemoveEntry(item.id)} />
                )
              ) : <NoEntry />}
            </Container>
          </Card>
          <Card className="border border-gray-600">
            <Container className="flex items-center border-b border-b-gray-600 py-3 px-5 gap-3">
              <Icon svg={MoonStars} className="fill-yellow" />
              <Text variant="title-sm-bold" className="flex flex-auto">{"Noite"}</Text>
              <Text variant="title-sm-bold">{"18h-21h"}</Text>
            </Container>
            <Container className="p-5 gap-0.5">
              {currentEntryListByNight && currentEntryListByNight.length > 0 ?
                currentEntryListByNight.map(item => (
                  <EntryItem key={item.id} hour={item?.hour} client={item.client} onRemoveEntry={() => handleRemoveEntry(item.id)} />
                )
              ) : <NoEntry />}
            </Container>
          </Card>
        </>
      )}
    </Container>
  )
}