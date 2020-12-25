import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Nav from './layouts/Nav';
import Footer from './layouts/Footer';
import Reacts from './components/Reacts';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';


const App = () => {
  return (
  <>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/react" component={Reacts} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect  component={Home} />
      </Switch>
      <Footer />
    </Router>
  </>
  );
}

export default App;
