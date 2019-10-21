import React, {Fragment} from "react"

import {List, ListItem, ListSubheader, Typography, Collapse} from "@material-ui/core"
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles"
import {ExpandLess, ExpandMore} from "@material-ui/icons";

import {languages} from "../../personal_data_storel";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: 0,
        },
        mainItem: {
            paddingTop: 0,
            paddingBottom: 0,
        },
        nested: {
            padding: theme.spacing(0, 0, 0, 4),
        }
    }),
);


export default () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    
    return (
        <div className={classes.root}>
            <List
                component="nav"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" onClick={handleClick}>
                        Languages: {open ? <ExpandLess /> : <ExpandMore />}
                    </ListSubheader>
                }
                className={""}
            >   
                {languages.map((data) => 
                    <Fragment>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <ListItem className={classes.mainItem}>
                                <Typography variant={"h6"}>
                                    {data.language}
                                </Typography>
                            </ListItem>
                            <List component="div" disablePadding>
                                <ListItem className={classes.nested}>
                                    <Typography variant={"subtitle1"}>
                                        {data.level}
                                    </Typography>
                                </ListItem>
                            </List>
                        </Collapse>
                    </Fragment>
                )}
            </List>
        </div>
    );
}
