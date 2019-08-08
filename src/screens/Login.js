import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import { setEmail, setPassword } from '../actions/AuthActions'

// import { Container } from './styles';

export class Login extends Component {
    static navigationOptions ={
        header: null
    }

    constructor(props) {
        super(props);
        this.state={}
    }
  render() {
    return (
        <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
            <Text style={styles.header}>Login</Text>

            <View style={styles.fieldArea}>
                <Text style={styles.fieldTitle}>E-MAIL</Text>
                <View style={styles.fieldItemArea}>
                    <TextInput style={styles.fieldItem} value={this.props.email} />
                    <View style={styles.fieldItemStatus}>
                        {this.props.emailValid && 
                            <Image style={styles.fieldItemStatusImg} source={require('../assets/checked.png')} />
                        }
                    </View>
                </View>
            </View>

            <View style={styles.fieldArea}>
                <Text style={styles.fieldTitle}>SENHA</Text>
                <View style={styles.fieldItemArea}>
                    <TextInput style={styles.fieldItem} value={this.props.pass} />
                    <View style={styles.fieldItemStatus}>
                        {this.props.passValid && 
                            <Image style={styles.fieldItemStatusImg} source={require('../assets/checked.png')} />
                        }
                    </View>
                </View>
            </View>

        </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    header: {
        color: '#FFFFFF',
        fontSize: 30,
        marginBottom: 50
    },
    fieldTitle: {
        color: '#FFFFFF',
        fontSize: 16
    },
    fieldItem: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 17,
    },
    fieldArea: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'
    },
    fieldItemArea: {
        flexDirection: 'row',
        height: 50
    },
    fieldItemStatus: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fieldItemStatusImg: {
        width: 25,
        height: 25
    }
})

const mapStateToProps = (state) => {
  return {
      status: state.auth.status,
      email: state.auth.email,
      pass: state.auth.pass,
      emailValid: state.auth.emailValid,
      passValid: state.auth.passValid,
  }
};

const LoginConnect = connect(mapStateToProps,{setEmail, setPassword})(Login);
export default LoginConnect;
