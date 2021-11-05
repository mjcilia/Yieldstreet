import React from "react";
import { Typography } from "@mui/material";
import YLogo from "../../atoms/logo";
import { SidebarWrapper } from "./style";

export type YFormSidebarProps = {
  step: number;
  totalSteps: number;
};

const YFormSidebar = ({ step, totalSteps }: YFormSidebarProps): JSX.Element => {
  return (
    <SidebarWrapper>
      <YLogo />
      <Typography paragraph variant="body1">
        Step {step} of {totalSteps}
      </Typography>
      <Typography paragraph variant="h4">
        Are you familiar with alternative investments?
      </Typography>
    </SidebarWrapper>
  );
};

export default YFormSidebar;
