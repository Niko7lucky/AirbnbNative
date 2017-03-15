import React from 'react';

import {
  StyleSheet,
  ActivityIndicator,
  Text,
  Button,
  ListView,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Actions, } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    paddingTop: 75,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

class HomeScene extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/room?city=paris')
      .then((res) => res.json())
      .then(json => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(json.rooms),
        });
      });
  }

  renderRooms(rowData) {
    return (
      <View style={{
        marginTop: 10,
        marginBottom: 15,
        borderBottomColor: '#00989E',
        borderBottomWidth: 1,
        paddingBottom: 10,
      }}>
        <TouchableOpacity
          onPress={() => Actions.room({
            title: rowData.title,
            price:rowData.price,
            ratingValue:rowData.ratingValue,
            description:rowData.description,
            reviews:rowData.reviews,
            photoRoom:rowData.photos[0],
            userPhoto:rowData.user.account.photos[0],
            })}>
            <View>
              <Image
                source={{ uri: rowData.photos[0] }}
                style={{
                  width: 340,
                  height: 190,
                }} />
                <View>
                  <Text style={{fontWeight: 'bold'}}>{rowData.price} €</Text>
                  <Text>{rowData.title}</Text>
                  <Text style={{color: '#008489'}}>{'★'.repeat(rowData.ratingValue)}{'☆'.repeat(5-(rowData.ratingValue))}</Text>
                  <Text>{rowData.reviews} commentaires</Text>
                </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Actions.profile({
            userPhoto:rowData.user.account.photos[0],
            userName: rowData.user.account.username,
            userDescription: rowData.user.account.description,
            userflat: rowData.user.account.rooms[0],
            userfavorites: rowData.user.account.favorites[0],
            })}>
            <Image
              source={{ uri: rowData.user.account.photos[0] }}
              style={{
                width: 50,
                height: 50,
                borderWidth: 1,
                borderColor: '#FFF',
                borderRadius: 25,
              }} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    if (this.state.dataSource.getRowCount() === 0) {
      return (
        <View
          style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ListView
          showsVerticalScrollIndicator= {false}
          dataSource={this.state.dataSource}
          renderRow={this.renderRooms} />
      </View>
    );
  }
}

export default HomeScene;
