import React from "react";

import {createStyles, makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import {GridList, IconButton, GridListTile, GridListTileBar, ListSubheader, Tooltip} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import {tileData} from "./tileData";


const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            overflow: "hidden",
            backgroundColor: "transparent",
            width: "100%",
            maxHeight: "65vh",
            minHeight: "65vh",
            overflowY: "auto"
        },
        gridList: {
            width: "100%",
            height: "100%",
		},
		icon: {
			color: "rgba(255, 255, 255, 0.54)",
		},
    }),
);


const HtmlTooltip = withStyles((theme: Theme) => ({
	tooltip: {
		backgroundColor: "rgba(0,0,0,0.7)",
		color: "white",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(12),
		border: "1px solid #dadde9",
	},
}))(Tooltip);


export default function TitlebarGridList() {
	const classes = useStyles();

	const visitGithub = (link: string) =>
		window.open(link, "_blank")

  return (
		<div className={classes.root}>
      		<GridList cellHeight={180} className={classes.gridList}>
				<GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
					<ListSubheader component="div">My Github repositories:</ListSubheader>
				</GridListTile>
				{tileData.map(tile => 
					<HtmlTooltip key={`${tile.title}-img`} title={tile.description} placement="left-start">
						<GridListTile key={tile.img}>
								<img src={tile.img} alt={tile.title} />
							<GridListTileBar
								title={tile.title}
								subtitle={<span>{tile.technology}</span>}
								actionIcon={
									<IconButton onClick={() => visitGithub(tile.link)} className={classes.icon}>
										<GitHubIcon />
									</IconButton>
								}
							/>
						</GridListTile>
					</HtmlTooltip>
				)}
      </GridList>
    </div>
  );
}