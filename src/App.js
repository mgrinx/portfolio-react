import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './style.scss';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
