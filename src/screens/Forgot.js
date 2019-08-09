import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Image, KeyboardAvoidingView, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { setName, setEmail, setPassword, doSignUp } from '../actions/AuthActions'

// import { Container } from './styles';

export class Forgot extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#0F6675'
        },
        headerTintColor: '#FFFFFF'
    }

    constructor(props) {
        super(props);
        this.state = {}

        this.forgotAction = this.forgotAction.bind(this);
        this.verifyStatus = this.verifyStatus.bind(this);
    }

    forgotAction() {
        if (this.props.emailValid) {
            this.props.doForgot(this.props.email);
        }
    }

    componentDidUpdate() {
        this.verifyStatus();
    }

    verifyStatus() {
        if(this.props.status === 1) {
            alert("Manda pra HOME")
        }
    }

    render() {
        let buttonOpacity = 0.2;
        if (this.props.emailValid) {
            buttonOpacity = 1;
        }
        return (
            <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
                <ScrollView style={styles.scrollViewStyle}>

                    <KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding" enabled>
                        <Text style={styles.header}>Esqueceu a senha?</Text>

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

                    </KeyboardAvoidingView>
                </ScrollView>

                <TouchableHighlight underlayColor={null} style={[styles.button, { opacity: buttonOpacity }]} onPress={this.signUpAction}>
                    <Text style={styles.buttonText}>></Text>
                </TouchableHighlight>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    scrollViewStyle: {
        flex: 1
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
        bottom: 20,
        right: 20,
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
        emailValid: state.auth.emailValid,
    }
};

const ForgotConnect = connect(mapStateToProps, { setName, setEmail, setPassword, doSignUp })(Forgot);
export default ForgotConnect;
