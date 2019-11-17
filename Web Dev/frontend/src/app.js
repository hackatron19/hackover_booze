import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Inner10377 from './components/inner10377';
import Inner10284 from './components/inner10284';
import Inner10385 from './components/inner10385';
import PrivateRoute from './privateroute';
import Front from './components/front'
import { AuthContext }  from './auth';
function App(props) {
  return (
      <AuthContext.Provider value={false}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/10377">10377</Link>
          </li>
          <li>
            <Link to="/10284">10284</Link>
          </li>
          <li>
            <Link to="/10385">10385</Link>
          </li>
          
        </ul>
        <Route path="/login" component={Front}/>
        <Route exact path="/10377" component={Inner10377} />
        <Route exact path="/10385" component={Inner10385} />
        <PrivateRoute path="/10284" component={Inner10284} />
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;