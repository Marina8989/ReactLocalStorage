import React from 'react';
import Home from './Home';
import About from './About';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component{
    render() {
        return(
            <Router>
                <div>
                   <Link to='/'>Home</Link>
                </div>
                <div>
                    <Link to='/about'>About</Link>
                </div>
                <Switch>
                   <Route path="/" exact>
                       <Home />
                   </Route>
                   <Route path="/about">
                       <About />
                   </Route>
                </Switch>
            </Router>
        )
    }
}


export default App