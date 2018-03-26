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

  handleClick = (albumId) => {
    axios.get('/api/albums/' + albumId)
      .then(response => {
        return response.data;
      })
      .then(data => {
        this.setState({ selectedAlbum: data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  // handleClick = (event) => { // arrow syntax equivalent to bind method
  //   this.setState({ selectedAlbum: event });
  // }

  componentDidMount() {
    axios.get('/api/albums')
    .then(response => {
      return response.data;
    })
    .then(data => {
      this.setState({albums: data});
    })
    .catch(err => {
      console.error(err);
    });
  }

  singleAlbum() {
    if ((Object.keys(this.state.selectedAlbum).length) === 0) {
      return;
    } else {
      return <SingleAlbum selectedAlbum={this.state.selectedAlbum} />;
    }
  }


  render() {
    return (
      <div id="main" className="container-fluid">
        <Sidebar />
        <Albums handleClick={this.handleClick} albums={this.state.albums} />
        {this.singleAlbum()}
        <Footer />
      </div>
    );
  }
}

module.exports = Goats;
