import React, { Component } from 'react';
import logo from './logo.svg';

import UrlForm from './Components/form';
import LogoApi from './Components/logoApi';
import Details from './Components/details';
import Headers from './Components/headers';
import Keywords from './Components/keywords';
import Errors from './Components/validatehtml';
import Speed from './Components/speed';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      URL: "",
      API: "https://api.open-seo.org" //"http://localhost:3030"
    }
  }
  submitWebsite(url){
    this.setState({URL:url});
  }

  render() {
    let aside = (<div></div>)

    if (this.state.URL) {
      aside = (
      <aside className="col-sm-3 offset-sm-1 blog-sidebar">
        <section className="sidebar-module sidebar-module-inset">
          <h4>About</h4>
          <p>Free and open source tool to evaluate your website. I'd love feedback on what should be added.</p>
        </section>
        <section className="sidebar-module">
          <h4>Sections</h4>
          <ol className="list-unstyled">
            <li><a href="#details">Details</a></li>
            <li><a href="#headers">Headers</a></li>
            <li><a href="#speed">Speed</a></li>
            <li><a href="#keywords">Keywords</a></li>
            <li><a href="#errors">Errors</a></li>
          </ol>
        </section>
      </aside>
      )
    }

    return (
      <div className="App">
        <div className="App-body">
          <div className="container">
            <div className="row">
              <div className="form">    
                <UrlForm submitWebsite={this.submitWebsite.bind(this)} />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="logo col-sm-12">
                <LogoApi url={this.state.URL} />
              </div>
            </div>
          </div>
          
          <div className="container">
            <div className="row">
              <div className="col-sm-8 blog-main">

                <div className="panel"> 
                  <Details url={this.state.URL} api={this.state.API} />
                </div>
                <div className="panel"> 
                  <Headers url={this.state.URL} api={this.state.API} />
                </div>
                <div className="panel"> 
                  <Speed url={this.state.URL} api={this.state.API} />
                </div>
                <div className="panel"> 
                  <Keywords url={this.state.URL} api={this.state.API} />
                </div>
                <div className="panel"> 
                  <Errors url={this.state.URL} api={this.state.API} />
                </div>

              </div> {/* blog-main */}

              {aside}

            </div> {/* row */}
          </div> {/* container */}
        </div>
      </div>
    );
  }
}

export default App;
