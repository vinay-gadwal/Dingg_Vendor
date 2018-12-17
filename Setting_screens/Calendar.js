import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import styles from '../Component/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const GLOBAL = require('../Component/Color');

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
 
  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }
 
  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2020, 6, 3);
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
 
    return (
      <View style={styles.container}>
        <View style={[styles.box]}>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={minDate}
              maxDate={maxDate}
              todayBackgroundColor={GLOBAL.COLOR.ORANGE}
              selectedDayColor={GLOBAL.COLOR.ORANGE}
              selectedDayTextColor="#FFFFFF"
              onDateChange={this.onDateChange}
              width="350"
              enableSwipe="true"
            />
        </View>
        {/* <View>
          <Text style={styles.text}>SELECTED START DATE:{ startDate }</Text>
          <Text style={styles.text}>SELECTED END DATE:{ endDate }</Text>
        </View> */}
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
 

