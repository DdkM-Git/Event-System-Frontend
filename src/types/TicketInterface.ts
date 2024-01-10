interface TicketInterface {
  id: number;
  number: string;
  dateOfBuy: Date;
  eventId: number;
  eventName: string;
  eventStatus: string;
  companyId: number;
  companyName: string;
  userId: number;
}

export default TicketInterface;
