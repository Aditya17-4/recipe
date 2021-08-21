import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
	const APP_ID = "cf11db71 ";
	const APP_KEY = "f294a9f910f56f33e981a252491e6924";
	const examplereq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

	const [counter, setCounter] = useState(0);

	useEffect(() => {
		console.log("effect in place");
	});

	return (
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text" />
				<button
					onClick={() => setCounter(counter + 1)}
					className="search-button"
					type="submit">
					{counter}
				</button>
			</form>
		</div>
	);
};

export default App;
