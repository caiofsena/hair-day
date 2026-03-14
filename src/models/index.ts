export type Schedule = {
  id: string;
  periods: Period[];
};

export type Period = {
  title: string;
  description: string;
  items: PeriodItem[];
}

export type PeriodItem = {
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