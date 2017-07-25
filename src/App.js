import React, { Component } from 'react';
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
          <input className="big-field" type="text" ref="submit" placeholder="Drop a link..."/>
          <br/>
          <input className="big-button" type="submit" value="Make it shrink" />
        </form>
        <a style={{visibility:'hidden'}} className="long-url" href={this.state.myLink}>{this.state.myLink}</a>
        <h4 style={{visibility:'hidden'}}>Just copy and share!</h4>
        <div style={{opacity:'0.2'}} className="links">
          <Domain name="🎵🦄.ws" ext={this.state.ext}/>
          <Domain name="📖👓.ws" ext={this.state.ext}/>
          <Domain name="💚💜.ws" ext={this.state.ext}/>
          <Domain name="💸💰.ws" ext={this.state.ext}/>
          <Domain name="🚀👽.ws" ext={this.state.ext}/>
        </div>
      </div>
    );
  }
}

export default App;
