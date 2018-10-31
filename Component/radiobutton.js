import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import RadioGroup from 'react-native-radio-buttons-group';

export default class App extends Component {
    state = {
        data: [
            {
                label: 'Default',
                value:'test'
            },
            {
                label: 'Value',
                value: "I'm not same as label",
            },
           
        ],
    };

    // update state
    onPress = data => this.setState({ data });

    render() {
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        return (
            <View style={styles.container}>
                <Text style={styles.valueText}>
                   {selectedButton}
                </Text>
                <RadioGroup radioButtons={this.state.data} onPress={this.onPress}  flexDirection='row' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    valueText: {
        fontSize: 18, 
        marginBottom: 50,
    },
});