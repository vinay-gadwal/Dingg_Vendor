import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import styles from '../Component/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        <View style={[styles.box,{marginBottom:"0%",height: hp('45%'),marginTop:hp("5%")}]}>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={minDate}
              maxDate={maxDate}
              todayBackgroundColor="rgb(255,164,0)"
              selectedDayColor="rgb(255,164,0)"
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
        <View style={{marginBottom:"5%"}}>
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
      </View>   
      </View>
    );
  }
}
 

