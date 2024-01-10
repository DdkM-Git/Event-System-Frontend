import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { LoginResponseInterface, login } from "api";
import { AppContext } from "context";
import LoginTextField from "./LoginTextField";
import { KeyboardEvent, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { proxy } from "../../appConfig";

function Login() {
  const [userLogin, setUserLogin] = useState<string>("");
  const [userLoginError, setUserLoginError] = useState<boolean>(false);
  const [userPassword, setUserPassword] = useState<string>("");
  const [userPasswordError, setUserPasswordError] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const appCtx = useContext(AppContext);

  async function handleLogin() {
    setLoading(true);
    let checking: boolean = true;
    if (userLogin === "") {
      checking = false;
      setUserLoginError(true);
    } else {
      setUserLoginError(false);
    }
    if (userPassword === "") {
      checking = false;
      setUserPasswordError(true);
    } else {
      setUserPasswordError(false);
    }
    if (checking) {
      let response = await login({ login: userLogin, password: userPassword });
      if (!response.ok) {
        setLoginError(true);
      } else {
        setLoginError(false);
        let resolved: LoginResponseInterface = await response.json();
        appCtx.dispatch({ type: "SET_USER_DATA", userData: resolved });
        navigate("/");
      }
    }
    setLoading(false);
  }

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          width: "min-content",
          height: "min-content",
          padding: "20px",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography sx={{ fontSize: "1.8em", fontWeight: "bold" }}>Logowanie</Typography>
          <LoginTextField
            type="text"
            value={userLogin}
            error={userLoginError}
            onChange={(e) => {
              setUserLogin(e.target.value);
            }}
            label="Login"
            size="small"
          />
          <LoginTextField
            type="password"
            value={userPassword}
            error={userPasswordError}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            label="Hasło"
            size="small"
          />
          {loginError && <Typography sx={{ color: "#d32f2f" }}>Błędne dane logowania</Typography>}
          <Button type="submit" variant="contained">
            Zaloguj się
          </Button>
        </form>
      </Paper>
      <Button
        onClick={() => {
          async function aaa() {
            let serverResponse = await fetch(`${proxy}/TokenTest/TestCoockie`, {
              method: "POST",
              //headers: {},
              credentials: "include",
            });
            console.log("serverResponse-test", serverResponse);
          }
          aaa();
        }}
        variant="contained"
      >
        Test
      </Button>
    </Box>
  );
}

export default Login;
