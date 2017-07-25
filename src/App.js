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
      ext : "...",
    };
  }
  onSubmit(e) {
    e.preventDefault()
    console.log(this.refs.submit.value)
    this.setState({
      myLink: this.refs.submit.value
    })

    fetch('http://www.xn--ml8h46g.ws/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'long_url': this.refs.submit.value,
      })
    }).then(res => {
      return res.json();
    }).then(json => {
      console.log(json)
      this.setState({
        ext: json.short_id
      })
    })

    let submit = this.refs.submit;
    submit.value = "";
  }
  render() {

    return (
      <div className="App">
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="submit" placeholder="Drop a link.."/>
        </form>
        <a className="long-url" href={this.state.myLink}>{this.state.myLink}</a>
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
