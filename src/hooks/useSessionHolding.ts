import { useEffect } from "react";
import useSession from "./useSession";

function useSessionHolding() {
  const session = useSession();

  const bChannel = new BroadcastChannel("logout");

  const logout = () => {
    bChannel.postMessage("Logout");
    session.remove();
  };

  const logoutAllTabs = () => {
    bChannel.onmessage = (event) => {
      if (event.data === "Logout") {
        logout();
        bChannel.close();
      }
    };
  };

  useEffect(() => {
    logoutAllTabs();
  }, []);

  return { logout: logout };
}

export default useSessionHolding;
