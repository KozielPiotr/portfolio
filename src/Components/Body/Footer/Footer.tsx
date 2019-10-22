import React from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import {AppBar, Toolbar, Typography, Button} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
  	createStyles({
    	menuButton: {
      		marginRight: theme.spacing(2),
    	},
    	title: {
			flexGrow: 1,
			textAlign: "right"
		},
		ahref: {
			color: "inherit",
		}
  	}),
);


export default function IconTabs() {
  	const classes = useStyles();
	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<Typography variant="caption" className={classes.title}>
				</Typography>
				<Typography variant="caption" className={classes.title}>
					created by <a href={"mailto:koziel.piotr1988@gmail.com"} className={classes.ahref}>Piotr Kozieł</a> 2019
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
