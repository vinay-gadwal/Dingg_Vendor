import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 import {View,Text,TouchableOpacity,StyleSheet,Alert} from 'react-native'
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
        this.state = {date:"00-00"}
  }
  openDatepicker = () => this._calendar.setOpen(true);
Open_fuction=()=>{
<DatePicker 
        style={{width: 200,marginTop:"20%"}}
        mode="time"
        date={this.state.date}
        placeholder="select time"
        format={'HH:mm'}
        // minDate="2016-05-01"
        // maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{dateInput:{borderWidth: 0}}}

        ref={(c) => this._calendar = c} 
      />
}
  render(){
    return (
        <View >
      <TouchableOpacity style={{flexDirection:"row"}} onPress={this.Open_fuction}>
      <Text style={{fontSize:20,color:"black",marginLeft:"10%",marginTop:"22%"}}>CLICK</Text>
      <DatePicker 
        style={{width: 200,marginTop:"20%"}}
        mode="time"
        date={this.state.date}
        placeholder="select time"
        format={'HH:mm'}
        // minDate="2016-05-01"
        // maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{dateInput:{borderWidth: 0}}}

        onDateChange={(date) => {this.setState({date: date})}}
      />
      </TouchableOpacity>
      </View>
    )
  }
}