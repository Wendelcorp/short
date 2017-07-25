import React, { Component } from 'react';

class Domain extends Component {
  render() {
    return (
      <div className="domain">
        <h3 data-clipboard-text={this.props.url} className="short-url">{this.props.name + "/" + this.props.ext}</h3>
      </div>
    );
  }
}

export default Domain;
