import useLocalStorage from "use-local-storage";
import { SCHEDULE_KEY, ScheduleListDefault } from "../constants";
import type { Entry, Schedule } from "../models";

export default function useSchedule() {
  const [ scheduleList, setScheduleList ] = useLocalStorage<Schedule[]>(SCHEDULE_KEY, []);
  const [ seletedScheduleDate, setSelectedScheduleDate ] = 
    useLocalStorage<string>(`${SCHEDULE_KEY}:selectedDate`, new Date().toDateString());

  async function loadScheduleList() {
    if (scheduleList && scheduleList.length === 0) {
      setScheduleList(ScheduleListDefault);
    }
  }

  async function updateScheduleList(date: string, entryList: Entry[]) {
    const entryListByDate = entryList.filter(entry => entry.date === date);
    const newScheduleList = 
      scheduleList.map(schedule => {
        return {
          ...schedule,
          items: schedule.items.map(item => {
            const scheduleItemFoundInEntryList = 
              entryListByDate.find(entry => entry.hour === item.value);
            if (scheduleItemFoundInEntryList) {
              return {
                ...item,
                disabled: true
              }
            } else {
              return {
                ...item,
                disabled: false
              }
            }
            
          })
        }
      })
    if (newScheduleList) {
      setScheduleList(newScheduleList);
    }
  }

  return {
    scheduleList,
    seletedScheduleDate,
    setSelectedScheduleDate,
    loadScheduleList,
    updateScheduleList
  }
}