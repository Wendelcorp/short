import React, { Component } from 'react';

class Domain extends Component {
  render() {

    return (
      <div className="domain">
        <a href={this.props.name}><p>{this.props.name}/...</p></a>
        <p>COPY</p>
      </div>
    );
  }
}

export default Domain;
