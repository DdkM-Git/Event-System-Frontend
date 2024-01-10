import { Box } from "@mui/material";
import { DataField, DataFieldSXInterface } from "components";
import { ReactElement, useContext } from "react";
import { EventInterface } from "types";
import { showDateTime } from "utils";
import { AppContext } from "../../../context";

interface EventMainDataInterface {
  event: EventInterface;
}

function EventMainData(props: EventMainDataInterface): ReactElement {
  const appContext = useContext(AppContext);

  const dataFieldSx: DataFieldSXInterface = {
    sx: { borderBottom: "1px solid #1976d2", columnGap: "0px" },
    labelSx: { width: "20%" },
    contentSx: { width: "80%" },
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <DataField label="Nazwa" {...dataFieldSx}>
        {props.event.name}
      </DataField>
      <DataField label="Organizator" {...dataFieldSx}>
        {props.event.companyName}
      </DataField>
      <DataField label="Rozpoczęcie" {...dataFieldSx}>
        {showDateTime(props.event.dateFrom)}
      </DataField>
      <DataField label="Zakończenie" {...dataFieldSx}>
        {showDateTime(props.event.dateTo)}
      </DataField>
      {appContext.state.userData?.userType === "organizer" &&
        <DataField label="Status" {...dataFieldSx}>
          {props.event.status}
        </DataField>}
    </Box>
  );
}

export default EventMainData;
