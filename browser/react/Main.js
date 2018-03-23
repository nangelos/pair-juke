'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Albums from './Albums';
import SingleAlbum from './SingleAlbum';
import axios from 'axios';

class Goats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {}
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState({ selectedAlbum: event });
  }

  componentDidMount() {
    axios.get('/api/albums')
    .then(response => {
      return response.data;
    })
    .then(data => {
      console.log('success');
      console.log(data);
      this.setState({albums: data});
    })
    .catch(err => {
      console.error('error');
      console.error(err);
    });
  }


  render() {
    console.log('main this state', this.state);
    return (
      <div id="main" className="container-fluid">
        <Sidebar />
        <Albums handleClick={this.handleClick} albums={this.state.albums} />
        <SingleAlbum selectedAlbum={this.state.selectedAlbum} />
        <Footer />
      </div>
    );
  }
}

module.exports = Goats;
