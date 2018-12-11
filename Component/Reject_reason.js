import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Style'
import RadioGroup from 'react-native-radio-buttons-group';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"

export default class App extends Component {
    state = {
        data: [
            {
                label: 'Not Available',
                color: 'rgb(255,164,0)',
            },
            {
                label: 'Busy',
                color: 'rgb(255,164,0)'
            },
            {
                label: 'Another Appointment',
                color: 'rgb(255,164,0)',
                fontSize:RF(2)
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
            <View style={[styles.box,{paddingVertical:hp("5%"),alignItems:"flex-start",marginVertical:hp("5%")}]}>
            <Text style={[styles.Text,{fontSize: RF(3),marginLeft:wp("5%")}]}>Give a reason to reject</Text>
                {/* <Text style={styles.valueText}>
                    Value = {selectedButton}
                </Text> */}
                <View style={{marginTop:"5%",justifyContent:"flex-start",marginLeft:wp("2%"),paddingVertical:hp("2%")}}>
                <RadioGroup  radioButtons={this.state.data} onPress={this.onPress} />
                </View>
                </View>
                <View style={{marginBottom:"3%"}}>
          <TouchableOpacity style={[styles.button,{marginBottom:hp("35%")}]} >
          <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
      </View>
            </View>
        );
    }
}

