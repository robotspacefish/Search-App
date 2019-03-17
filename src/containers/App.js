import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
