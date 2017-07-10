import React, { Component } from 'react';

class htmlerroritem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      active: !this.state.active,
      className: "active"
    });
  }
  render() {
    const activeClass = this.state.active ? "active" : "inactive";
    const item = this.props.details;
    return (
            <div className={[activeClass, 'erroritem'].join(' ')} onClick={this.toggle}>
              <span className="summary">{item.message}</span>
              <div className="details">
                <div><strong>Line:</strong> {item.lastLine}</div>
                <div><strong>Column:</strong> {item.firstColumn} - {item.lastColumn}</div>
                <div><strong>Code:</strong> {item.extract}</div>
              </div>
            </div>
    );
  }
}

export default htmlerroritem;