import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Platform, PermissionsAndroid } from 'react-native';
import { connect } from 'react-redux'
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

export class Home extends Component {

  watchId = null;

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
      },
      isLoading: false,
      loadingMsg: '',
      warnHeight: new Animated.Value(0)
    }

    this.setWarning = this.setWarning.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.requestLocationPermission = this.requestLocationPermission.bind(this);
  }

  componentDidMount() {
    this.getCurrentLocation();
  }

  getCurrentLocation = async () => {
    this.setWarning(true, 'Procurando sua localização...');
    if (await this.requestLocationPermission) {
      this.watchId = Geolocation.watchPosition(
        (position) => {
          this.setWarning(false, '');
          this.setState({
            currentLocation: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.004,
              longitudeDelta: 0.004
            }
          })

        },
        (error) => {
          this.setWarning(false, '');
          alert("Erro na loc: " + error.message)
        },
        { enableHighAccuracy: true, interval: 5000, timeout: 15000, maximumAge: 10000 }
      )
    } else {
      this.setWarning(false, '');
    }
  }

  async requestLocationPermission() {
    if (Platform.OS == 'android') {
      alert("Inicio")
      try {
        const g = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Pegar localização',
            message: 'Este aplicativo precisa ter acesso a sua localização'
          }
        );

        if (g == PermissionsAndroid.RESULTS.GRANTED) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    } else {
      return true;
    }
  }

  setWarning(status, msg) {

    if (status === true && msg != '') {
      this.setState({
        isLoading: status,
        loadingMsg: msg
      });

      Animated.timing(
        this.state.warnHeight,
        {
          toValue: 35,
          duration: 300
        }
      ).start();
    } else if (status === false) {
      this.setState({
        isLoading: status,
        loadingMsg: ''
      });

      Animated.timing(
        this.state.warnHeight,
        {
          toValue: 0,
          duration: 300
        }
      ).start();
    }

  }
  /* MapView recebe duas props principaisa  regiao inicial e o style */
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.state.currentLocation}>
        </MapView>
        <Animated.View styles={[styles.warnBox, { height: this.state.warnHeight }]}>
          <Text styles={styles.warnText}>{this.state.loadingMsg}</Text>
        </Animated.View>
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
  },
  warnBox: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  warnText: {
    fontSize: 13,
    color: '#FFFFFF'
  }
})

const mapStateToProps = (state) => {
  return {
    status: state.auth.status
  };
};

const HomeConnect = connect(mapStateToProps, {})(Home);
export default HomeConnect;