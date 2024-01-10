export interface GetEventMembersRequestInterface {
  eventId: number;
}

export interface GetEventMembersResponseInterface {
  id: number;
  name: string;
  companyId: number | null;
  companyName: string;
  ticketId: number;
  registrationDate: string;
  ticketBuyingDate: string;
}

async function getEventMembers(props: GetEventMembersRequestInterface): Promise<Response> {
  const dataBase: GetEventMembersResponseInterface[] = [
    {
      id: 1,
      name: "Jan Kowalski",
      companyId: 1,
      companyName: "NY Times",
      ticketId: 1,
      registrationDate: "2024-01-04T07:00:00",
      ticketBuyingDate: "2024-01-04T08:00:00",
    },
    {
      id: 2,
      name: "Piotr Nowak",
      companyId: 2,
      companyName: "Macao Company",
      ticketId: 2,
      registrationDate: "2024-01-04T07:00:00",
      ticketBuyingDate: "2024-01-04T08:00:00",
    },
  ];

  return new Response(JSON.stringify(dataBase));
}
export default getEventMembers;
