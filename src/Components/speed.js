import React, { Component } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

class speed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined
    };
  }

  fetchData(url) {
    if (this.props.api && url) {
      axios.get(this.props.api + '/speed?url=' + url)
        .then(res => {
          const d = res.data;
          this.setState({ data: d });
          console.log(d.ruleGroups.SPEED.score);
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
    if (this.props.url && this.state.data) {
      let d = this.state.data;
      var chartData = [
          ['File Type', 'bytes'],
          ['HTML',  parseInt(d.pageStats.htmlResponseBytes)],
          ['CSS',   parseInt(d.pageStats.cssResponseBytes)],
          ['JS',    parseInt(d.pageStats.javascriptResponseBytes)],
          ['Image', parseInt(d.pageStats.imageResponseBytes)]
        ];
      return (
        <div>
          <a name="speed"><h2>Speed</h2></a>
          Score: {d.ruleGroups.SPEED.score} / 100
          <table><tbody>
            <tr title="Number of hosts"><td><strong>Hosts: </strong></td><td>{d.pageStats.numberHosts}</td></tr>
            <tr title="Number resources requested"><td><strong>Resources: </strong></td><td>{d.pageStats.numberResources}</td></tr>
            <tr title="HTML Stats"><td><strong>HTML: </strong></td><td>1 file / {parseInt(d.pageStats.htmlResponseBytes).toLocaleString()} bytes</td></tr>
            <tr title="CSS Stats"><td><strong>CSS: </strong></td><td>{d.pageStats.numberCssResources} files / {parseInt(d.pageStats.cssResponseBytes).toLocaleString()} bytes</td></tr>
            <tr title="JavaScript Stats"><td><strong>JavaScript: </strong></td><td>{d.pageStats.numberJsResources} files / {parseInt(d.pageStats.javascriptResponseBytes).toLocaleString()} bytes</td></tr>
            <tr title="Image Stats"><td><strong>Images: </strong></td><td>{d.pageStats.numberStaticResources} files / {parseInt(d.pageStats.imageResponseBytes).toLocaleString()} bytes</td></tr>
          </tbody></table>
          <Chart
            chartType="PieChart"
            data={chartData}
            graph_id="PieChart"
            width="100%"
            height="400px"
            legend_toggle
          />
        </div>
      );
    }
    else {
      return (<div></div>);
    }
  }

}

export default speed;