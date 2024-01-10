export interface CancelEventRequestInterface {
  eventId: number;
}

export interface CancelEventResponseInterface {
}

async function cancelEvent(props: CancelEventRequestInterface): Promise<Response> {

  return new Response(JSON.stringify(null));
}
export default cancelEvent;
