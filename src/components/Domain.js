import React, { Component } from 'react';

class Domain extends Component {
  render() {

    return (
      <div className="domain">
        <a href={"http://" + this.props.name + "/" + this.props.ext}><p>{this.props.name + "/" + this.props.ext}</p></a>
        COPY
      </div>
    );
  }
}

export default Domain;
