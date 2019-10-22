import React from "react";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import {AppBar, Toolbar, Typography, IconButton} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles((theme: Theme) =>
  	createStyles({
    	title: {
			flexGrow: 1,
			textAlign: "left"
        },
        title2: {
			flexGrow: 1,
			textAlign: "right"
		},
		button: {
            margin: theme.spacing(1, 5, 1, 1),
        },
        icon: {
            color: "white"
        }
  	}),
);


export default function IconTabs() {
    const classes = useStyles();
    
    const visitLkdin = () => {
        window.open("https://www.linkedin.com/in/piotr-kozie%C5%82-3b551354/", "_blank")
      };

      const visitGithub = () => {
        window.open("https://github.com/KozielPiotr", "_blank")
      };

	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<Typography variant="h6" className={classes.title}>
                    Piotr Kozieł
				</Typography>
                <Typography variant="h6" className={classes.title2}>
                    Check me out on:
				</Typography>
                <IconButton onClick={visitGithub} className={classes.button}>
				    <GitHubIcon className={classes.icon} />
                </IconButton>
                <IconButton onClick={visitLkdin} className={classes.button}>
				    <LinkedInIcon className={classes.icon} />
                </IconButton>
			</Toolbar>
		</AppBar>
	);
}
