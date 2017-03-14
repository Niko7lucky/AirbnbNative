import React from 'react';
import {
 StyleSheet,
 Text,
 Button,
 View
} from 'react-native';
import {
 Actions,
} from 'react-native-router-flux';

const styles = StyleSheet.create({
 container: {
   paddingTop: 70,
   flex : 1,
   backgroundColor: '#FF5A5F',
 },
 h1: {
   fontSize: 20,
   color: 'white',
   textAlign: 'center',
 }
});


class ProfileScene extends React.Component {
 render() {
   return (
     <View style={styles.container}>
       <Text style={styles.h1}>
         Page ProfileScene
       </Text>
       <Text>
         Hello {this.props.name}!
       </Text>
     </View>
   );
 }
}

export default ProfileScene;
