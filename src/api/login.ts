import { proxy } from "appConfig";
import { UserType } from "types";

export interface LoginRequestInterface {
  login: string;
  password: string;
}

export interface LoginResponseInterface {
  id: number;
  name: string;
  companyId: number | null;
  companyName: string;
  userType: UserType;
}

async function login(props: LoginRequestInterface): Promise<Response> {
  /*const serverResponse = await fetch(`${proxy}/Authenticate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      login: props.login,
      password: props.password,
      clientIp: props.clientIp,
      language: props.language,
    }),
  });
  return serverResponse;*/

  const dataBase: LoginResponseInterface = {
    id: 1,
    name: "Jan Kowalski",
    companyId: 1,
    companyName: "NY Times",
    userType: "organizer",
  };

  return new Response(JSON.stringify(dataBase));
}

export default login;
