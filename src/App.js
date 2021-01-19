
import Another, { AnotherOne } from './another';
import { BrowserRouter as Router} from "react-router-dom";
import {Switch,Route} from "react-router-dom";


function App() {
  console.log("This is the process.env", process.env.PUBLIC_URL);
  return (

    <Router basename="/rileyb123.github.io">
    <div className="App">
    <Switch>
            <Route exact path='/' >
            <Another />
            </Route>
            <Route exact path='/anotherOne'>
            <AnotherOne/>
            </Route>
    </Switch>
     </div>
    </Router>
  );
}


export default App;
