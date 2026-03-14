import useLocalStorage from "use-local-storage";
import { SCHEDULE_KEY, ScheduleListData } from "../constants";
import type { Schedule } from "../models";

export default function useSchedule() {
  const [ scheduleList, setScheduleList ] = useLocalStorage<Schedule[]>(SCHEDULE_KEY, []);

  async function loadScheduleList() {
    setScheduleList(ScheduleListData);
  }

  return {
    scheduleList,
    loadScheduleList
  }
}