import React from "react";
import Container from "../components/container";
import Text from "../components/text";
import TimeSelect from "../components/time-select";
import useSchedule from "../hooks/use-schedule";

export default function ScheduleList() {
  const { scheduleList, loadScheduleList } = useSchedule();
  const currentSchedule = scheduleList[0];

  function handleSelectSchedule(id: string) {
    // select schedule
    console.log("ScheduleList select: ", id);
  }

  async function load() {
    await loadScheduleList();
  }

  React.useEffect(() => {
    load();
  }, []);

  return (
    <Container className="flex flex-col pb-6 gap-2">
      <Text variant="title-md-bold" className="pb-2">Horários</Text>
      {currentSchedule && (
        <>
          {currentSchedule.periods && 
            currentSchedule.periods.map(
              period => {
                return (
                  <Container key={period.title}>
                    <Text variant="text-sm-regular" color="tertiary" className="pb-2">{period.title}</Text>
                    <Container className="flex flex-wrap pb-3 gap-1">
                      {period.items && period.items.map(item => {
                        return (
                          <TimeSelect 
                            id={item.id} 
                            key={item.id}
                            value={item.value} 
                            name="time" 
                            disabled={item.disabled}
                            onClick={() => {
                              if (!item.disabled) {
                                handleSelectSchedule(item.id)}
                              }
                            }>
                              {item.value}
                            </TimeSelect>
                        )
                      })}
                    </Container>            
                  </Container>
                )
              })}
        </>
      )}
    </Container>
  )
}