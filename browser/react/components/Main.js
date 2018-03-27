import React from 'react';
import AllArtists from './AllArtists';
import SingleAlbum from './SingleAlbum';
import SingleArtist from './SingleArtist';
import Sidebar from './Sidebar';
import Player from './Player';
import { HashRouter, Route, Switch } from 'react-router-dom';
import StatefulAlbums from './StatefulAlbums';
import NoMatch from './NoMatch';

export default function Main() {
    return (
      <HashRouter>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
            </div>
            <div className="col-xs-10">
            <Switch>
              <Route exact path="/" component={StatefulAlbums} />
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={AllArtists} />
              <Route path="/artists/:artistId" component={SingleArtist} />
              <Route path="*" component={NoMatch} />
            </Switch>
          </div>
          <Player />
        </div>
      </HashRouter>
    );
}
