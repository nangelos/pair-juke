'use strict';

import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Albums from './Albums';
import SingleAlbum from './SingleAlbum';
import axios from 'axios';

const audio = document.createElement('audio');

class Goats extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {},
      currentSong: {}
    };
    this.start = this.start.bind(this);
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

  handleSidebarClick = () =>{
    this.setState({ selectedAlbum: {}});
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


  start(songId){
    axios.get('/api/songs/' + songId)
      .then(response => {
        console.log('response', response)
        return response.data;
      })
      .then(data => {
        console.log('data',data)
        this.setState({currentSong:data})
        audio.src = data.audioUrl;
        audio.load();
        audio.play();
      })
      .catch(err => {
        console.error(err);
      });
  }

  ifPlaying (){
    if(Object.keys(this.state.currentSong) !== 0){
      document.getElementById(this.state.currentSong.id).style.visibility = 'hidden'
    } else {
      document.getElementById(this.state.currentSong.id).style.visibility = 'visible'
    }
  }

  singleAlbum() {
    if ((Object.keys(this.state.selectedAlbum).length) === 0) {
      return <Albums handleClick={this.handleClick} albums={this.state.albums} />;
    } else {
      return <SingleAlbum selectedAlbum={this.state.selectedAlbum} start={this.start} albumPlaying = {this.ifPlaying}/>;
    }
  }

  render() {
    return (
      <div id="main" className="container-fluid">
        <Sidebar handleSidebarClick={this.handleSidebarClick}/>
        {this.singleAlbum()}
        <Footer />
      </div>
    );
  }
}

module.exports = Goats;
