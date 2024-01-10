import { GetMemberTicketsResponseInterface } from "api";
import { TicketInterface } from "types";

function getMemberTicketsResponseInterfaceToTicketInterface(element: GetMemberTicketsResponseInterface): TicketInterface {
  return {
    id: element.id,
    number: element.number,
    dateOfBuy: new Date(element.dateOfBuy),
    eventId: element.eventId,
    eventName: element.eventName,
    eventStatus: element.eventStatus,
    companyId: element.companyId,
    companyName: element.companyName,
    userId: element.userId,
  };
}

export default getMemberTicketsResponseInterfaceToTicketInterface;
