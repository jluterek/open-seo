import React, { Component } from 'react';
import axios from 'axios';
import Htmlerroritem from '../Components/htmlerroritem';

class ValidateHTML extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  fetchData(url) {
    if (this.props.api && url) {
      axios.get(this.props.api + '/validatehtml?url=' + url)
        .then(res => {
          const d = res.data;
          console.log(d);
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
          <a name="errors"><h2>HTML Errors</h2></a>
          {this.state.data.map(item => {
              return <Htmlerroritem key={item.index} index={item.index} details={item} className={item.type} />
            })}
        </div>
      );
    }
    else {
      return (<div></div>);
    }
  }

}

export default ValidateHTML;