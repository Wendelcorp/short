import React, { Component } from 'react';
import Domain from './components/Domain'
import ClipboardButton from 'react-clipboard.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      myLink : "",
      ext : "...",
      visi : "hidden",
      opac : "0.2"
    };
  }
  onSubmit(e) {
    e.preventDefault()
    console.log(this.refs.submit.value)
    this.setState({
      myLink: this.refs.submit.value
    })

    fetch('http://shortly-api.herokuapp.com/new', {
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
        ext: json.short_id,
        visi : "visible",
        opac : "1"
      })
    })

    let submit = this.refs.submit;
    submit.value = "";
  }
  render() {

    return (
      <div className="App">
        <form onSubmit={this.onSubmit.bind(this)}>
          <input className="big-field" type="text" ref="submit" placeholder="drop a link..."/>
          <br/>
          <input className="big-button" type="submit" value="make it shrink" />
        </form>
        <p style={{visibility:this.state.visi, opacity:"0.4"}} className="long-url">{this.state.myLink}</p>
        <h4 style={{visibility:this.state.visi}}>↓ click to copy ↓</h4>
        <div style={{opacity:this.state.opac}} className="links">
          <ClipboardButton data-clipboard-text={"🎵🦄.ws/" + this.state.ext}>
            <Domain name="🎵🦄.ws" ext={this.state.ext}/>
          </ClipboardButton><br/>
          <ClipboardButton data-clipboard-text={"📖👓.ws/" + this.state.ext}>
            <Domain name="📖👓.ws" ext={this.state.ext}/>
          </ClipboardButton><br/>
          <ClipboardButton data-clipboard-text={"💚💜.ws/" + this.state.ext}>
            <Domain name="💚💜.ws" ext={this.state.ext}/>
          </ClipboardButton><br/>
          <ClipboardButton data-clipboard-text={"💸💰.ws/" + this.state.ext}>
            <Domain name="💸💰.ws" ext={this.state.ext}/>
          </ClipboardButton><br/>
          <ClipboardButton data-clipboard-text={"🚀👽.ws/" + this.state.ext}>
            <Domain name="🚀👽.ws" ext={this.state.ext}/>
          </ClipboardButton>
        </div>
      </div>
    );
  }
}

export default App;
