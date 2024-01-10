import { SetUserType, UserInterface } from "types";

const userReducer = (state: UserInterface | null, action: SetUserType) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        id: action.userData.id,
        name: action.userData.name,
        companyId: action.userData.companyId,
        companyName: action.userData.companyName,
        userType: action.userData.userType,
      };
    case "REMOVE_USER_DATA":
      return null;
    default:
      return state;
  }
};

export default userReducer;
