'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Albums from './Albums'


class Goats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main" className="container-fluid">
        <Sidebar />
        <Albums />
        <Footer />
      </div>
    );
  }
}

module.exports = Goats;
