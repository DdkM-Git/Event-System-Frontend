import EventStatusType from "../types/EventStatusType";

export interface GetTicketRequestInterface {
  ticketId: number;
}

export interface GetTicketResponseInterface {
  id: number;
  number: string;
  dateOfBuy: string;
  eventId: number;
  eventName: string;
  eventStatus: EventStatusType;
  companyId: number;
  companyName: string;
  userId: number;
}

async function getTicket(props: GetTicketRequestInterface): Promise<Response> {
  const dataBase: GetTicketResponseInterface = {
    id: 1,
    number: "GDS-123/HSGHG",
    dateOfBuy: "2024-01-04T08:00:00",
    eventId: 1,
    eventName: "Konferencja dziennikarska",
    eventStatus: "opened",
    companyId: 1,
    companyName: "NY Times",
    userId: 1,
  };

  return new Response(JSON.stringify(dataBase));
}
export default getTicket;
