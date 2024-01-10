import { Paper } from "@mui/material";
import { ReactElement } from "react";
import AllRequestsTab from "./tabs/AllRequestsTab";
import CustomTabs from "./tabs/CustomTabs";
import OrganizerEventsTab from "./tabs/OrganizerEventsTab";
import MyTicketsTab from "./tabs/MyTicketsTab";

function Events(): ReactElement {
  return (
    <Paper elevation={10} sx={{ marginLeft: "5vw", marginRight: "5vw", marginTop: "20px", minHeight: "calc(90vh - 50px)" }}>
      <CustomTabs
        tabs={[
          { label: "Wszystkie wydarzenia", content: <AllRequestsTab key="tabContent-AllRequestsTab" />, isShown: true },
          {
            label: "Organizowane wydarzenia",
            content: <OrganizerEventsTab key="tabContent-EmployeeRequestsTab" />,
            isShown: true,
          },
          { label: "Moje bilety", content: <MyTicketsTab key="tabContent-MyRequestsTab" />, isShown: true },
        ]}
      />
    </Paper>
  );
}

export default Events;
