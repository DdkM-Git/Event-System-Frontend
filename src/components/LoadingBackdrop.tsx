import { Backdrop, CircularProgress } from "@mui/material";
import { ReactElement } from "react";

function LoadingBackdrop(): ReactElement {
  return (
    <Backdrop open={true} sx={{ zIndex: 1000, background: "#FFF" }}>
      <CircularProgress />
    </Backdrop>
  );
}

export default LoadingBackdrop;
