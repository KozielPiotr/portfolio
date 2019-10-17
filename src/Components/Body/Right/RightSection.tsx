import React from "react"

import {Grid, Paper, makeStyles, Theme, createStyles} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Paper: {
      padding: theme.spacing(7, 7, 7, 7),
    },
  }),
);


export default () => {
    const classes = useStyles();
    return (
        <Grid item sm={9}>
            <Paper className={classes.Paper}>
                right section (9)
            </Paper>
        </Grid>
    );
}
