import { SxProps, Theme, Box, Typography } from "@mui/material";
import { ReactElement, ReactNode } from "react";

export interface DataFieldSXInterface {
  sx?: SxProps<Theme>;
  labelSx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
}

export interface DataFieldInterface extends DataFieldSXInterface {
  label: string;
  children: ReactNode;
}

function DataField(props: DataFieldInterface): ReactElement {
  return (
    <Box sx={{ display: "flex", padding: "5x 20px", columnGap: "20px", ...props.sx }}>
      {props.label && <Typography sx={{ fontWeight: "bold", ...props.labelSx }}>{props.label}</Typography>}
      <Typography sx={{ ...props.contentSx }}>{props.children}</Typography>
    </Box>
  );
}

export default DataField;
