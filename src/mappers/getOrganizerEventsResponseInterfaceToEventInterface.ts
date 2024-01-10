import { GetOrganizerEventsResponseInterface } from "api";
import { EventInterface } from "types";

function getOrganizerEventsResponseInterfaceToEventInterface(element: GetOrganizerEventsResponseInterface): EventInterface {
  return {
    id: element.id,
    name: element.name,
    companyId: element.companyId,
    companyName: element.companyName,
    dateFrom: new Date(element.dateFrom),
    dateTo: new Date(element.dateTo),
    status: element.status,
  };
}

export default getOrganizerEventsResponseInterfaceToEventInterface;
