import React, { Component } from 'react';
import axios from 'axios';

class keywords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  fetchData(url) {
    if (this.props.api && url) {
      axios.get(this.props.api + '/keywords?url=' + url)
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
          <a name="keywords"><h2>Keywords</h2></a>
          <table><tbody>
            <tr><th>Word</th><th>Count</th></tr>
            {this.state.data.map(item => {
              return <tr key={item.word}><td>{item.word}</td><td>{item.count}</td></tr>
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

export default keywords;