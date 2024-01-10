interface EventMemberInterface {
  id: number;
  name: string;
  companyId: number | null;
  companyName: string;
  registrationDate: Date;
  ticketBuyingDate: Date;
}

export default EventMemberInterface;
