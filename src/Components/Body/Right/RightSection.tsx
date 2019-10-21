import React from "react"

import {Paper} from "@material-ui/core";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Paper: {
	  padding: theme.spacing(7, 7, 7, 7),
	}
  }),
);


export default () => {
    const classes = useStyles();
    return (
            <Paper className={classes.Paper}>
                right section (9)
            </Paper>
    );
}
