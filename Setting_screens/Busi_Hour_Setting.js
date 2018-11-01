import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from '../Component/Style'
import TimePicker from 'react-native-simple-time-picker';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SwitchButton from 'switch-button-react-native';


export default class Login extends Component {
  constructor(props)
   {
    super(props);
    this.state = {
      username: "",
      password: '',hidePassword:"true"
    };  
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    const { selectedHours, selectedMinutes } = this.state;
    return (
    <View  style={styles.container}>
            
        <View style={[styles.box,{marginBottom:"0%",height: hp('73%'),marginTop:hp("10%")}]}>     
        <Text style={styles.text}>Add Day and Time</Text>
        <View style={{flexDirection:"column"}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:hp("2%")}}>
        <View style={{marginLeft:"0%",marginRight:"15%"}}>
        <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'MON'                       // optional: second text in switch button --- default OFF
                switchWidth = {90}                 // optional: switch width --- default 44
                switchHeight = {30}                 // optional: switch height --- default 100
                switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                switchBorderRadius = {100}          // optional: switch border radius --- default oval
                switchSpeedChange = {500}           // optional: button change speed --- default 100
                switchBorderColor = 'white'       // optional: switch border color --- default #d4d4d4
                switchBackgroundColor = 'rgb(255,164,0)'      // optional: switch background color --- default #fff
                btnBorderColor = 'white'          // optional: button border color --- default #00a4b9
                btnBackgroundColor = 'white'      // optional: button background color --- default #00bcd4
                fontColor = 'white'               // optional: text font color --- default #b1b1b1
                activeFontColor = '#fff'            // optional: active font color --- default #fff
            />
            </View>
            <Text style={[styles.text,{marginRight:wp("10%")}]}> 9:00 </Text>
            <Text style={[styles.text,{marginRight:wp("10%")}]}>to</Text>
            <Text style={[styles.text,{marginRight:wp("5%")}]}> 19:00 </Text>
        </View> 

         <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:hp("2%")}}>
        <View style={{marginLeft:"0%",marginRight:"15%"}}>
        <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'TUE'                       // optional: second text in switch button --- default OFF
                switchWidth = {90}                 // optional: switch width --- default 44
                switchHeight = {30}                 // optional: switch height --- default 100
                switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                switchBorderRadius = {100}          // optional: switch border radius --- default oval
                switchSpeedChange = {500}           // optional: button change speed --- default 100
                switchBorderColor = 'white'       // optional: switch border color --- default #d4d4d4
                switchBackgroundColor = 'rgb(255,164,0)'      // optional: switch background color --- default #fff
                btnBorderColor = 'white'          // optional: button border color --- default #00a4b9
                btnBackgroundColor = 'white'      // optional: button background color --- default #00bcd4
                fontColor = 'white'               // optional: text font color --- default #b1b1b1
                activeFontColor = '#fff'            // optional: active font color --- default #fff
            />
            </View>
            <Text style={[styles.text,{marginRight:wp("10%")}]}> 9:00 </Text>
            <Text style={[styles.text,{marginRight:wp("10%")}]}>to</Text>
            <Text style={[styles.text,{marginRight:wp("5%")}]}> 19:00 </Text>
        </View> 

         <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:hp("2%")}}>
        <View style={{marginLeft:"0%",marginRight:"15%"}}>
        <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'WED'                       // optional: second text in switch button --- default OFF
                switchWidth = {90}                 // optional: switch width --- default 44
                switchHeight = {30}                 // optional: switch height --- default 100
                switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                switchBorderRadius = {100}          // optional: switch border radius --- default oval
                switchSpeedChange = {500}           // optional: button change speed --- default 100
                switchBorderColor = 'white'       // optional: switch border color --- default #d4d4d4
                switchBackgroundColor = 'rgb(255,164,0)'      // optional: switch background color --- default #fff
                btnBorderColor = 'white'          // optional: button border color --- default #00a4b9
                btnBackgroundColor = 'white'      // optional: button background color --- default #00bcd4
                fontColor = 'white'               // optional: text font color --- default #b1b1b1
                activeFontColor = '#fff'            // optional: active font color --- default #fff
            />
            </View>
            <Text style={[styles.text,{marginRight:wp("10%")}]}> 9:00 </Text>
            <Text style={[styles.text,{marginRight:wp("10%")}]}>to</Text>
            <Text style={[styles.text,{marginRight:wp("5%")}]}> 19:00 </Text>
        </View> 

         <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:hp("2%")}}>
        <View style={{marginLeft:"0%",marginRight:"15%"}}>
        <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'THU'                       // optional: second text in switch button --- default OFF
                switchWidth = {90}                 // optional: switch width --- default 44
                switchHeight = {30}                 // optional: switch height --- default 100
                switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                switchBorderRadius = {100}          // optional: switch border radius --- default oval
                switchSpeedChange = {500}           // optional: button change speed --- default 100
                switchBorderColor = 'white'       // optional: switch border color --- default #d4d4d4
                switchBackgroundColor = 'rgb(255,164,0)'      // optional: switch background color --- default #fff
                btnBorderColor = 'white'          // optional: button border color --- default #00a4b9
                btnBackgroundColor = 'white'      // optional: button background color --- default #00bcd4
                fontColor = 'white'               // optional: text font color --- default #b1b1b1
                activeFontColor = '#fff'            // optional: active font color --- default #fff
            />
            </View>
            <Text style={[styles.text,{marginRight:wp("10%")}]}> 9:00 </Text>
            <Text style={[styles.text,{marginRight:wp("10%")}]}>to</Text>
            <Text style={[styles.text,{marginRight:wp("5%")}]}> 19:00 </Text>
        </View> 

         <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:hp("2%")}}>
        <View style={{marginLeft:"0%",marginRight:"15%"}}>
        <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'FRI'                       // optional: second text in switch button --- default OFF
                switchWidth = {90}                 // optional: switch width --- default 44
                switchHeight = {30}                 // optional: switch height --- default 100
                switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                switchBorderRadius = {100}          // optional: switch border radius --- default oval
                switchSpeedChange = {500}           // optional: button change speed --- default 100
                switchBorderColor = 'white'       // optional: switch border color --- default #d4d4d4
                switchBackgroundColor = 'rgb(255,164,0)'      // optional: switch background color --- default #fff
                btnBorderColor = 'white'          // optional: button border color --- default #00a4b9
                btnBackgroundColor = 'white'      // optional: button background color --- default #00bcd4
                fontColor = 'white'               // optional: text font color --- default #b1b1b1
                activeFontColor = '#fff'            // optional: active font color --- default #fff
            />
            </View>
            <Text style={[styles.text,{marginRight:wp("10%")}]}> 9:00 </Text>
            <Text style={[styles.text,{marginRight:wp("10%")}]}>to</Text>
            <Text style={[styles.text,{marginRight:wp("5%")}]}> 19:00 </Text>
        </View> 

         <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:hp("2%")}}>
        <View style={{marginLeft:"0%",marginRight:"15%"}}>
        <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'SAT'                       // optional: second text in switch button --- default OFF
                switchWidth = {90}                 // optional: switch width --- default 44
                switchHeight = {30}                 // optional: switch height --- default 100
                switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                switchBorderRadius = {100}          // optional: switch border radius --- default oval
                switchSpeedChange = {500}           // optional: button change speed --- default 100
                switchBorderColor = 'white'       // optional: switch border color --- default #d4d4d4
                switchBackgroundColor = 'rgb(255,164,0)'      // optional: switch background color --- default #fff
                btnBorderColor = 'white'          // optional: button border color --- default #00a4b9
                btnBackgroundColor = 'white'      // optional: button background color --- default #00bcd4
                fontColor = 'white'               // optional: text font color --- default #b1b1b1
                activeFontColor = '#fff'            // optional: active font color --- default #fff
            />
            </View>
            <Text style={[styles.text,{marginRight:wp("10%")}]}> 9:00 </Text>
            <Text style={[styles.text,{marginRight:wp("10%")}]}>to</Text>
            <Text style={[styles.text,{marginRight:wp("5%")}]}> 19:00 </Text>
        </View> 

         <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:hp("2%")}}>
        <View style={{marginLeft:"0%",marginRight:"15%"}}>
        <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'SUN'                       // optional: second text in switch button --- default OFF
                switchWidth = {90}                 // optional: switch width --- default 44
                switchHeight = {30}                 // optional: switch height --- default 100
                switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                switchBorderRadius = {100}          // optional: switch border radius --- default oval
                switchSpeedChange = {500}           // optional: button change speed --- default 100
                switchBorderColor = 'white'       // optional: switch border color --- default #d4d4d4
                switchBackgroundColor = 'rgb(255,164,0)'      // optional: switch background color --- default #fff
                btnBorderColor = 'white'          // optional: button border color --- default #00a4b9
                btnBackgroundColor = 'white'      // optional: button background color --- default #00bcd4
                fontColor = 'white'               // optional: text font color --- default #b1b1b1
                activeFontColor = '#fff'            // optional: active font color --- default #fff
            />
            </View>
            <Text style={[styles.text,{marginRight:wp("10%")}]}> 9:00 </Text>
            <Text style={[styles.text,{marginRight:wp("10%")}]}>to</Text>
            <Text style={[styles.text,{marginRight:wp("5%")}]}> 19:00 </Text>
        </View> 
        <View style={{marginBottom:"3%"}}>
          <TouchableOpacity style={[styles.button,{backgroundColor:"white",shadowColor: 'grey',marginHorizontal:wp("25%")}]} >
          <Text style={[styles.buttonText,{color:"rgb(255,164,0)", shadowColor: 'white',}]}>Set up holidays</Text>
          </TouchableOpacity>
      </View>
        
        </View> 
      </View>   
      
      <View style={{marginTop:"5%"}}>
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
      </View>    
</View>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
