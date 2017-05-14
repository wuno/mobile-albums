import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Text style={styles.textStyle}>{this.props.album.title}</Text>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create( {
  textStyle: {
    fontSize: 20
  }
});

export default AlbumDetail;
