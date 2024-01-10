import EventStatusType from "../types/EventStatusType";

export interface GetAllEventsRequestInterface { }

export interface GetAllEventsResponseInterface {
  id: number;
  name: string;
  companyId: number;
  companyName: string;
  dateFrom: string;
  dateTo: string;
  status: EventStatusType;
}

async function getAllEvents(props: GetAllEventsRequestInterface): Promise<Response> {
  const dataBase: GetAllEventsResponseInterface[] = [
    {
      id: 1,
      name: "Konferencja dziennikarska",
      companyId: 1,
      companyName: "NY Times",
      dateFrom: "2024-03-01T16:00:00",
      dateTo: "2024-03-02T16:00:00",
      status: "opened",
    },
    {
      id: 2,
      name: "Warsztaty karciane",
      companyId: 2,
      companyName: "Macao Company",
      dateFrom: "2024-03-14T08:00:00",
      dateTo: "2024-03-18T20:00:00",
      status: "opened",
    },
  ];

  return new Response(JSON.stringify(dataBase));
}
export default getAllEvents;
