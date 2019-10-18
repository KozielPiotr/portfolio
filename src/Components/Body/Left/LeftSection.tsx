import React from "react"

import {Grid, Paper, makeStyles, Theme, createStyles, Container} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        Paper: {
            padding: theme.spacing(2, 5, 5, 5),
            background: "#c0c0c0"
        },
        ImageContainer: {
            borderWidth: 1
        },
        Image: {
            maxWidth: "100%",
            maxHeight: "100%",
            resizeMode: "contain"
        }
    }
  ),
);


export default () => {
    const classes = useStyles();
    return (
        <Grid item sm={3}>
            <Paper className={classes.Paper}>
                <Container className={classes.ImageContainer}>
                    <img src="avatar.jpg" alt="you should see my photo here. If you don't, maby it's better ;)" className={classes.Image} />
                </Container>
                
            </Paper>
        </Grid>
    );
}
