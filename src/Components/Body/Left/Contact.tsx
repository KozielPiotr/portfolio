import React, {Fragment} from "react"

import {List, ListItem, ListSubheader, Typography, Link, Collapse} from "@material-ui/core"
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles"
import {ExpandLess, ExpandMore} from "@material-ui/icons";

import {personal_info} from "../../personal_data_storel";


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


const isEmail = (title: string, description: string) => {
    if (title==="Email:") {
        return (
            <Link href={"mailto:" + description} color={"inherit"} underline={"always"}>
                {description}
            </Link>
        );
    };
    return (
        description
    );
}


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
                    <ListSubheader key={"subheader"} component="div" id="nested-list-subheader" onClick={handleClick}>
                        Contact: {open ? <ExpandLess key={"expless"} /> : <ExpandMore key={"expmore"} />}
                    </ListSubheader>
                }
                className={""}
            >   
                {personal_info.map((data) => 
                    <Fragment key={`${data.title}-frag`}>
                        <Collapse key={`${data.title}-col`} in={open} timeout="auto" unmountOnExit>
                            <ListItem key={data.title} className={classes.mainItem}>
                                <Typography key={`${data.title}-typo`} variant={"h6"}>
                                    {data.title}
                                </Typography>
                            </ListItem>
                            <List key={data.description} component="div" disablePadding>
                                <ListItem key={data.title} className={classes.nested}>
                                    <Typography key={`${data.title}-sub`} variant={"subtitle1"}>
                                        {isEmail(data.title, data.description)}
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
