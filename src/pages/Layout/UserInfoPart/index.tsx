import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "context";

function UserInfoPart() {
  const appContext = useContext(AppContext);

  return (
    <Box sx={{ display: "flex", alignItems: "center", color: "#FFF", marginLeft: "20px" }}>
      <AccountCircleIcon />
      <Typography>{appContext.state.userData?.name}</Typography>
    </Box>
  );
}

export default UserInfoPart;
