/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import MapView from 'react-native-maps';

export default class App extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text>Funcionando</Text>
        <MapView 
          style={{width: 300, height: 300}}
          initialRegion = {{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

