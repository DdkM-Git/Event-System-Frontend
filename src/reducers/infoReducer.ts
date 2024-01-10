import { InfoDialogInterface, SetInfoDialogType } from "types";

const infoReducer = (state: InfoDialogInterface, action: SetInfoDialogType) => {
  switch (action.type) {
    case "SET_INFO_DIALOG":
      return {
        open: true,
        content: action.content,
      };
    case "CLOSE_INFO_DIALOG":
      return {
        open: false,
        content: "",
      };
    default:
      return state;
  }
};

export default infoReducer;
