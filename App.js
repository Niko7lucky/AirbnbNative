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
import RoomsScene from './src/scenes/RoomsScene';
import ProfileScene from './src/scenes/ProfileScene';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene
          navigationBarStyle={{ backgroundColor: '#008489', }}
          titleStyle={{color: 'white'}}
          key={'home'}
          title={'Airbnb'}
          component={HomeScene} />
        <Scene
          key={'rooms'}
          hideNavBar={true}
          component={RoomsScene} />
        <Scene
          key={'profile'}
          hideNavBar={true}
          component={ProfileScene} />
      </Router>
    );
  }
}

export default App;
