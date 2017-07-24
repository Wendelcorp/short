import React, { Component } from 'react';

class Domain extends Component {
  render() {

    return (
      <div className="domain">
        <a href={"http://www." + this.props.name + "/" + this.props.ext}><h1>{this.props.name + "/" + this.props.ext}</h1></a>
        COPY
      </div>
    );
  }
}

export default Domain;
