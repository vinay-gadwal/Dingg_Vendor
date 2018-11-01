import React, { Component } from 'react'; 
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'; 
import SwitchButton from 'switch-button-react-native';
import TimePicker from 'react-native-simple-time-picker';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class app extends Component{
constructor () {
    super();

    this.state = {
      activeSwitch: 1,isDateTimePickerVisible: false,
    };
}
_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

_handleDatePicked = (date) => {
  console.log('A date has been picked: ', date);
  this._hideDateTimePicker();
};


render () {
    const { selectedHours, selectedMinutes } = this.state;

    return (

        <View style={{marginHorizontal:"30%",marginVertical:"30%"}}>
            <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'MON'                       // optional: second text in switch button --- default OFF
                switchWidth = {70}                 // optional: switch width --- default 44
                switchHeight = {30}                 // optional: switch height --- default 100
                switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                switchBorderRadius = {100}          // optional: switch border radius --- default oval
                switchSpeedChange = {500}           // optional: button change speed --- default 100
                switchBorderColor = '#d4d4d4'       // optional: switch border color --- default #d4d4d4
                switchBackgroundColor = '#fff'      // optional: switch background color --- default #fff
                btnBorderColor = '#00a4b9'          // optional: button border color --- default #00a4b9
                btnBackgroundColor = '#00bcd4'      // optional: button background color --- default #00bcd4
                fontColor = '#b1b1b1'               // optional: text font color --- default #b1b1b1
                activeFontColor = '#fff'            // optional: active font color --- default #fff
            />
            
            { this.state.activeSwitch === 1 ? console.log('view1') : console.log('view2') }
            <Text>{selectedHours}:{selectedMinutes}</Text>
        <TimePicker
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
        />
         <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        </View>

    );
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });