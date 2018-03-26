'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const fakeAlbums = [
  {
    name: 'Abbey Road',
    id: 1,
    imageUrl: 'http://fillmurray.com/300/300',
    songs: [
      {
        id: 1,
        name: 'Romeo & Juliette',
        artists: [
          { name: 'Bill' }
        ],
        genre: 'Funk',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
      },
      {
        id: 2,
        name: 'White Rabbit',
        artists: [
          { name: 'Bill' },
          { name: 'Alice' }
        ],
        genre: 'Fantasy',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
      },
      {
        id: 3,
        name: 'Lucy in the Sky with Diamonds',
        artists: [
          { name: 'Bob' }
        ],
        genre: 'Space',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
      }
    ]
  },
  {
    name: 'Yellow Submarine',
    id: 2,
    imageUrl: 'http://fillmurray.com/300/300',
    songs: [
      {
        id: 4,
        name: 'London Calling',
        artists: [
          { name: 'Bill' }
        ],
        genre: 'Punk',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
      }
    ]
  }
];

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }



  render() {
    console.log('this props ', this.props.album);
     return (<div className="col-xs-4">
            <a onClick={() => this.props.handleClick(this.props.album.id)}
              className="thumbnail" href="#">
              <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMoneIMAGE&w=300&h=300" />
              <div className="caption">
                <h5>
                  <span>{this.props.name}</span>
                </h5>
                <small>{this.props.songLength}</small>
              </div>
            </a>
          </div>
    )
  }
}

const albumCreator = (props) => {
  return (
    <div className="col-xs-10">
      <h3>Albums</h3>
      <div className="row">
        {props.albums.map(album =>
          <Albums key={album.id} album={album} name={album.name} songLength={album.songs.length} handleClick={props.handleClick} />
        )}
      </div>
    </div>
  );
};

module.exports = albumCreator;
