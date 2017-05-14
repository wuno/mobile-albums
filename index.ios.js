import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class albums extends Component {
  render() {
    return (
      <View>
        <Header heading="Albums" />
        <AlbumList  />
      </View>
    );
  }
}


AppRegistry.registerComponent('albums', () => albums);
