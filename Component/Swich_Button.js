import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
 
export default class DateTimePickerTester extends Component {
  state = {
    isDateTimePickerVisible: false,
  };
 
 showStartDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
showEndDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
hideStartDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
hideEndDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
handleStartDatePicked = (date) => {
  console.log('A date has been picked: ', date);
  this.hideStartDateTimePicker();
};
 
handleEndDatePicked = (date) => {
  console.log('A date has been picked: ', date);
  this.hideEndDateTimePicker();
};
 
  render () {
    return (
      <View style={{ flex: 1 ,marginTop:"30%"}}>
        <TouchableOpacity onPress={this.showEndDateTimePicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
        is24Hour={true}
        date={false}
        timeZoneOffsetInMinutes={true}
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
 
}