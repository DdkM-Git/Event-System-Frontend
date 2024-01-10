import { LoadingBackdrop } from "components";
import { AppContext } from "context";
import { useEncryptLocalStorage } from "hooks";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();

  const encryptLocalStorage = useEncryptLocalStorage();

  useEffect(() => {
    encryptLocalStorage.set("tmppn", document.location.pathname);
    navigate("/");
  }, []);

  return <LoadingBackdrop />;
}

export default Page404;
