import React, { Component } from "react";
import DatePicker from 'react-native-datepicker'
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from '../Component/Style'
import RF from "react-native-responsive-fontsize"
import {TextInputLayout} from 'rn-textinputlayout';
import { Dropdown } from 'react-native-material-dropdown';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
      Offer_name: "",services:"",
      Offer_percenatge: '',Start_date:"2017-05-15",end_date: "2017-05-15",
    };  
  }

  Function_save_global(){
      GLOBAL.Offer_name=this.state.Offer_name
      GLOBAL.Offer_percentage=this.state.Offer_percenatge
      GLOBAL.Start_date=this.state.Start_date
      GLOBAL.end_date=this.state.end_date
      GLOBAL.sevice=this.state.services
  }
  render() {
    return (
    <View  style={styles.container}>
            
        <View style={[styles.box,{marginBottom:"0%",height: hp('50%'),marginTop:hp("5%")}]}>
        <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
        <TextInput
            value={this.state.Offer_name}
            onChangeText={Offer_name => this.setState({ Offer_name })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input,{height:hp("3")}]}
            placeholder="Offer Name"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
          />
          </TextInputLayout>
          
          <View style={{width:wp('70%'),height:hp("10%"),marginVertical:"0%"}}>
                      <Dropdown
                          data={data_Services} itemColor="rgb(255,163,0)"  selectedItemColor="grey"
                          value={'Service Name'}
                          onChangeText={() =>{this.setState({services:data_Services})}}
                          dropdownPosition={0}
                          style={{ itemTextStyle:{ fontFamily:'Muli-Bold',},
                            width: wp('200%'),fontSize: RF(2.5),marginBottom:"10%",
                            // position: 'absolute',
                            top: 0,borderColor:"rgb(255,163,0)",placeholderTextColor:"rgb(222,222,222)"
                        }}
                      />
            </View> 
            <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:hp("3%")}}>
            <Text style={[styles.text,{marginLeft:wp("3%"),marginRight:wp("15%")}]}>Satart Date</Text> 
            <Text style={[styles.text,{marginLeft:wp("0%"),marginRight:wp("23%")}]}>Valid Till</Text> 
            </View>
            <View style={{flexDirection:"row"}}>
            <DatePicker
                        style={{width: 150,marginTop:hp("2%")}}
                        date={this.state.Start_date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-05-2019"
                        maxDate="01-06-2016"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(Start_date) => {this.setState({Start_date: Start_date})}}
            />
           <DatePicker
                        style={{width: 150,marginTop:hp("2%")}}
                        date={this.state.end_date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate="01-05-2019"
                        maxDate="01-06-2016"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(end_date) => {this.setState({end_date: end_date})}}
            />
            </View>
            <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
        <TextInput
            value={this.state.Offer_percenatge}
            onChangeText={Offer_percenatge => this.setState({ Offer_percenatge })}
            ref={input => (this.passwordCInput = input)}
            style={[styles.input,{height:hp("3")}]}
            placeholder="Offer Percentage"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="done"
            keyboardType="numeric"
          />
          </TextInputLayout>
            </View>     
        <View style={{marginBottom:"20%"}}>
            <TouchableOpacity style={styles.button} onPress={() => {this.Function_save_global();this.props.navigation.navigate('ViewOffer')}}>
            <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>    
</View>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
