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
        <Scene key={'home'} title={'Aceeuil'} component={HomeScene} />
        <Scene key={'rooms'} title={'Rooms'} component={RoomsScene} />
        <Scene key={'profile'} title={'Utilisateur'} component={ProfileScene} />
      </Router>
    );
  }
}

export default App;
