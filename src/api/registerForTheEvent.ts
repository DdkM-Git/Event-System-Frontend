export interface RegisterForTheEventRequestInterface {
  eventId: number;
}

export interface RegisterForTheEventResponseInterface {
}

async function registerForTheEvent(props: RegisterForTheEventRequestInterface): Promise<Response> {

  return new Response(JSON.stringify(null));
}
export default registerForTheEvent;
