import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Image, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { setEmail, setPassword } from '../actions/AuthActions'

// import { Container } from './styles';

export class Login extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let buttonOpacity = 0.2;
        if (this.props.emailValid && this.props.passValid) {
            buttonOpacity = 1;
        }
        return (
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
                <KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding" enabled>
                    <Text style={styles.header}>Login</Text>

                    <View style={styles.fieldArea}>
                        <Text style={styles.fieldTitle}>E-MAIL </Text>
                        <View style={styles.fieldItemArea}>
                            <TextInput style={styles.fieldItem} value={this.props.email} onChangeText={(text) => this.props.setEmail(text)} />
                            <View style={styles.fieldItemStatus}>
                                {this.props.emailValid &&
                                    <Image style={styles.fieldItemStatusImg} source={require('../assets/checked.png')} />
                                }
                            </View>
                        </View>
                    </View>

                    <View style={styles.fieldArea}>
                        <Text style={styles.fieldTitle}>SENHA </Text>
                        <View style={styles.fieldItemArea}>
                            <TextInput style={styles.fieldItem} value={this.props.pass} onChangeText={(text) => this.props.setPassword(text)} />
                            <View style={styles.fieldItemStatus}>
                                {this.props.passValid &&
                                    <Image style={styles.fieldItemStatusImg} source={require('../assets/checked.png')} />
                                }
                            </View>
                        </View>
                    </View>

                    <View style={styles.bArea}>
                        <TouchableHighlight underlayColor={null} style={styles.bText} onPress={() => {}}>
                            <Text style={styles.bTextInt}>Esqueceu a senha?</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor={null} style={styles.bText} onPress={() => {}}>
                            <Text style={styles.bTextInt}>Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight underlayColor={null} style={[styles.button, { opacity: buttonOpacity }]} onPress={() => { }}>
                        <Text style={styles.buttonText}>></Text>
                    </TouchableHighlight>

                </KeyboardAvoidingView>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    keyboardContainer: {
        flex: 1
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
    },
    button: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#0A5360",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 35
    },
    buttonImg: {
        width: 32,
        height: 32
    },
    bArea: {
        flexDirection: "row"
    },
    bText: {
        flex: 1,
        height: 36,
        justifyContent: "center",
        alignItems: "center"
    },
    bTextInt: {
        color: "#FFFFFF",
        fontSize: 15
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

const LoginConnect = connect(mapStateToProps, { setEmail, setPassword })(Login);
export default LoginConnect;
