'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

class Goats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar'
    };
  }

  render() {
    return (
      <div id="main" className="container-fluid">
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

module.exports = Goats;
