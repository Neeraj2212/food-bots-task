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

function App() {
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
					<Route exact path={"/profile"} component={Profile} />
					<Route exact path={"/summary"} component={Summary} />
					<Redirect to="/profile" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
