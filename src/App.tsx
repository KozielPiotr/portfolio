import React from "react";

import Index from "./Components/index"
import Grid from '@material-ui/core/Grid';
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
      <Grid container sm={12} spacing={1}>
        <Index />
      </Grid>
    </ div>
  );
}

export default App;
