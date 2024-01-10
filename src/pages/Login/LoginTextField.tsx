import { TextField, TextFieldProps } from "@mui/material";
import { ReactElement } from "react";

function LoginTextField(props: TextFieldProps): ReactElement {
  return <TextField {...props} sx={{ minWidth: "300px", ...props.sx }} />;
}

export default LoginTextField;
