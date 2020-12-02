import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchPage from "./components/pages/SearchPage";
import SavedPage from "./components/pages/SearchPage";

import "./App.css";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={SearchPage} />
                <Router exact path="/saved" component={SavedPage} />
            </Switch>
        </Router>
    );
};

export default App;