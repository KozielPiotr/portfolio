import React from "react"

import {List, ListItem, ListSubheader, makeStyles, Theme, createStyles, Typography, Container} from "@material-ui/core"

import { personal_info } from '../../personal_data_storel';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: 0,
        }
    }),
);


export default () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List
                component="nav"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Contact:
                    </ListSubheader>
                }
                className={""}
            >
                {personal_info.map((data) => 
                    <ListItem>
                        <div>
                            <Typography variant={"h6"}>
                                {data.title}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant={"subtitle1"}>
                                <br/>{data.description}
                            </Typography>
                        </div>
                    </ListItem>
                )}
            </List>
        </div>
    );
}
