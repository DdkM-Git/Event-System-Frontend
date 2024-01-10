import EventStatusType from "./EventStatusType";

interface EventInterface {
  id: number;
  name: string;
  companyId: number;
  companyName: string;
  dateFrom: Date;
  dateTo: Date;
  status: EventStatusType;
}

export default EventInterface;
