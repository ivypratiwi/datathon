import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './component/Nav';
import HomePage from './component/Homepage'
import Footer from './component/Footer'
import Result from './component/Result'


function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/data" component={Result} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}
export default App;
