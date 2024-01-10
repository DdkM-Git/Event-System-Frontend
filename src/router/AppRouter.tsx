import { AppContext } from "context";
import { ReactElement, useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import commonRouter from "./commonRouter";
import memberRouter from "./memberRouter";
import organizerRouter from "./organizerRouter";

function AppRouter(): ReactElement {
  const appContext = useContext(AppContext);

  if (appContext.state.userData?.userType === "member") {
    return <RouterProvider router={createBrowserRouter(memberRouter)} />;
  } else if (appContext.state.userData?.userType === "organizer") {
    return <RouterProvider router={createBrowserRouter(organizerRouter)} />;
  } else {
    return <RouterProvider router={createBrowserRouter(commonRouter)} />;
  }
}
export default AppRouter;
