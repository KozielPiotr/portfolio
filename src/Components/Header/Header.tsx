import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Theme, createStyles, AppBar, Toolbar, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
    }),
);


export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Piotr Kozieł
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
