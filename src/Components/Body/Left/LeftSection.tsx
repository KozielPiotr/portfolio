import React from "react"

import {Grid, Paper, makeStyles, Theme, createStyles, Container, Avatar} from "@material-ui/core";


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
            resizeMode: 'contain'
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
                    <img src="avatar.jpg" className={classes.Image} />
                </Container>
                
            </Paper>
        </Grid>
    );
}
