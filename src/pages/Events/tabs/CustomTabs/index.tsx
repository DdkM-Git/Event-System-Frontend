import { Box, Paper, Tab, Tabs } from "@mui/material";
import { useContext, ReactNode, useState, useEffect } from "react";
import CustomTab from "../../tabs/CustomTabs/CustomTab";
import { useEncryptLocalStorage } from "hooks";

type CustomTabsType = {
  tabs: { label: string; content: ReactNode; isShown: boolean }[];
};

function CustomTabs(props: CustomTabsType): JSX.Element {
  const encryptLocalStorage = useEncryptLocalStorage();

  const [activeTab, setActiveTab] = useState<number>(parseInt(encryptLocalStorage.get("HRs-at") || "0"));

  useEffect(() => {
    encryptLocalStorage.set("HRs-at", activeTab.toString());
  }, [activeTab]);

  return (
    <>
      <Tabs
        value={activeTab}
        onChange={(e, nV) => {
          setActiveTab(nV);
        }}
        sx={{ borderBottom: "1px solid #1976d2" }}
      >
        {props.tabs.map((currentTab) => {
          if (currentTab.isShown) {
            return (
              <CustomTab
                key={`tabName-${currentTab.label}`}
                label={currentTab.label}
                sx={{
                  webkitBoxShadow: "inset 0px 0px 20px -10px rgba(66, 68, 90, 1)",
                  mozBoxShadow: "inset 0px 0px 20px -10px rgba(66, 68, 90, 1)",
                  boxShadow: "inset 0px 0px 10px -7px rgba(66, 68, 90, 1)",
                  "&.Mui-selected": {
                    backgroundColor: "#1976d2",
                    color: "#FFF",
                    webkitBoxShadow: "inset 0px -10px 20px -10px rgba(66, 68, 90, 1)",
                    mozBoxShadow: "inset 0px -10px 20px -10px rgba(66, 68, 90, 1)",
                    boxShadow: "inset 0px -10px 20px -10px rgba(66, 68, 90, 1)",
                  },
                }}
              />
            );
          }
        })}
      </Tabs>
      <Box sx={{ paddingLeft: "20px", paddingRight: "20px" }}>
        {props.tabs.map((currentTab, currentTabIndex) => {
          if (currentTab.isShown && currentTabIndex === activeTab) {
            return currentTab.content;
          }
        })}
      </Box>
    </>
  );
}

export default CustomTabs;
