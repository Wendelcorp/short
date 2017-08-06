import React, { Component } from 'react';

class Domain extends Component {
  constructor(props){
    super(props);

    this.state = {
      visibility: "hidden"
    };
  }
  onClick() {
      this.setState({ visibility: "visible" });
      setTimeout(() => {
        this.setState({ visibility: "hidden" })
      }, 700)
  }

  render() {

    return (
      <div className="domain" onClick={this.onClick.bind(this)}>
        <h3 data-clipboard-text={this.props.url} className="short-url">{this.props.name + "/" + this.props.ext}</h3>
        <p id="copied" style={{visibility: this.state.visibility}}>Copied!</p>
      </div>
    );
  }
}

export default Domain;
