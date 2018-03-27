import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Songs from './Songs';
import AllAlbums from './AllAlbums';
import axios from 'axios';


export default class SingleArtist extends Component {
  constructor() {
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
    })
    .catch(err => {
      console.error(err);
    });
  }


  render () {

    const artist = this.state.selectedArtist;
    return (
      <div>
        <h3>{ artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><NavLink to={`/artists/${artist.id}/albums`} activeClassName="active">ALBUMS</NavLink></li>
          <li><NavLink to={`/artists/${artist.id}/songs`} activeClassName="active">SONGS</NavLink></li>
        </ul>
        <Switch>
          <Route path={`/artists/${artist.id}/albums`} render={() => <AllAlbums albums={this.state.artistAlbums} /> } />
          <Route path={`/artists/${artist.id}/songs`}  render={() => <Songs songs={this.state.artistSongs} /> } />
        </Switch>
      </div>
    );
  }
}
