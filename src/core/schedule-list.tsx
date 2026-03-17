import React from "react";
import Container from "../components/container";
import Text from "../components/text";
import TimeSelect from "../components/time-select";
import useSchedule from "../hooks/use-schedule";

type ScheduleListProps = {
  selectedHour: string;
  setSelectedPeriod: (period: string) => void,
  setSelectedHour: (hour: string) => void
}

export default function ScheduleList({ selectedHour, setSelectedPeriod, setSelectedHour }: ScheduleListProps) {
  const { scheduleList, loadScheduleList } = useSchedule();
  const currentSchedule = scheduleList;

  function handleSelectSchedule(period: string, hour: string) {
    setSelectedPeriod(period);
    setSelectedHour(hour);
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
      {currentSchedule && 
        currentSchedule.map(schedule => 
          (
            <Container key={schedule.title}>
              <Text variant="text-sm-regular" color="tertiary" className="pb-2">{schedule.title}</Text>
              <Container className="flex flex-wrap pb-3 gap-1">
                {schedule.items && schedule.items.map(item => {
                  return (
                    <TimeSelect 
                      id={item.id} 
                      key={item.id}
                      value={item.value} 
                      name="time" 
                      disabled={item.disabled}
                      checked={selectedHour === item.value}
                      onClick={() => {
                        if (!item.disabled) {
                          handleSelectSchedule(schedule.title, item.value)}
                        }
                      }>
                        {item.value}
                      </TimeSelect>
                  )
                })}
              </Container>            
            </Container>
          )
        )
      }
    </Container>
  )
}