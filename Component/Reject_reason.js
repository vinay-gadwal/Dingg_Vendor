import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Style'
import RadioGroup from 'react-native-radio-buttons-group';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
                color: 'rgb(255,164,0)'
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
            <View style={[styles.box,{marginBottom:"0%",height: hp('38%'),}]}>
            <Text style={[styles.Text,{fontSize:30}]}>Give a reason to reject</Text>
                {/* <Text style={styles.valueText}>
                    Value = {selectedButton}
                </Text> */}
                <View style={{marginTop:"5%",justifyContent:"flex-start"}}>
                <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
                </View>
                </View>
                <View style={{marginBottom:"3%"}}>
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
      </View>
            </View>
        );
    }
}

