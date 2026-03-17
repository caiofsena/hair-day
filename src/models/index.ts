export type Schedule = {
  title: string;
  description: string;
  items: ScheduleItem[];
}

export type ScheduleItem = {
  id: string;
  value: string;
  disabled: boolean;
}

export type Entry = {
  id: string;
  period: string;
  date: string;
  hour: string;
  client: string;
  createdAt: string;
}