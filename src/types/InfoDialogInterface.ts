export interface InfoDialogInterface {
  open: boolean;
  content: string;
  navigate?: string;
}

export type SetInfoDialogType = { type: "SET_INFO_DIALOG"; content: string; navigate?: string } | { type: "CLOSE_INFO_DIALOG" };

export default InfoDialogInterface;
