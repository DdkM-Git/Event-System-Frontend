import EventStatusType from "../types/EventStatusType";

export interface EditEventRequestInterface {
  eventId: number;
  eventName: string;
  eventDateFrom: string;
  eventDateTo: string;
}

export interface EditEventResponseInterface {
}

async function editEvent(props: EditEventRequestInterface): Promise<Response> {

  return new Response(JSON.stringify(null));
}
export default editEvent;
