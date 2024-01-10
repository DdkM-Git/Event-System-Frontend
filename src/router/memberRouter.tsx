import { Event, Events, Layout, Page404 } from "pages";
import { RouteObject } from "react-router-dom";
import Ticket from "../pages/Ticket";

const memberRouter: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Events />,
      },
      {
        path: "event/:id",
        element: <Event />,
      },
      {
        path: "ticket/:id",
        element: <Ticket />,
      },
    ],
  },
  { path: "*", element: <Page404 /> },
];

export default memberRouter;
