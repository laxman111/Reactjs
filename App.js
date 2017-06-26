import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Navigations: </h1>
        <h4>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          </h4>
        

        {this.props.children}

      </div>
    );
  }
}
