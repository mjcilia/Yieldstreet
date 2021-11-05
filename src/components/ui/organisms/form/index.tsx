import React from "react";
import Grid from "@mui/material/Grid";
import YFormSidebar from "../../molecules/form-sidebar";
import { ColumnWrapper } from "./style";

const YForm = (): JSX.Element => {
  return (
    <Grid container spacing={0}>
      <Grid item md={5} sm={5} xs={12}>
        <ColumnWrapper>
          <YFormSidebar step={1} totalSteps={3} />
        </ColumnWrapper>
      </Grid>
      <Grid item md={7} sm={7} xs={12}>
        <ColumnWrapper>Hello</ColumnWrapper>
      </Grid>
    </Grid>
  );
};

export default YForm;
