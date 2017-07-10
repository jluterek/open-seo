import React, { Component } from 'react';

class form extends Component {
  constructor(){
    super();
    this.state = {
      URL:""
    };
  }

  CheckIsValidDomain(domain) { 
    var re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/); 
    return domain.match(re);
  } 

  handleSubmit(e){
    let url = this.refs.url.value;
    url = url.replace('http://', '').replace('https://', '');
    url = url.replace('www.', '');
    if(url === ''){
      alert('URL is required');
    }
    else if (!this.CheckIsValidDomain(url)) {
      alert('URL is required');
    } else {
      this.setState({URL:url}, 
        function(){
            this.props.submitWebsite(this.state.URL);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label htmlFor="url">URL: </label><br />
            <input id="url" type="text" ref="url" />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default form;