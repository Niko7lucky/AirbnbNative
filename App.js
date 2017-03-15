import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

import HomeScene from './src/scenes/HomeScene';
import RoomScene from './src/scenes/RoomScene';
import ProfileScene from './src/scenes/ProfileScene';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene
          navigationBarStyle={{ backgroundColor: '#008489', }}
          titleStyle={{color: 'white', fontWeight:'bold'}}
          key={'home'}
          title={'Airbnb'}
          component={HomeScene} />
        <Scene
          navigationBarStyle={{ backgroundColor: '#008489', }}
          titleStyle={{color: 'white', fontWeight:'bold'}}
          key={'room'}
          title={'Room'}
          component={RoomScene} />
        <Scene
          navigationBarStyle={{ backgroundColor: '#008489', }}
          titleStyle={{color: 'white', fontWeight:'bold'}}
          key={'profile'}
          title={'Profile'}
          component={ProfileScene} />
      </Router>
    );
  }
}

export default App;
