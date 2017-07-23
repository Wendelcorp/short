import React, { Component } from 'react';
import logo from './logo.svg';
import SearchForm from './components/SearchForm'
import Domain from './components/Domain'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Shortly</h2>
        </div>
        <p className="App-intro">
          The emoji domain shortener.
        </p>
        <SearchForm />
        <Domain name="🎵🦄.ws" />
        <Domain name="📖👓.ws" />
        <Domain name="💚💜.ws" />
        <Domain name="💸💰.ws" />
        <Domain name="🚀👽.ws" />
      </div>
    );
  }
}
export default App;
