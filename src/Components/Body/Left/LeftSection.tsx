import React from "react"

import { Grid, Paper, makeStyles, Theme, createStyles } from "@material-ui/core"

import Photo from "./Photo"
import Contact from "./Contact"


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        Paper: {
            padding: theme.spacing(2, 5, 5, 5),
            background: "#c0c0c0"
        }
    }),
);


export default () => {
    const classes = useStyles();
    return (
        <Grid item sm={3}>
            <Paper className={classes.Paper}>
                <Photo />
                <Contact />
            </Paper>
        </Grid>
    );
}
