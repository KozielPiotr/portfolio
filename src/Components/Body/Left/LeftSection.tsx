import React from "react"

import {Grid, Paper} from "@material-ui/core";

import { useStyles } from "../styles";


export default () => {
    const classes = useStyles();
    return (
        <Grid item sm={4}>
            <Paper className={classes.Paper}>
                left section (4)
            </Paper>
        </Grid>
    );
}
