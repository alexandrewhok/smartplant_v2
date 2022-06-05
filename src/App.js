import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./Pages/home";
import login from "./Pages/login";
import cacto from "./Pages/cacto";
import addplant from "./Pages/addplant";

import "./Styles/applications.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={home} exact />
          <Route path="/" component={login} exact />
          <Route path="/cacto" component={cacto} exact />
          <Route path="/addplant" component={addplant} exact />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
