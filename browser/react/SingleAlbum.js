'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class SingleAlbum extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('single album selected', this.props.selectedAlbum);
     return (
      <div className="album col-xs-10">
        <div>
          <h3>{this.props.selectedAlbum.name}</h3>
          <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=IshouldBEanIMAGE&w=300&h=300" className="img-thumbnail" />
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Artists</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button className="btn btn-default btn-xs">
                  <span className="glyphicon glyphicon-play"></span>
                </button>
              </td>
              <td>{this.props.selectedAlbum.songs[0].name}</td>
              <td>{this.props.selectedAlbum.artists[0].name}</td>
              <td>{this.props.selectedAlbum.songs[0].genre}</td>
            </tr>
            <tr>
              <td>
                <button className="btn btn-default btn-xs">
                  <span className="glyphicon glyphicon-play"></span>
                </button>
              </td>
               <td>{this.props.selectedAlbum.songs[1].name}</td>
              <td>{this.props.selectedAlbum.artists[0].name}</td>
              <td>{this.props.selectedAlbum.songs[1].genre}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


module.exports = SingleAlbum;
