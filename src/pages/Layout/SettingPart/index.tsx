import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Button } from "@mui/material";
import { AppContext } from "context";
import { useContext } from "react";
import { useNavigate } from "react-router";

function SettingPart() {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", marginLeft: "auto", marginRight: "20px" }}>
      <Button
        startIcon={<LogoutIcon />}
        onClick={() => {
          appContext.dispatch({ type: "REMOVE_USER_DATA" });
          navigate("/");
        }}
        sx={{ color: "#FFF" }}
      >
        Wyloguj
      </Button>
    </Box>
  );
}

export default SettingPart;
