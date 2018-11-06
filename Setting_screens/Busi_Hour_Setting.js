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
import { Dropdown } from 'react-native-material-dropdown';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SwitchButton from 'switch-button-react-native';
const data_Services = [
    {
      value: '01',
    },
    {
      value: '02',
    },
    {
      value: '03',
    },
    {
      value: '04',
    }
  ];

export default class Business extends Component {
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
            
        <View style={[styles.box,{marginBottom:"0%",height: hp('67%'),marginTop:hp("0%")}]}>     
        <Text style={[styles.text,{fontSize:RF(3.2)}]}>Add Day and Time</Text>
        <View style={{flexDirection:"column"}}>
        <View style={styles.Business_hour}>
        <View style={{marginLeft:"0%",marginRight:"15%"}}>
        <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'MON'                       // optional: second text in switch button --- default OFF
                switchWidth = {70}                 // optional: switch width --- default 44
                switchHeight = {25}                 // optional: switch height --- default 100
                switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                switchBorderRadius = {50}          // optional: switch border radius --- default oval
                switchSpeedChange = {500}           // optional: button change speed --- default 100
                switchBorderColor = 'white'       // optional: switch border color --- default #d4d4d4
                switchBackgroundColor = 'rgb(255,164,0)'      // optional: switch background color --- default #fff
                btnBorderColor = 'white'          // optional: button border color --- default #00a4b9
                btnBackgroundColor = 'white'      // optional: button background color --- default #00bcd4
                fontColor = 'white'               // optional: text font color --- default #b1b1b1
                activeFontColor = '#fff'            // optional: active font color --- default #fff
            />
            </View>
            {/* <Dropdown
                          data={data_Services} itemColor="rgb(255,163,0)"  selectedItemColor="black"
                          value={'01'}
                          dropdownPosition={0}
                          style={{ itemTextStyle:{ fontFamily:'Muli-Bold',},
                            width: wp('5%'),fontSize: RF(2.5),
                            // position: 'absolute',
                            borderColor:"rgb(255,163,0)",placeholderTextColor:"black"
                        }}
                      />             */}
                                  <Text style={[styles.text,{marginRight:wp("10%")}]}> 9:00 </Text>
            <Text style={[styles.text,{marginRight:wp("10%")}]}>to</Text>
            <Text style={[styles.text,{marginRight:wp("5%")}]}> 19:00 </Text>
        </View> 

        <View style={styles.Business_hour}>
        <View style={{marginLeft:"0%",marginRight:"15%"}}>
        <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'TUE'                       // optional: second text in switch button --- default OFF
                switchWidth = {70}                 // optional: switch width --- default 44
                switchHeight = {25}                // optional: switch height --- default 100
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

        <View style={styles.Business_hour}>
        <View style={{marginLeft:"0%",marginRight:"15%"}}>
        <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'WED'                       // optional: second text in switch button --- default OFF
                switchWidth = {70}                 // optional: switch width --- default 44
                switchHeight = {25}               // optional: switch height --- default 100
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

        <View style={styles.Business_hour}>
        <View style={{marginLeft:"0%",marginRight:"15%"}}>
        <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'THU'                       // optional: second text in switch button --- default OFF
                switchWidth = {70}                 // optional: switch width --- default 44
                switchHeight = {25}               // optional: switch height --- default 100
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

        <View style={styles.Business_hour}>
        <View style={{marginLeft:"0%",marginRight:"15%"}}>
        <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'FRI'                       // optional: second text in switch button --- default OFF
                switchWidth = {70}                 // optional: switch width --- default 44
                switchHeight = {25}               // optional: switch height --- default 100
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

        <View style={styles.Business_hour}>
        <View style={{marginLeft:"0%",marginRight:"15%"}}>
        <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'SAT'                       // optional: second text in switch button --- default OFF
                switchWidth = {70}                 // optional: switch width --- default 44
                switchHeight = {25}                // optional: switch height --- default 100
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

        <View style={styles.Business_hour}>
        <View style={{marginLeft:"0%",marginRight:"15%"}}>
        <SwitchButton
                onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                text1 = 'OFF'                        // optional: first text in switch button --- default ON
                text2 = 'SUN'                       // optional: second text in switch button --- default OFF
                switchWidth = {70}                 // optional: switch width --- default 44
                switchHeight = {25}             // optional: switch height --- default 100
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
          <TouchableOpacity style={[styles.button,{backgroundColor:"white",shadowColor: 'grey',marginHorizontal:wp("30%")}]} onPress={() => {this.props.navigation.navigate('Calendar')}} >
          <Text style={[styles.buttonText,{color:"rgb(255,164,0)", shadowColor: 'white',}]}>Set up holidays</Text>
          </TouchableOpacity>        
        </View> 
      </View>   
      
      <View style={{marginTop:"5%"}}>
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
      </View>    
</View>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
