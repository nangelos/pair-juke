import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Songs from './Songs';
import AllAlbums from './AllAlbums';
import axios from 'axios';


export default class SingleArtist extends Component {
  constructor(){
    super();
    this.state = {
      selectedArtist: {},
      artistAlbums: [],
      artistSongs: []
    };
  }

  componentDidMount() {
    const artistId = this.props.match.params.artistId;
    const selectedArtist = axios.get(`/api/artists/${artistId}`);
    const artistAlbums = axios.get(`/api/artists/${artistId}/albums`);
    const artistSongs = axios.get(`/api/artists/${artistId}/songs`);

    Promise.all([selectedArtist, artistAlbums, artistSongs])
    .then(([artist, albums, songs]) => {
      return [artist.data, albums.data, songs.data];
    })
    .then(data => {
      this.setState({selectedArtist: data[0]});
      this.setState({artistAlbums: data[1]});
      this.setState({artistSongs: data[2]});
    });
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
      const albums = this.state.artistAlbums;
      const songs = this.state.artistSongs;
      return (
        <div>
          <h3>{artist.name}</h3>
          <h4>ALBUMS</h4>
          <AllAlbums albums={albums}/>
          <h4>SONGS</h4>
          <Songs songs={songs} />
      </div>
      );
    }
  }

  render () {

    const artist = this.state.selectedArtist; // or however you've named it

    return (
      <div>
        <h3>{ artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
        </ul>
        {<Route path="/artists/:artistId/albums" render={() => <AllAlbums albums={this.state.artistAlbums}/>}/>}
        {<Route path="/artists/:artistId/songs" render={() => <Songs songs={this.state.artistSongs}/>}/>}
      </div>
    );
  }
}
