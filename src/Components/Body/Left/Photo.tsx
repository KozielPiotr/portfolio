import React from "react"

import {makeStyles, createStyles, Container} from "@material-ui/core";


const useStyles = makeStyles(() =>
    createStyles({
        ImageContainer: {
            borderWidth: 1
        },
        Image: {
            maxWidth: "100%",
            maxHeight: "100%",
            resizeMode: "contain"
        }
    }),
);


export default () => {
    const classes = useStyles();
    return (
        <Container className={classes.ImageContainer}>
            <img src="avatar.jpg" alt="you should see me here. If you don't, maby it's better ;)" className={classes.Image} />
        </Container>
    );
};
