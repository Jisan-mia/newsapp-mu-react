import React, { useEffect, useState } from "react";
import News from "../News/News";

const TopNews = () => {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		const url =
			"https://newsapi.org/v2/top-headlines?country=in&apiKey=8c4c0b73170440dc909e77536dcb391f";
		fetch(url)
			.then((res) => res.json())
			.then((data) => setArticles(data.articles));
	}, []);

	return (
		<div style={{ width: "1152px", maxWidth: "90%", margin: "0 auto" }}>
			<h1 style={{ textAlign: "center" }}>Top News </h1>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-around",
				}}
			>
				{articles.map((article) => (
					<News article={article}></News>
				))}
			</div>
		</div>
	);
};

export default TopNews;
