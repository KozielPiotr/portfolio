import React from "react";

import {Footer, Sections, Header} from "./Components/index"
import {makeStyles, createStyles} from "@material-ui/core/styles";

import "./App.css";


const useStyles = makeStyles(() =>
  createStyles({
    MainApp: {
      marginRight: "5%",
      marginLeft: "5%",
    },
  }),
);


const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.MainApp}>
        <Header />
        <Sections />
        <Footer />
    </ div>
  );
}

export default App;
