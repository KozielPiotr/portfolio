import React from "react";

import {Paper} from "@material-ui/core";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";

import Photo from "./Photo";
import Contact from "./Contact";
import Skills from "./Skills";
import Languages from "./Languages";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        Paper: {
            padding: theme.spacing(2, 5, 5, 3),
            background: "#c0c0c0",
        }
    }),
);


export default () => {
    const classes = useStyles();
    return (
        <Paper className={classes.Paper}>
            <Photo />
            <Contact />
            <Skills />
            <Languages />
        </Paper>
    );
}
