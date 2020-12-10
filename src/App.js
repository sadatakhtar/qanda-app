import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import SignUp from './pages/SignUp/SignUp';
import Login from '../src/pages/Login/Login';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/pages/SignUp" component={SignUp} />
            <Route path="/pages/Login" component={Login} />
            
     
            
          </Switch>
          <Footer />
        </div>

    </Router>
    
  );
}

export default App;
