import EventStatusType from "../types/EventStatusType";

export interface GetOrganizerEventsRequestInterface { }

export interface GetOrganizerEventsResponseInterface {
  id: number;
  name: string;
  companyId: number;
  companyName: string;
  dateFrom: string;
  dateTo: string;
  status: EventStatusType;
}

async function getOrganizerEvents(props: GetOrganizerEventsRequestInterface): Promise<Response> {
  const dataBase: GetOrganizerEventsResponseInterface[] = [
    {
      id: 1,
      name: "Konferencja dziennikarska",
      companyId: 1,
      companyName: "NY Times",
      dateFrom: "2024-03-01T16:00:00",
      dateTo: "2024-03-02T16:00:00",
      status: "opened"
    },
    {
      id: 2,
      name: "Warsztaty karciane1",
      companyId: 2,
      companyName: "Macao Company",
      dateFrom: "2024-03-14T08:00:00",
      dateTo: "2024-03-18T20:00:00",
      status: "opened"
    },
    {
      id: 3,
      name: "Warsztaty karciane2",
      companyId: 2,
      companyName: "Macao Company",
      dateFrom: "2024-03-14T08:00:00",
      dateTo: "2024-03-18T20:00:00",
      status: "canceled"
    },
  ];

  return new Response(JSON.stringify(dataBase));
}
export default getOrganizerEvents;
