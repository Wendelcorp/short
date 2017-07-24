import React, { Component } from 'react';
import logo from './logo.svg';
// import SearchForm from './components/SearchForm'
import Domain from './components/Domain'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      myLink : "",
      ext : "abc"
    };
  }
  onSubmit(e) {
    e.preventDefault()
    console.log(this.refs.submit.value)

    this.setState({
      myLink: this.refs.submit.value
    })
    let submit = this.refs.submit;
    submit.value = "";
  }
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
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="submit"/>
        </form>
        <a href={this.state.myLink}>{this.state.myLink}</a>
        <Domain name="🎵🦄.ws" ext={this.state.ext}/>
        <Domain name="📖👓.ws" ext={this.state.ext}/>
        <Domain name="💚💜.ws" ext={this.state.ext}/>
        <Domain name="💸💰.ws" ext={this.state.ext}/>
        <Domain name="🚀👽.ws" ext={this.state.ext}/>
      </div>
    );
  }
}

export default App;
