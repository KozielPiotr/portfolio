import React from "react";
import Grid from "@material-ui/core/Grid";

import RightSection from "./Right/RightSection";
import LeftSection from "./Left/LeftSection";
import {Theme, createStyles, makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        Grid: {
            display: "flex"
        }
    }),
);


export default () => {
    const classes = useStyles();
    return (
    <Grid container className={classes.Grid} spacing={1} >
        <LeftSection />
        <RightSection />
    </Grid>
    );
}
