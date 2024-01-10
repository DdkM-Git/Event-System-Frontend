import { Box } from "@mui/material";
import { Outlet } from "react-router";
import SettingPart from "./SettingPart";
import UserInfoPart from "./UserInfoPart";

function Layout() {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          background: "#1976d2",
          display: "flex",
          webkitBoxShadow: "inset 0px -10px 20px -10px rgba(66, 68, 90, 1)",
          mozBoxShadow: "inset 0px -10px 20px -10px rgba(66, 68, 90, 1)",
          boxShadow: "inset 0px -10px 20px -10px rgba(66, 68, 90, 1)",
        }}
      >
        <UserInfoPart />
        <SettingPart />
      </Box>
      <Outlet />
    </Box>
  );
}

export default Layout;
