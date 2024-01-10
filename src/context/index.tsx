import { Context, Dispatch, ReactElement, createContext, useReducer } from "react";
import { infoReducer, userReducer } from "reducers";
import { InfoDialogInterface, SetInfoDialogType, SetUserType, UserInterface } from "types";

const initialState: AppContextInitialStateInterface = {
  userData: null,
  infoData: {
    open: false,
    content: "",
  },
};

interface AppContextInitialStateInterface {
  userData: UserInterface | null;
  infoData: InfoDialogInterface;
}

type AppContextActionsType = SetUserType | SetInfoDialogType;

interface AppContextInterface {
  state: AppContextInitialStateInterface;
  dispatch: Dispatch<AppContextActionsType>;
}

export const AppContext: Context<AppContextInterface> = createContext<AppContextInterface>({
  state: initialState,
  dispatch: () => null,
});

export const appReducer = ({ userData, infoData }: AppContextInitialStateInterface, action: SetUserType | SetInfoDialogType) => ({
  userData: userReducer(userData, action as SetUserType),
  infoData: infoReducer(infoData, action as SetInfoDialogType),
});

function AppContextProvider({ children }: { children: ReactElement }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
