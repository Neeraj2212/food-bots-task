import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Profile from "./components/profile";
import Summary from "./components/summary";
import food from "./image/background.jpg";
import React, { useState, useEffect } from "react";

function App() {
	const [user, setUser] = useState({});
	const [summary, setSummary] = useState({});

	useEffect(() => {
		fetch("/api/order_summary")
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setSummary(res);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		fetch("/api/user")
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setUser(res.user);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div
			className="App"
			style={{
				background: `url(${food}) no-repeat fixed center`,
				backgroundSize: "cover",
			}}
		>
			<Router>
				<Switch>
					<Route
						exact
						path={"/profile"}
						component={() => <Profile user={user} />}
					/>
					<Route
						exact
						path={"/summary"}
						component={() => <Summary user={user} summary={summary} />}
					/>
					<Redirect to="/profile" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
