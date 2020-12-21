import React from "react";
import "./App.css";
import Navigation from "./Compoenents/Navigation/Navigation";
import TopNews from "./Compoenents/TopNews/TopNews";
function App() {
	return (
		<div className="main">
			<Navigation></Navigation>
			<TopNews></TopNews>
		</div>
	);
}

export default App;
