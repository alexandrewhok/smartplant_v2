import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./Pages/home";
import login from "./Pages/login";
import "./Styles/applications.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={home} exact />
          <Route path="/login" component={login} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
