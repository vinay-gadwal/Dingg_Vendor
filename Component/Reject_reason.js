import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Style'
import RadioGroup from 'react-native-radio-buttons-group';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
const GLOBAL = require('../Component/Color');

export default class App extends Component {
    state = {
        data: [
            {
                label: 'Not Available',
                color: GLOBAL.COLOR.ORANGE,
            },
            {
                label: 'Busy',
                color: GLOBAL.COLOR.ORANGE
            },
            {
                label: 'Another Appointment',
                color: GLOBAL.COLOR.ORANGE,
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
            <View style={styles.Reject_box}>
            <Text style={[styles.Big_text,styles.margin_left_5]}>Give a reason to reject</Text>
                {/* <Text style={styles.valueText}>
                    Value = {selectedButton}
                </Text> */}
                <View style={styles.reject_radio}>
                <RadioGroup  radioButtons={this.state.data} onPress={this.onPress} />
                </View>
                </View>
          <TouchableOpacity style={[styles.button,styles.Otp_button_margin]} >
          <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
      </View>
        );
    }
}

