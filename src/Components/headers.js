import React, { Component } from 'react';
import axios from 'axios';

class headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  fetchData(url) {
    if (this.props.api && url) {
      axios.get(this.props.api + '/headers?url=' + url)
        .then(res => {
          const d = res.data;
          this.setState({ data: d });
        });
    }

  }

  componentDidMount() {
    this.fetchData(this.props.url);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url) {
      this.fetchData(nextProps.url);
    }
  }

  render() {
    if (this.props.url) {
      return (
        <div>
          <a name="headers"><h2>Headers</h2></a>
          <table><tbody>
            <tr><th>Key</th><th>Value</th></tr>
            {Object.keys(this.state.data).map(key => {
              return <tr key={key}><td>{key}</td><td>{this.state.data[key]}</td></tr>
            })}
          </tbody></table>
        </div>
      );
    }
    else {
      return (<div></div>);
    }
  }

}

export default headers;