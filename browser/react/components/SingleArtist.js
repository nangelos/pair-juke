import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class SingleArtist extends Component {
  constructor(){
    super();
    this.state = {
      selectedArtist: {}
    };
  }

  componentDidMount() {
    const artistId = this.props.match.params.artistId;
    axios.get(`/api/artists/${artistId}`)
      .then(res => res.data)
      .then(artist => this.setState({
        selectedArtist: artist
      }));
  }

  isSelectedArtist() {
    if (Object.keys(this.state.selectedArtist).length === 0) {
      return (
        <div>
          <h3>ARTIST</h3>
          <h4>ALBUMS</h4>
          <h4>SONGS</h4>
        </div>
      );
    } else {
      const artist = this.state.selectedArtist;
      console.log('artists ', artist);
      return (
        <div>
          <h3>{artist.name}</h3>
          <h4>ALBUMS</h4>
          <h4>SONGS</h4>
      </div>
      );
    }
  }

  render () {
    return this.isSelectedArtist();
  }
}
