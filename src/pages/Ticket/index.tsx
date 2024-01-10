import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Paper, Typography } from "@mui/material";
import {
  GetTicketRequestInterface,
  GetTicketResponseInterface,
  getTicket
} from "api";
import { FetchApiInterface, PageLoader } from "components";
import { AppContext } from "context";
import { getTicketResponseInterfaceToTicketInterface } from "mappers";
import { ReactElement, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TicketInterface } from "types";
import TicketMainData from "./TicketMainData";

function Ticket(): ReactElement {
  const [ticket, setTicket] = useState<TicketInterface | null>(null);

  const params = useParams();
  const navigate = useNavigate();
  const appContext = useContext(AppContext);

  return (
    <PageLoader
      apis={[
        {
          fetchApi: getTicket,
          requestData: { ticketId: parseInt(params.id || "0") },
          state: [ticket, setTicket],
          mapper: getTicketResponseInterfaceToTicketInterface,
        } as FetchApiInterface<GetTicketRequestInterface, GetTicketResponseInterface, TicketInterface>,
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
        <Typography sx={{ fontWeight: "bold", fontSize: "1.4em" }}>Bilet</Typography>
        {ticket && <TicketMainData ticket={ticket} />}
      </Paper>
    </PageLoader>
  );
}

export default Ticket;
