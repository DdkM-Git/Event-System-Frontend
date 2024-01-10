import { Box } from "@mui/material";
import { DataField, DataFieldSXInterface } from "components";
import { ReactElement } from "react";
import { TicketInterface } from "types";
import { showDateTime } from "utils";

interface TicketMainDataInterface {
  ticket: TicketInterface;
}

function TicketMainData(props: TicketMainDataInterface): ReactElement {
  const dataFieldSx: DataFieldSXInterface = {
    sx: { borderBottom: "1px solid #1976d2", columnGap: "0px" },
    labelSx: { width: "20%" },
    contentSx: { width: "80%" },
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <DataField label="Numer" {...dataFieldSx}>
        {props.ticket.number}
      </DataField>
      <DataField label="Wydarzenie" {...dataFieldSx}>
        {props.ticket.eventName}
      </DataField>
      <DataField label="Status wydarzenia" {...dataFieldSx}>
        {props.ticket.eventStatus}
      </DataField>
      <DataField label="Organizator" {...dataFieldSx}>
        {props.ticket.companyName}
      </DataField>
      <DataField label="Data zakupu" {...dataFieldSx}>
        {showDateTime(props.ticket.dateOfBuy)}
      </DataField>
    </Box>
  );
}

export default TicketMainData;
