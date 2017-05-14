import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        albums: []
      };
  }

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseJson) => this.setState({ albums: responseJson }))
    .catch((error) => console.error("fetch error:", error));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
       <AlbumDetail key={album.title} album={album}/>
    );
  }

  render() {
    return (
      <View style={styles.viewStyle}>
          {this.renderAlbums()}
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }
});

export default AlbumList;
