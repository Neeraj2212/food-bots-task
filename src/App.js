import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Profile from "./components/profile";
import Summary from "./components/summary";

function App() {
	return (
		<div className="App">
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
