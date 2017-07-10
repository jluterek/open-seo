import React, { Component } from 'react';

class logoApi extends Component {
  render() {
    if (this.props.url) {
      return (
        <div>
          <img src={"//logo.clearbit.com/" + this.props.url} width="64px" alt="Website Logo" />
        </div>
      );
    }
    else {
      return (<div></div>);
    }
  }
}

export default logoApi;