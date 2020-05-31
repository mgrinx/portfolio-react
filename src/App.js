import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './style.scss';

function App() {
  return (
    <Router>
      <>
        <Header />
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
