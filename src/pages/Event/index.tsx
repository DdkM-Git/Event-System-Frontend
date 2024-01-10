import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Paper, Typography } from "@mui/material";
import {
  GetEventRequestInterface,
  GetEventResponseInterface,
  getEvent
} from "api";
import { FetchApiInterface, PageLoader } from "components";
import { AppContext } from "context";
import { getEventResponseInterfaceToEventInterface } from "mappers";
import { ReactElement, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EventInterface } from "types";
import EventMainData from "./EventMainData";
import EventMembers from "./EventMembers";

function Event(): ReactElement {
  const [event, setEvent] = useState<EventInterface | null>(null);

  const params = useParams();
  const navigate = useNavigate();
  const appContext = useContext(AppContext);

  return (
    <PageLoader
      apis={[
        {
          fetchApi: getEvent,
          requestData: { eventId: parseInt(params.id || "0") },
          state: [event, setEvent],
          mapper: getEventResponseInterfaceToEventInterface,
        } as FetchApiInterface<GetEventRequestInterface, GetEventResponseInterface, EventInterface>,
      ]}
    >
      <Paper
        elevation={5}
        sx={{
          width: "1000px",
          height: "calc(90vh - 50px)",
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate("/")} sx={{ marginRight: "auto" }}>
          Wróć
        </Button>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.4em" }}>Wydarzenie</Typography>

        {event && <EventMainData event={event} />}
        {appContext.state.userData?.userType === "organizer" && <EventMembers />}
      </Paper>
    </PageLoader>
  );
}

export default Event;
