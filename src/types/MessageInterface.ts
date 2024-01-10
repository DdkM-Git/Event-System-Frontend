interface MessageInterface {
  id: number;
  content: string;
  eventId: number;
  userId: number;
  userName: string;
  dateOfCreation: Date;
}

export default MessageInterface;
