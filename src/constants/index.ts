export const ScheduleListData = [
  {
    id: "13/03/2026",
    periods: [
      {
        title: "Manhã",
        description: "09h-12h",
        items: [
          {
            id: "time-id-09:00",
            value: "09:00",
            disabled: true
          },
          {
            id: "time-id-10:00",
            value: "10:00",
            disabled: false
          },
          {
            id: "time-id-11:00",
            value: "11:00",
            disabled: true
          },
          {
            id: "time-id-12:00",
            value: "12:00",
            disabled: false
          }
        ]
      },
      {
        title: "Tarde",
        description: "13h-18h",
        items: [
          {
            id: "time-id-13:00",
            value: "13:00",
            disabled: false
          },
          {
            id: "time-id-14:00",
            value: "14:00",
            disabled: false
          },
          {
            id: "time-id-15:00",
            value: "15:00",
            disabled: false
          },
          {
            id: "time-id-16:00",
            value: "16:00",
            disabled: false
          },
          {
            id: "time-id-17:00",
            value: "17:00",
            disabled: false
          },
          {
            id: "time-id-18:00",
            value: "18:00",
            disabled: false
          }
        ]
      },
      {
        title: "Noite",
        description: "19h-21h",
        items: [
          {
            id: "time-id-19:00",
            value: "19:00",
            disabled: false
          },
          {
            id: "time-id-20:00",
            value: "20:00",
            disabled: false
          },
          {
            id: "time-id-21:00",
            value: "21:00",
            disabled: false
          }
        ]
      },

    ]
  }
];

export const EntryListData = [
  {
    id: "1",
    period: "Manhã",
    date: "13/03/2026",
    hour: "09:00",
    client: "Client Test 1",
    createdAt: "13/03/2026 12:00"
  },
  {
    id: "2",
    period: "Manhã",
    date: "13/03/2026",
    hour: "10:00",
    client: "Client Test 2",
    createdAt: "13/03/2026 12:00"
  },
  {
    id: "3",
    period: "Tarde",
    date: "13/03/2026",
    hour: "14:00",
    client: "Client Test 3",
    createdAt: "13/03/2026 12:00"
  },
  {
    id: "4",
    period: "Noite",
    date: "13/03/2026",
    hour: "21:00",
    client: "Client Test 4",
    createdAt: "13/03/2026 12:00"
  },
]