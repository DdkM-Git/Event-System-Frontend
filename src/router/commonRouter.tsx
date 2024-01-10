import { Login, Page404 } from "pages";
import { Outlet, RouteObject } from "react-router-dom";

const commonRouter: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  { path: "*", element: <Page404 /> },
];

export default commonRouter;
