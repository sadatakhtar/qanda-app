import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import Routes from './routes/index';





function App() {
  return (
        <div className="App">
          <Header />
          <Routes />
          <Footer />
        </div> 
  );
}

export default App;
