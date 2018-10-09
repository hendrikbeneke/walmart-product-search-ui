import React, { Component } from 'react';
import logo from './walmart_logo.jpg';
import SearchContainer from './search/SearchContainer';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="mx-auto" style={{ maxWidth: '50%' }}>
                  <img className="img-fluid" src={logo} alt="Walmart"/>
                </div>
              </div>
            </div>
          </div>
        </header>
        <SearchContainer/>
      </div>
    );
  }
}

export default App;
