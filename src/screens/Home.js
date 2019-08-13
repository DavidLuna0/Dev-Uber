import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import MapView from 'react-native-maps';

export class Home extends Component {

  static navigationOptions = {
    title: 'DevsUber 1.0',
    headerStyle: {
      backgroundColor: '#0A5360'
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        latitude: -23.7,
        longitude: -46.8,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004,
      }
    }
  }
/* MapView recebe duas props principaisa  regiao inicial e o style */
  render() {
    return(
        <View style={styles.container}>
          
            <MapView style={styles.map} initialRegion={this.state.currentLocation}>

            </MapView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  }
})

const mapStateToProps = (state) => {
  return {
    status: state.auth.status
  };
};

const HomeConnect = connect(mapStateToProps, {})(Home);
export default HomeConnect;