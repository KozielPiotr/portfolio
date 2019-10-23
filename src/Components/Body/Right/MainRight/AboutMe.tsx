import React, {Fragment} from "react"

import {Typography} from "@material-ui/core";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles"


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
	    header: {
		    paddingBottom: 10,
	    },
	    about: {
			textIndent: "4%",
			paddingBottom: 30
	    }
    }),
);


export default () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Typography variant={"h4"} className={classes.header}>
				Few words about me
			</Typography>
			<Typography variant={"body1"} className={classes.about}>
				I am a programming enthusiast with a handful of experience in business process automation and web development in Flask supported with JavaScript.<br />
				Im looking for anopportunity to gain a professional experience in software development.
            </Typography>
        </Fragment>
    );
}