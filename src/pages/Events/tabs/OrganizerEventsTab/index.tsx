import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, ButtonGroup } from "@mui/material";
import { GetOrganizerEventsRequestInterface, GetOrganizerEventsResponseInterface, cancelEvent, getOrganizerEvents } from "api";
import { CustomDataTable, FetchApiInterface, PageLoader } from "components";
import { AppContext } from "context";
import { getOrganizerEventsResponseInterfaceToEventInterface } from "mappers";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { EventInterface } from "types";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function OrganizerEventsTab(): JSX.Element {
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [checkedRequest, setCheckedRequest] = useState<EventInterface | undefined>(undefined);

  const appContext = useContext(AppContext);
  const navigate = useNavigate();

  async function eventCanceling(eventId: number) {
    const response = await cancelEvent({ eventId: eventId });
    if (response.ok) {
      appContext.dispatch({ type: "SET_INFO_DIALOG", content: "Odwołano wydarzenie!" });
    } else {
      appContext.dispatch({ type: "SET_INFO_DIALOG", content: "Wystąpił błąd podczas odwoływania wydarzenia! Sprubuj ponownie." });
    }
  }

  return (
    <PageLoader
      apis={[
        {
          fetchApi: getOrganizerEvents,
          requestData: {},
          state: [events, setEvents],
          mapper: getOrganizerEventsResponseInterfaceToEventInterface,
        } as FetchApiInterface<GetOrganizerEventsRequestInterface, GetOrganizerEventsResponseInterface, EventInterface>,
      ]}
    >
      <Box display={{ display: "flex", flexDirection: "column", marginTop: "20px", rowGap: "20px" }}>
        <ButtonGroup sx={{ marginLeft: "auto" }}>
          <Button variant="contained" startIcon={<AddToPhotosIcon />}>
            Utwórz
          </Button>
        </ButtonGroup><CustomDataTable
          headers={["Nazwa", "Organizator", "Rozpoczęcie", "Zakończenie", "Status"]}
          objectKeys={["name", "companyName", "dateFrom", "dateTo", "status"]}
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
              label: "Edytuj",
              icon: <ModeEditIcon />,
              isShown: (element: EventInterface) => element.status !== "canceled",
              onClick: (element: EventInterface) => {
                //navigate(element.id.toString());
              },
            },
            {
              label: "Odwołaj",
              icon: <HighlightOffIcon />,
              isShown: (element: EventInterface) => element.status !== "canceled",
              onClick: (element: EventInterface) => {
                eventCanceling(element.id);
              },
            },
          ]}
        />
      </Box>
    </PageLoader>
  );
}

export default OrganizerEventsTab;
