import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Events from './components/pages/Events';
import Blog from './components/pages/Blog';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Wedding from './components/pages/Wedding';
import Anniversary from './components/pages/Anniversary';
import { FooterContainer } from './containers/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/events' component={Events} />
        <Route path='/blogs' component={Blog} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/wedding' component={Wedding} />
        <Route path='/anniversary' component={Anniversary} />
      </Switch>
      <FooterContainer />
    </Router>
  );
}

export default App;
