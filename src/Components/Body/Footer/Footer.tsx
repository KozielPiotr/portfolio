import React from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {makeStyles, createStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(() =>
    createStyles({
        Grid: {
			display: "flex",
		},
		Paper: {
			textAlign: "center",
		}
    }),
);


export default () => {
    const classes = useStyles();
    return (
		<Paper className={classes.Paper}>
			<Tabs
				value = {0}
				indicatorColor="primary"
				textColor="primary"
				centered>
				<Tab label="Item One" />
				<Tab label="Item Two" />
				<Tab label="Item Three" />
			</Tabs>
		</Paper>
    );
}
