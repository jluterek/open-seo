import React, { Component } from 'react';
import axios from 'axios';

class details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  fetchData(url) {
    if (this.props.api && url) {
      axios.get(this.props.api + '/details?url=' + url)
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
          <a name="details"><h2>Details</h2></a>
          <table><tbody>
            <tr title="Meta Title"><td><strong>Title: </strong></td><td>{this.state.data['title']}</td></tr>
            <tr title="Meta Description"><td><strong>Description: </strong></td><td>{this.state.data['description']}</td></tr>
            <tr title="Meta Author"><td><strong>Author: </strong></td><td>{this.state.data['author']}</td></tr>
            <tr title="Meta Keywords"><td><strong>Keywords: </strong></td><td>{this.state.data['keywords']}</td></tr>
            <tr title="First H1 Value"><td><strong>H1 Value: </strong></td><td>{this.state.data['heading1']}</td></tr>
            <tr title="Number of H1 tags on page."><td><strong>Total H1 Tags: </strong></td><td>{this.state.data['totalHeadings']}</td></tr>
            <tr title="% Images with alt tags"><td><strong>Img Accessibility: </strong></td><td>{Math.round(this.state.data['imgAccessibility'])}%</td></tr>
          </tbody></table>
        </div>
      );
    }
    else {
      return (<div></div>);
    }
  }

}

export default details;