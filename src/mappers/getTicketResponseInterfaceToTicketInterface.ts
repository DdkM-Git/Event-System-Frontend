import { GetTicketResponseInterface } from "api";
import { TicketInterface } from "types";

function getTicketResponseInterfaceToTicketInterface(element: GetTicketResponseInterface): TicketInterface {
  return {
    id: element.id,
    number: element.number,
    dateOfBuy: new Date(element.dateOfBuy),
    companyId: element.companyId,
    companyName: element.companyName,
    eventId: element.eventId,
    eventName: element.eventName,
    eventStatus: element.eventStatus,
    userId: element.userId
  };
}

export default getTicketResponseInterfaceToTicketInterface;
