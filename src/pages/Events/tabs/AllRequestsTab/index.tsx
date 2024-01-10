import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from "@mui/material";
import getAllEvents, { GetAllEventsRequestInterface, GetAllEventsResponseInterface } from "api/getAllEvents";
import { CustomDataTable, FetchApiInterface, PageLoader } from "components";
import { AppContext } from "context";
import { getAllEventsResponseInterfaceToEventInterface } from "mappers";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { EventInterface } from "types";
import { registerForTheEvent } from 'api';

function AllRequestsTab(): JSX.Element {
  const [events, setEvents] = useState<EventInterface[]>([]);

  const appContext = useContext(AppContext);
  const navigate = useNavigate();

  async function registerUserForTheEvent(eventId: number) {
    const response = await registerForTheEvent({ eventId: eventId });
    if (response.ok) {
      appContext.dispatch({ type: "SET_INFO_DIALOG", content: "Rejestracja udana!" });
    } else {
      appContext.dispatch({ type: "SET_INFO_DIALOG", content: "Wystąpił błąd podczas rejestracji! Sprubuj ponownie." });
    }
  }

  return (
    <PageLoader
      apis={[
        {
          fetchApi: getAllEvents,
          requestData: {},
          state: [events, setEvents],
          mapper: getAllEventsResponseInterfaceToEventInterface,
        } as FetchApiInterface<GetAllEventsRequestInterface, GetAllEventsResponseInterface, EventInterface>,
      ]}
    >
      <Box display={{ display: "flex", flexDirection: "column" }}>
        <CustomDataTable
          headers={["Nazwa", "Organizator", "Rozpoczęcie", "Zakończenie"]}
          objectKeys={["name", "companyName", "dateFrom", "dateTo"]}
          dataArray={events}
          actions={[
            {
              label: "Zobacz",
              icon: <SearchIcon />,
              isShown: () => true,
              onClick: (element: EventInterface) => {
                navigate(`event/${element.id.toString()}`);
              },
            },
            {
              label: "Zarejestruj",
              icon: <PersonAddRoundedIcon />,
              isShown: (element: EventInterface) => element.companyId !== appContext.state.userData?.companyId,
              onClick: (element: EventInterface) => {
                registerUserForTheEvent(element.id);
              },
            },
            {
              label: "Kup bilet",
              icon: <ShoppingCartIcon />,
              isShown: (element: EventInterface) => element.companyId !== appContext.state.userData?.companyId,
              onClick: (element: EventInterface) => {
                //setCheckedRequest(element);
              },
            },
          ]}
          sx={{ marginTop: "20px" }}
        />
      </Box>
    </PageLoader>
  );
}

export default AllRequestsTab;
