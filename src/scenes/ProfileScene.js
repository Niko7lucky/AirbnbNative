import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
} from 'react-native';
import { Actions, } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    paddingLeft: 20,
    paddingRight: 20,
    flex : 1,
    flexDirection: 'column',
  },
});


class ProfileScene extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={{ uri: this.props.userPhoto }}
            style={{
              width: 120,
              height: 120,
              borderWidth: 1,
              borderColor: '#FFF',
              borderRadius: 60,
            }}/>
        </View>

        <View>
          <Text>{this.props.userName}</Text>
          <Text>{this.props.userDescription}</Text>
          <Text>{this.props.userflat} </Text>
          <Text>{this.props.userfavorites} </Text>
        </View>
      </View>
    );
  }
}

export default ProfileScene;
