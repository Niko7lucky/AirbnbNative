import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { Actions, } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    flex : 1,
    flexDirection: 'column',
  },
});


class RoomScene extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Page RoomScene
        </Text>
      </View>
    );
  }
}

export default RoomScene;
