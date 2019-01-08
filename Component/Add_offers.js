import React, { Component } from "react";
import DatePicker from 'react-native-datepicker'
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  Text,
  View,Alert,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from '../Component/Style'
import RF from "react-native-responsive-fontsize"
import {TextInputLayout} from 'rn-textinputlayout';
import { Dropdown } from 'react-native-material-dropdown';
import RadioGroup from 'react-native-radio-buttons-group';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ResponsiveImage from 'react-native-responsive-image'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const GLOBAL = require('../Component/Color');
const data_Services = [
  {
    value: 'Face Cleanup',
  },
  {
    value: 'Hair Cut',
  },
  {
    value: 'Shaving',
  },
  {
    value: 'Shampoo',
  }
];

export default class Login extends Component {
  constructor(props)
   {
    super(props);
    this.state = {
      Offer_name: "",
      services:"",
      Offer_percenatge: '',
      Start_date:"2017-05-15",
      end_date: "2017-05-15", isDateTimePickerVisible: false,time:"",
      data: [ 
        {
            label: 'New',
            value:this.phone(),
            color: GLOBAL.COLOR.ORANGE,
            fontFamily:"Muli-Bold",
            size: 18,
        },
        {
            label: 'Existing',
            value:this.phone(),
            color: GLOBAL.COLOR.ORANGE,
            fontFamily:"Muli-Bold",
            size: 18,
        }, 
        {
          label: 'Frequent',
          value:this.phone(),
          color: GLOBAL.COLOR.ORANGE,
          fontFamily:"Muli-Bold",
          size: 18,
        }
          ],
    };  
  }
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  phone(){
  }
  onPress = data =>{this.setState({ data })}

  Function_save_global(){
      GLOBAL.Offer_name=this.state.Offer_name
      GLOBAL.Offer_percentage=this.state.Offer_percenatge
      GLOBAL.Start_date=this.state.Start_date
      GLOBAL.end_date=this.state.end_date
      GLOBAL.sevice=this.state.services
  }
  render() {
    return (
      <KeyboardAwareScrollView  contentContainerStyle={styles.container}
               keyboardShouldPersistTaps='handled'>            
        <View style={[styles.box,{marginTop:hp("4%")}]}>
        <TextInputLayout focusColor={GLOBAL.COLOR.GRAY} labelFontSize={0.1}>
        <TextInput
            value={this.state.Offer_name}
            onChangeText={Offer_name => this.setState({ Offer_name })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input,{width:wp("75%")}]}
            placeholder="Offer Name"
            returnKeyType="next"
          />
          </TextInputLayout>
          
          <View style={[styles.DropDown_view,{ width:wp('75%')}]}>
                        <Dropdown
                          data={data_Services} itemColor={GLOBAL.COLOR.ORANGE}  selectedItemColor="grey"
                          value={'Service Name'}
                          onChangeText={() =>{this.setState({services:data_Services})}}
                          dropdownPosition={0}
                          textColor="rgb(204,204,204)"
                        
                      />
            </View> 
            <View style={styles.Row_divider}>
            <Text style={[styles.text,{marginLeft:wp("0%"),marginRight:wp("17%")}]}>Start Date</Text> 
            <Text style={[styles.text,{marginRight:wp("20%"),marginLeft:wp("5%")}]}>Valid Till</Text> 
            </View>
            <View style={[styles.Row_divider,{marginRight:wp("14%")}]}>
            <View style={{flexDirection:"column",marginLeft:wp("3%")}}>
            <View style={{marginLeft:wp("1%")}}>
            <DatePicker
                        style={styles.Date_picker}
                        date={this.state.Start_date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={{dateInput:{borderWidth: 0,borderHeight:0},marginLeft:wp("2%")}}
                        onDateChange={(Start_date) => {this.setState({Start_date: Start_date})}}
            />
            </View>
            <ResponsiveImage style={{marginLeft:wp("10%")}} source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.size_120} initHeight={GLOBAL.COLOR._height}/>
            </View>
            <View style={{flexDirection:"column"}}>
            <DatePicker
                        style={styles.Date_picker}
                        date={this.state.end_date}
                        mode="date"
                        showIcon={false}
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}
                        onDateChange={(end_date) => {this.setState({end_date: end_date})}}
            />
             <ResponsiveImage style={{marginLeft:wp("7%")}} source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.size_120} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View>
            {/* <View >
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View> */}
            <TextInputLayout focusColor={GLOBAL.COLOR.GRAY} labelFontSize={0.1}>
        <TextInput
            value={this.state.Offer_percenatge}
            onChangeText={Offer_percenatge => this.setState({ Offer_percenatge })}
            ref={input => (this.passwordCInput = input)}
            style={[styles.input,{height:hp("5"),width:wp("75%")}]}
            placeholder="Offer Percentage"
            placeholderTextColor={GLOBAL.COLOR.GRAY}
            returnKeyType="done"
            keyboardType="numeric"
          />
          </TextInputLayout>
          <Text></Text>
          <RadioGroup style={color="red"} radioButtons={this.state.data} onPress={this.onPress}  flexDirection='row' />
            </View>     
            <TouchableOpacity style={[styles.button,{marginBottom:hp("17%")}]} onPress={() => {this.Function_save_global()}}>
            <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
</KeyboardAwareScrollView>
    );}}