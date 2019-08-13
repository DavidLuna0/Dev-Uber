import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

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

  render() {
    return(
        <View>
            <Text>Tela Home</Text>
        </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.auth.status
  };
};

const HomeConnect = connect(mapStateToProps, {})(Home);
export default HomeConnect;