import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Root from './Root/Root.component';
import Example1 from './Examples/Example1/Example1.component';
import Example2 from './Examples/Example2/Example2.component';
import Example3 from './Examples/Example3/Example3.component';
import GridExampleMenu from './GridExampleMenu/GridExampleMenu.component';


function App() {
  return (
    <Router>
      <GridExampleMenu />
      <Switch>
        <Route exact path="/">
          <Root />
        </Route>
        <Route exact path="/example-1">
          <Example1 />
        </Route>
        <Route exact path="/example-2">
          <Example2 />
        </Route>
        <Route exact path="/example-3">
          <Example3 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
