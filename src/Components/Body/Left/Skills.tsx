import React, {Fragment} from "react"

import {skills} from "../../personal_data_storel";
import {List, ListSubheader, Collapse, ListItem, Typography} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {makeStyles, createStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: 0,
        },
        mainItem: {
            paddingTop: 0,
            paddingBottom: 0,
        },
    }),
);


export default () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <List
            component="nav"
            subheader={
                <ListSubheader key="subheader" component="div" id="nested-list-subheader" onClick={handleClick}>
                    Skills: {open ? <ExpandLess key={"expless"} /> : <ExpandMore key={"expmore"} />}
                </ListSubheader>
            }
            className={""}
            >   
            {skills.map((data) => 
                <Fragment key={`${data}-frag`}>
                    <Collapse key={`${data}-col`} in={open} timeout="auto" unmountOnExit>
                        <ListItem key={data} className={classes.mainItem}>
                            <Typography key={`${data}-typo`} variant={"h6"}>
                                {data}
                            </Typography>
                        </ListItem>
                     </Collapse>
                </Fragment>
            )}
        </List>
    );
}
