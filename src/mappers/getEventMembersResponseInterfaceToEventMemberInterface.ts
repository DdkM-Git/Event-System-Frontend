import { GetEventMembersResponseInterface } from "api";
import { EventMemberInterface } from "types";

function getEventMembersResponseInterfaceToEventMemberInterface(element: GetEventMembersResponseInterface): EventMemberInterface {
  return {
    id: element.id,
    name: element.name,
    companyId: element.companyId,
    companyName: element.companyName,
    registrationDate: new Date(element.registrationDate),
    ticketBuyingDate: new Date(element.ticketBuyingDate),
  };
}

export default getEventMembersResponseInterfaceToEventMemberInterface;
