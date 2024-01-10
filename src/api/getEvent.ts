import EventStatusType from "../types/EventStatusType";

export interface GetEventRequestInterface {
  eventId: number;
}

export interface GetEventResponseInterface {
  id: number;
  name: string;
  companyId: number;
  companyName: string;
  dateFrom: string;
  dateTo: string;
  status: EventStatusType;
}

async function getEvent(props: GetEventRequestInterface): Promise<Response> {
  const dataBase: GetEventResponseInterface = {
    id: 1,
    companyId: 1,
    companyName: "NY Times",
    name: "Konferencja dziennikarska",
    dateFrom: "2024-03-01T16:00:00",
    dateTo: "2024-03-02T16:00:00",
    status: "opened"
  };

  return new Response(JSON.stringify(dataBase));
}
export default getEvent;
