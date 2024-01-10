import UserType from "./UserType";

interface UserInterface {
  id: number;
  name: string;
  companyId: number | null;
  companyName: string;
  userType: UserType;
}

export default UserInterface;

export type SetUserType = { type: "SET_USER_DATA"; userData: UserInterface } | { type: "REMOVE_USER_DATA" };
