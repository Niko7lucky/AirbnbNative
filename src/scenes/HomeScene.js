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
  TouchableHighlight,
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
      .then(rooms => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(rooms.rooms),
        });
      });
  }

  renderRooms(rowData) {
    return (
      <View style={{
        marginTop: 20,
        marginBottom: 20,
        marginBorderBottomWidth: 1,
        marginBorderBottomColor: '#008489',
      }}>
        <TouchableHighlight
          onPress={() => Actions.rooms()}>
            <View>
              <Image
                source={{ uri: rowData.photos[0] }}
                style={{
                  width: 340,
                  height: 190,
                }} />
              <Text style={{fontWeight: 'bold'}}>{rowData.price} €</Text>
              <Text>{rowData.title}</Text>
              <Text style={{color: '#008489'}}>{'★'.repeat(rowData.ratingValue)}{'☆'.repeat(5-(rowData.ratingValue))}</Text>
              <Text>{rowData.reviews} commentaires</Text>
            </View>
        </TouchableHighlight>
        <Image
          source={{ uri: rowData.user.account.photos[0] }}
          style={{
            width: 50,
            height: 50,
            borderWidth: 1,
            borderColor: '#FFF',
            borderRadius: 25,
          }} />
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
