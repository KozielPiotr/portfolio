import React from "react"

import {Paper} from "@material-ui/core";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles"

import AboutMe from "./AboutMe"
import Repos from "./Repos"


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        Paper: {
            padding: theme.spacing(4, 10, 4, 10),
            background: "linear-gradient(125deg, #F2EDEC 50%, #D3D2D2 90%)",
            minHeight: "93%",
            maxHeight: "93%",
        }
    }),
);


export default () => {
    const classes = useStyles();
    return (
            <Paper className={classes.Paper}>
                <AboutMe />
                <Repos />
            </Paper>
    );
}
