import React from 'react';
import Header from './components/Header/Header.component';
import Home from './components/Hero/Hero.component';
import Footer from './components/Footer/Footer.component';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;