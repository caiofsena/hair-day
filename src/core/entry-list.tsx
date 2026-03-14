import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import Text from "../components/text";

import CalendarBlank from "../assets/icons/calendar-blank.svg?react"
import CloudSun from "../assets/icons/cloud-sun.svg?react"
import MoonStars from "../assets/icons/moon-stars.svg?react"
import SunHorizon from "../assets/icons/sun-horizon.svg?react"

import EntryItem from "./entry-item";
import useSchedule from "../hooks/use-schedule";
import useEntry from "../hooks/use-entry";
import React from "react";

export default function EntryList() {
  const { scheduleList } = useSchedule();
  const { entryList, loadEntryList } = useEntry();

  const currentSchedule = scheduleList[0];

  function currentPeriodIcon(period: string) {
    if (period === "Manhã") {
      return SunHorizon;
    }
    if (period === "Tarde") {
      return CloudSun;
    }
    if (period === "Noite") {
      return MoonStars;
    }
    return CalendarBlank;
  }

  async function load() {
    await loadEntryList();
  }

  React.useEffect(() => {
    load();
  }, [])

  return (
    <Container className="flex flex-col pt-8 gap-3">

      {currentSchedule && (
        <>
          {currentSchedule.periods && 
            currentSchedule.periods.map(period => {
              return (
                <Card key={period.title} className="border border-gray-600">
                  <Container className="flex items-center border-b border-b-gray-600 py-3 px-5 gap-3">
                    <Icon svg={currentPeriodIcon(period.title)} className="fill-yellow" />
                    <Text variant="title-sm-bold" className="flex flex-auto">{period.title}</Text>
                    <Text variant="title-sm-bold">{period.description}</Text>
                  </Container>
                  <Container className="p-5 gap-0.5">
                    {period.items && (
                      period.items.map(item => {
                        const currentEntry = 
                          entryList.find(entry => entry.date === currentSchedule.id && entry.hour === item.value);
                        if (currentEntry) {
                          return (
                            <EntryItem id={currentEntry.id} key={currentEntry.id} hour={currentEntry?.hour} client={currentEntry.client} />
                          )
                        }
                        return null;
                      })
                    )}
                  </Container>
                </Card>
              )
            })}
        </>
      )}
    </Container>
  )
}