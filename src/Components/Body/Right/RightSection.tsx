import React from "react"

import {Grid, Paper} from "@material-ui/core";

import { useStyles } from "../styles";


export default () => {
    const classes = useStyles();
    return (
        <Grid item sm={8}>
            <Paper className={classes.Paper}>
                right section (8)
            </Paper>
        </Grid>
    );
}
