import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions, } from 'react-native-router-flux';
import Map from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    paddingLeft: 20,
    paddingRight: 20,
  },
});


class RoomScene extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={{ uri: this.props.photoRoom }}
            style={{
              height: 200,
              width: '100%',
              marginTop: 20,
            }}/>
        </View>

        <View>
          <Text>{this.props.title}</Text>
          <Text>{this.props.price} €</Text>
          <Text
            style={{color: '#008489'}}>
              {'★'.repeat(this.props.ratingValue)}{'☆'.repeat(5-(this.props.ratingValue))}
          </Text>
          <Text>{this.props.reviews} commentaires</Text>
          <TouchableOpacity
            onPress={() => Actions.profile({
              })}>
              <Image
                source={{ uri: this.props.userPhoto }}
                style={{
                  width: 50,
                  height: 50,
                  borderWidth: 1,
                  borderColor: '#FFF',
                  borderRadius: 25,
                }}/>
          </TouchableOpacity>
          <Text>{this.props.description}</Text>
        </View>
        <Map style={{
          height: 200,
          width:'100%',
        }}>
          <Map.Marker
            coordinate={{
              latitude: 48.8564449,
              longitude: 2.4002913,
            }}
            title={'Le Reacteur'}
            description={'React Native training institute'} />
        </Map>
      </View>
    );
  }
}

export default RoomScene;
