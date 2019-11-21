// Imports
import React from 'react';
import Header from './components/Header/header-index';
import './general-style.css';
import About from './components/About/about'
import Routes from './routes';




// Stateless Component
const App = () => (
  
    <div className="App">
      <Header/>
      <About/>
      <Routes/>
    </div>
    
);

export default App;
