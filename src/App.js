import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
	const APP_ID = "41fd9550";
	const APP_KEY = "952c800fb6b5309aebdcfcda51b64045	";

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		console.log(data);
	};
	return (
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text" />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};

export default App;
