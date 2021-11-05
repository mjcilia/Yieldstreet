import { createGlobalStyle } from "styled-components";

const AppStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
  }
  body{
    background-color: rgb(255,255,255);
  }
`;

export default AppStyle;
