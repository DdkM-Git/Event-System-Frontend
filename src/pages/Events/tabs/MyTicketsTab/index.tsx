import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import getMemberTickets, { GetMemberTicketsRequestInterface, GetMemberTicketsResponseInterface } from "api/getMemberTickets";
import { CustomDataTable, FetchApiInterface, PageLoader } from "components";
import { AppContext } from "context";
import { getMemberTicketsResponseInterfaceToTicketInterface } from "mappers";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { EventInterface, TicketInterface } from "types";

function MyTicketsTab(): JSX.Element {
  const [tickets, setTickets] = useState<TicketInterface[]>([]);
  const [checkedRequest, setCheckedRequest] = useState<TicketInterface | undefined>(undefined);

  const appContext = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <PageLoader
      apis={[
        {
          fetchApi: getMemberTickets,
          requestData: {},
          state: [tickets, setTickets],
          mapper: getMemberTicketsResponseInterfaceToTicketInterface,
        } as FetchApiInterface<GetMemberTicketsRequestInterface, GetMemberTicketsResponseInterface, TicketInterface>,
      ]}
    >
      <Box display={{ display: "flex", flexDirection: "column" }}>
        <CustomDataTable
          headers={["Numer", "Data kupna", "Wydarzenie", "Organizator"]}
          objectKeys={["number", "dateOfBuy", "eventName", "companyName"]}
          dataArray={tickets}
          actions={[
            {
              label: "Zobacz",
              icon: <SearchIcon />,
              isShown: () => true,
              onClick: (element: EventInterface) => {
                navigate(`ticket/${element.id.toString()}`);
              },
            },
          ]}
          sx={{ marginTop: "20px" }}
        />
      </Box>
    </PageLoader>
  );
}

export default MyTicketsTab;
