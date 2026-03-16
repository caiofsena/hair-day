import useLocalStorage from "use-local-storage";
import { SCHEDULE_KEY, ScheduleListData } from "../constants";
import type { Entry, Schedule } from "../models";

export default function useSchedule() {
  const [ scheduleList, setScheduleList ] = useLocalStorage<Schedule[]>(SCHEDULE_KEY, []);

  async function loadScheduleList() {
    if (scheduleList && scheduleList.length === 0) {
      setScheduleList(ScheduleListData);
    }
  }

  async function updateScheduleList(entry: Entry) {
    const newScheduleList = scheduleList
      .map(schedule => {
        if (schedule.id === entry.date) {
          return {
            ...schedule,
            periods: schedule.periods
              .map(period => {
                if (period.title === entry.period) {
                  return {
                    ...period,
                    items: period.items
                      .map(item => {
                        if (item.value === entry.hour) {
                          return { ...item, disabled: true }
                        }
                        return item;
                      })
                  }
                }
                return period;
              })
          }
        }
        return schedule;
      })
    if (newScheduleList) {
      setScheduleList(newScheduleList);
    }
  }

  return {
    scheduleList,
    loadScheduleList,
    updateScheduleList
  }
}