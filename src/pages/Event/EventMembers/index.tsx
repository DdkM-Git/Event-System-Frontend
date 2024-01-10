import { GetEventMembersRequestInterface, GetEventMembersResponseInterface, getEventMembers } from "api";
import { CustomDataTable, FetchApiInterface, PageLoader } from "components";
import getEventMembersResponseInterfaceToEventMemberInterface from "mappers/getEventMembersResponseInterfaceToEventMemberInterface";
import { ReactElement, useState } from "react";
import { useParams } from "react-router";
import { EventMemberInterface } from "types";

interface EventMembersInterface { }

function EventMembers(props: EventMembersInterface): ReactElement {
  const [eventMembers, setEventMembers] = useState<EventMemberInterface[]>([]);

  const params = useParams();

  return (
    <PageLoader
      apis={[
        {
          fetchApi: getEventMembers,
          requestData: { eventId: parseInt(params.id || "0") },
          state: [eventMembers, setEventMembers],
          mapper: getEventMembersResponseInterfaceToEventMemberInterface,
        } as FetchApiInterface<GetEventMembersRequestInterface, GetEventMembersResponseInterface, EventMemberInterface>,
      ]}
    >
      <CustomDataTable
        headers={["Nazwa", "Organizacja", "Data rejestracji", "Data zakupu biletu"]}
        objectKeys={["name", "companyName", "registrationDate", "ticketBuyingDate"]}
        dataArray={eventMembers}
        actions={[]}
        sx={{ marginTop: "20px" }}
      />
    </PageLoader>
  );
}

export default EventMembers;
