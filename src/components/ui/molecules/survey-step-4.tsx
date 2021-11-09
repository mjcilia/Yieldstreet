import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../store/store.hooks";
import { ISurveyData, ISurveyMeta } from "../../../store/survey/survey.state";
import {
  selectSurveyData,
  selectSurveyMeta,
  validateSurvey,
} from "../../../store/survey";

const YSurveyStep4 = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(validateSurvey());
  });

  /**
   * Assign isValid via selectSurveyMeta Selector
   *
   * @constant {boolean} isValid
   */
  const { isValid }: ISurveyMeta = useAppSelector(selectSurveyMeta);

  /**
   * Assign identity, details and favorites via
   * selectSurveyData Selector
   *
   * @constant {ISurveyDataIdentity} identity
   * @constant {ISurveyDataDetails} details
   * @constant {ISurveyDataFavorites} favorites
   */
  const { identity, details, favorites }: ISurveyData =
    useAppSelector(selectSurveyData);

  /**
   * Assign Merged Data apart from colors
   */
  const { book, colors } = favorites;
  const data: any = { ...identity, ...details, book };

  /**
   * Capatilizes Strings
   *
   * @param string
   * @returns {string}
   */
  const capitalize = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  /**
   * Formats Colors from Object to String and removes
   * non truthy values
   *
   * @returns {string}
   */
  const getColorValues = (): string => {
    return Object.keys(colors)
      .map((keyName) =>
        (colors as any)[keyName] ? capitalize(keyName) : false
      )
      .filter((x) => x)
      .join(", ");
  };

  return (
    <Grid container spacing={0} sx={{ height: "100%" }}>
      <Grid item sm={12}>
        {!isValid && (
          <Typography paragraph variant="body1" sx={{ color: "#d32f2f" }}>
            Entries are invalid or incomplete. Kindly fix before submitting.
          </Typography>
        )}
      </Grid>
      <Grid item sx={{ mt: 2 }} sm={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {Object.keys(data).map((keyName) => (
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
      </Grid>
    </Grid>
  );
};

export default YSurveyStep4;
