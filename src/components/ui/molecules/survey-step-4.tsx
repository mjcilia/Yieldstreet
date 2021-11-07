import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useAppSelector } from "../../../store/store.hooks";
import { ISurveyData } from "../../../store/survey/survey.state";
import { selectSurveyData } from "../../../store/survey";

const YSurveyStep4 = (): JSX.Element => {
  const capitalize = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  /*eslint-disable */
  const { identity, details, favorites }: ISurveyData =
    useAppSelector(selectSurveyData);
  const { book, colors } = favorites;
  const data: any = { ...identity, ...details, book };

  const getColorValues = (): string => {
    return Object.keys(colors)
      .map((keyName, keyIndex) =>
        (colors as any)[keyName] ? capitalize(keyName) : false
      )
      .filter((x) => x)
      .join(', ');
  };

  getColorValues();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User Details</TableCell>
            <TableCell align="left">User Values</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(data).map((keyName, keyIndex) => (
            <TableRow key={keyName}>
              <TableCell component="th" scope="row">
                {capitalize(keyName)}
              </TableCell>
              <TableCell align="left">{data[keyName]}</TableCell>
            </TableRow>
          ))}
          <TableRow key="colors">
            <TableCell component="th" scope="row">
              Colors
            </TableCell>
            <TableCell align="left">{getColorValues()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default YSurveyStep4;
