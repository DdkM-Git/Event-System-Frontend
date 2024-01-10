import { LoginResponseInterface, login } from "api";
import { AppContext } from "context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useEncryptLocalStorage from "./useEncryptLocalStorage";

interface SessionSavingInterface {
  token?: string;
  userPass?: { userLogin: string; userPassword: string };
}

function useSession() {
  const appCtx = useContext(AppContext);
  const navigate = useNavigate();
  const encryptStorage = useEncryptLocalStorage();

  function sessionSaving(props: SessionSavingInterface) {
    if (props.userPass) {
      encryptStorage.set("ul", props.userPass.userLogin);
      encryptStorage.set("up", props.userPass.userPassword);
    }
    /*if (props.router) {
      appCtx.dispatch({ type: "SET_ROUTER", router: props.router });
    }*/
  }

  async function sessionChecking(pathname: string) {
    function wrongReguest() {
      appCtx.dispatch({ type: "REMOVE_USER_DATA" });
      //appCtx.dispatch({ type: "SET_ROUTER", router: undefined });
      navigate("/");
    }

    const userLogin = encryptStorage.get("ul");
    const userPassword = encryptStorage.get("up");
    if (userLogin && userPassword) {
      let response = await login({ login: userLogin, password: userPassword });
      if (response.ok) {
        let resolved: LoginResponseInterface = await response.json();
        appCtx.dispatch({ type: "SET_USER_DATA", userData: { ...resolved } });
        //appCtx.dispatch({ type: "SET_ROUTER", router: resolved.role === 4 ? "member" : undefined });
        navigate(pathname);
      } else {
        wrongReguest();
      }
    } else {
      wrongReguest();
    }
  }

  function sessionRemoving() {
    //appCtx.dispatch({ type: "SET_AUTH", token: "" });
    //appCtx.dispatch({ type: "SET_ROUTER", router: undefined });
    encryptStorage.set("ul", "");
    encryptStorage.set("up", "");
  }

  return { save: sessionSaving, check: sessionChecking, remove: sessionRemoving };
}

export default useSession;
