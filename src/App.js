import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import SignUp from './pages/SignUp/SignUp';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/pages/SignUp" component={SignUp} />
     
            
          </Switch>
          <Footer />
        </div>

    </Router>
    
  );
}

export default App;
