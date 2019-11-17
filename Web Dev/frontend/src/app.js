import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Inner10377 from './components/inner10377';
import Inner10284 from './components/inner10284';
import Inner10385 from './components/inner10385';
import PrivateRoute from './privateroute';
import Front from './components/front'
import { AuthContext }  from './auth';
import './main.css';
function App(props) {
  return (
    
      <AuthContext.Provider value={false}>
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><Link to="/login">HACKOVER BOOZE</Link></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      {/* <a className="nav-item nav-link active" href="#"><Link to="/10377">10377</Link> <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#"><Link to="/10284">10284</Link></a>
      <a className="nav-item nav-link" href="#"><Link to="/10385">10385</Link></a> */}
     
    </div>
  </div>
</nav>
      <Route path="/login" component={Front}/>
       
        
        <Route exact path="/47457566253dea09d9191b95c4aa3f64" component={Inner10377} />
        <Route exact path="/a52fd55f42010405991a333187181f7e" component={Inner10385} />
        <Route path="/f17a33840b3e520949d36b24ebad7fb0" component={Inner10284} />
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;











