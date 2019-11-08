import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native';

import {makeLocationSearch} from '../../uberApi';

// import { Container } from './styles';

export default class SearchBox extends Component {

    timer = null;
    constructor(props) {
        super(props);
        this.state = {
            txt: '',
            results: []
        }

        this.txtFill = this.txtFill.bind(this);
        this.doSearch = this.doSearch.bind(this);
    }

    txtFill(text) {
        this.setState({txt:text, results: []});
        if(typeof timer != null) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(this.doSearch, 1000);
    }

    doSearch() {
        makeLocationSearch(this.state.txt)
        .then((results) => {
            alert("recebeu");this.setState({results});
        })
        .catch((error) => {
            alert("Ocorreu um erro");
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <TextInput style={styles.input} placeholder="Para onde você quer ir?" value={this.state.txt} onChangeText={this.txtFill}></TextInput>
                </View>
                {this.state.results.length > 0 &&
                    <ScrollView style={styles.results}>
                        {this.state.results.map((item) => {
                            return(
                                <Text key={item.id}>{item.label}</Text>
                            )
                        })}
                    </ScrollView>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    box: {
        width: '80%',
        height: 50,
        marginTop: 40,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#CCCCCC',
        elevation: 4,
        shadowOffset: { width: 20, height: 20 },
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowRadius: 10,

    },
    input: {
        width: '100%',
        height: '100%',
        marginBottom: 40,
        padding: 10,
        fontSize: 19
    },
    results: {
        width: '80%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#CCCCCC',
        marginBottom: 40
    }
})
