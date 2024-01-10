import { Tab, TabOwnProps } from "@mui/material";

type CustomTabType = TabOwnProps;

function CustomTab(props: CustomTabType): JSX.Element {
  return <Tab sx={{ zIndex: 100, background: "#FFF" }} {...props} />;
}

export default CustomTab;
