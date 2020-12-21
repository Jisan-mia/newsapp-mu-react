import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});
const News = (props) => {
	const { title, description, urlToImage, url } = props.article;

	const classes = useStyles();
	return (
		<Card className={classes.root} style={{ marginBottom: "20px" }}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={urlToImage}
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					{/* <a rel="noreferrer"  target="_blank" href={url}>
						Learn More
					</a> */}
					<Link style={{ textDecoration: "none" }} target="_blank" href={url}>
						Read More
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
};

export default News;
