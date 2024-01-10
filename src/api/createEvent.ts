import EventStatusType from "../types/EventStatusType";

export interface CreateEventRequestInterface {
  eventName: string;
  eventDateFrom: string;
  eventDateTo: string;
}

export interface CreateEventResponseInterface {
}

async function createEvent(props: CreateEventRequestInterface): Promise<Response> {

  return new Response(JSON.stringify(null));
}
export default createEvent;
