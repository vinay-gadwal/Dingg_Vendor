import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  AppRegistry,
  Image,
  Text,
  View,
  Alert,
  TouchableOpacity,ScrollView
} from "react-native";
import styles from '../Component/Style'
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SwitchButton from 'switch-button-react-native';
import Switch from 'react-native-customisable-switch';
import ResponsiveImage from 'react-native-responsive-image'
const GLOBAL = require('../Component/Color');

export default class Business extends Component {
  constructor(props)
   {
    super(props);
    this.state = {
      switchMonValue: true,
      switchTueValue: true,switchWedValue: true,switchThuValue: true,
      switchFriValue: true,switchSatValue: true,switchSunValue: true,
      Mon_time_on_hour:3,Mon_time_on_min:0, mon_zero_hour:0,mon_zero_min:0,mon_zero_hour_left:"",mon_zero_min_left:0,
      Tue_time_on_hour:7,Tue_time_on_min:0, Tue_zero_hour:0,Tue_zero_min:0,Tue_zero_hour_off:"",Tue_zero_min_off:0,
      Wed_time_on_hour:9,Wed_time_on_min:0, Wed_zero_hour:0,Wed_zero_min:0, Wed_zero_hour_off:"",Wed_zero_min_off:0,
      Thu_time_on_hour:9,Thu_time_on_min:0, Thu_zero_hour:0,Thu_zero_min:0, Thu_zero_hour_off:"",Thu_zero_min_off:0,
      Fri_time_on_hour:9,Fri_time_on_min:0, Fri_zero_hour:0,Fri_zero_min:0,Fri_zero_hour_off:"",Fri_zero_min_off:0,
      Sat_time_on_hour:9,Sat_time_on_min:0, Sat_zero_hour:0,Sat_zero_min:0,Sat_zero_hour_off:"",Sat_zero_min_off:0,
      Sun_time_on_hour:9,Sun_time_on_min:0, Sun_zero_hour:0,Sun_zero_min:0,Sun_zero_hour_off:"",Sun_zero_min_off:0,
      Mon_time_off_hour:10,Mon_time_off_min:0,
      Tue_time_off_hour:19,Tue_time_off_min:0,
      Wed_time_off_hour:19,Wed_time_off_min:0,
      Thu_time_off_hour:19,Thu_time_off_min:0,
      Fri_time_off_hour:19,Fri_time_off_min:0,
      Sat_time_off_hour:19,Sat_time_off_min:0,
      Sun_time_off_hour:19,Sun_time_off_min:0,
      mon_on :false,mon_off:false,
      Select_unselect_mon:"true",Select_unselect_tue:"true",Select_unselect_wed:"true",Select_unselect_thu:"true",
      Select_unselect_fri:"true",Select_unselect_sat:"true",Select_unselect_sun:"true"
    };  
  }
  Select_unselect_mon = () =>
  {
    this.setState({ Select_unselect_mon: !this.state.Select_unselect_mon });
  }
  Select_unselect_tue = () =>
  {
    this.setState({ Select_unselect_tue: !this.state.Select_unselect_tue });
  }
  Select_unselect_wed = () =>
  {
    this.setState({ Select_unselect_wed: !this.state.Select_unselect_wed });
  }
  Select_unselect_thu = () =>
  {
    this.setState({ Select_unselect_thu: !this.state.Select_unselect_thu });
  }
  Select_unselect_fri = () =>
  {
    this.setState({ Select_unselect_fri: !this.state.Select_unselect_fri });
  }
  Select_unselect_sat = () =>
  {
    this.setState({ Select_unselect_sat: !this.state.Select_unselect_sat });
  }
  Select_unselect_sun = () =>
  {
    this.setState({ Select_unselect_sun: !this.state.Select_unselect_sun });
  }

///////// Mon time //////////
  time_Increase_mon=()=>{   
                  if(this.state.Mon_time_on_min <= 30)
                  {
                    this.setState({
                      Mon_time_on_min : (this.state.Mon_time_on_min)+15,
                    })
                  }
                  else {
                    this.setState({
                      Mon_time_on_hour : (this.state.Mon_time_on_hour)+1 , Mon_time_on_min : 0
                    })
                  }    
            }


  time_decrease_mon=()=>{
            if(this.state.Mon_time_on_min > 0)
            {
              this.setState({
                Mon_time_on_min : (this.state.Mon_time_on_min)-15
              })
            }
            else if(this.state.Mon_time_on_min == 0 && this.state.Mon_time_on_hour >=1) {
                
            
              this.setState({
                Mon_time_on_min : 45,
                Mon_time_on_hour : -1+(this.state.Mon_time_on_hour) 
              })
            }
            else if(this.state.Mon_time_on_hour <= 0 || this.state.Mon_time_on_min <= 0){
              Alert.alert("increase your time")
            }
          }

  Hide_zero_hour(){
                if(this.state.Mon_time_on_hour > 8)
                {
                  this.setState({
                    mon_zero_hour : ""
                  })
                }
                else if(this.state.Mon_time_on_hour < 10){
                  this.setState({
                    mon_zero_hour : 0
                  })
                }
              }

  Hide_zero_min(){
                if(this.state.Mon_time_on_min >= 45 )
                {
                  this.setState({
                    mon_zero_min : 0
                  })
                }
                else if(this.state.Mon_time_on_min < 45){
                  this.setState({
                    mon_zero_min : ""
                  })
                }
              }

   Hide_zero_min_left(){
                if(this.state.Mon_time_on_min == 15 )
                {
                  this.setState({
                    mon_zero_min : 0
                  })
                }
                else if(this.state.Mon_time_on_min < 60){
                  this.setState({
                    mon_zero_min : ""
                  })
                }
              }

////////// End Time ///////////
    
left_time_add(){
                    if(this.state.Mon_time_off_min <= 30)
                    {
                      this.setState({
                        Mon_time_off_min : (this.state.Mon_time_off_min)+15
                      })
                    }
                    else {
                      this.setState({
                        Mon_time_off_hour : (this.state.Mon_time_off_hour)+1 , Mon_time_off_min : 0
                      })
                    }
    }
left_time_less=()=>{
  if(this.state.Mon_time_on_hour < this.state.Mon_time_off_hour){

                if(this.state.Mon_time_off_min > 0)
                {
                  this.setState({
                    Mon_time_off_min : (this.state.Mon_time_off_min)-15
                  })
                }
                else if(this.state.Mon_time_off_min == 0 && this.state.Mon_time_off_hour >=1) {
                    
                
                  this.setState({
                    Mon_time_off_min : 45,
                    Mon_time_off_hour : -1+(this.state.Mon_time_off_hour) 
                  })
                }
                else if(this.state.Mon_time_off_hour <= 0 || this.state.Mon_time_off_min <= 0){
                  Alert.alert("increase your time")
                }
              }
              else{
                Alert.alert("select valid time")
              }
  }
  
  Hide_zero_hour_off(){
                if(this.state.Mon_time_off_hour >= 10)
                {
                  this.setState({
                    mon_zero_hour_left : ""
                  })
                }
                else if(this.state.Mon_time_off_hour < 10){
                  this.setState({
                    mon_zero_hour_left : 0
                  })
                }
  }
  Hide_zero_min_1_off(){
                   if(this.state.Mon_time_off_min >= 45 )
                {
                  this.setState({
                    mon_zero_min_left : 0
                  })
                }
                else if(this.state.Mon_time_off_min < 60){
                  this.setState({
                    mon_zero_min_left : ""
                  })
                }
  }
  
  Hide_zero_min_off(){
    if(this.state.Mon_time_on_min == 15 )
    {
      this.setState({
        mon_zero_min_left : 0
      })
    }
    else if(this.state.Mon_time_on_min < 60){
      this.setState({
        mon_zero_min_left : ""
      })
    }
  }


  ShowAlert = (value) =>{

      this.setState({

        SwitchOnValueHolder: value
      })

      if(value == true)
      {

        //Perform any task here which you want to execute on Switch ON event.
        Alert.alert("Switch is On.");
      }
      else{

        //Perform any task here which you want to execute on Switch OFF event.
        Alert.alert("Switch is Off.");
      }
    }

  render() {
    const {
  switchMonValue,switchTueValue,switchThuValue,switchWedValue,switchFriValue,switchSatValue,switchSunValue
    } = this.state;
    const { selectedHours, selectedMinutes } = this.state;
    return (
    <ScrollView style={GLOBAL.COLOR.rootBAckgroundColor}> 
      <View style={styles.container}>
            
        <View style={[styles.box,{marginTop:hp("4%")}]}>     
        <Text style={[styles.Big_text,{fontSize: RF(2.3),marginRight:wp("40%")}]}>Add Day and Time</Text>
        <View style={styles.Business_hour}>
        <View style={styles.Business_hour_Switch}>
        <SwitchButton
                                      onValueChange={(val) => this.setState({ activeSwitch1: val })}      // this is necessary for this component
                                      switchWidth = {wp("17%")}                 // optional: switch width --- default 44
                                      switchHeight = {hp("3.3%")}                 // optional: switch height --- default 100
                                      switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                                      switchBorderRadius = {20}          // optional: switch border radius --- default oval
                                      switchSpeedChange = {500}           // ∂optional: button change speed --- default 100
                                      switchBorderColor = {GLOBAL.COLOR.White_color}       // optional: switch border color --- default #d4d4d4
                                      switchBackgroundColor = {GLOBAL.COLOR.ORANGE}      // optional: switch background color --- default #fff
                                      btnBorderColor = {GLOBAL.COLOR.ORANGE}          // optional: button border color --- default #00a4b9
                                      btnBackgroundColor = "white"    // optional: button background color --- default #00bcd4
                                      fontColor = {GLOBAL.COLOR.White_color}               // optional: text font color --- default #b1b1b1
                                      activeFontColor = 'white' 
                                      text1 = 'Off'                        // optional: first text in switch button --- default ON
                                      text2 = 'MON'   
                                      fontColor = 'rgb(243,242,242)'               // optional: text font color --- default #b1b1b1
                                      activeFontColor = {GLOBAL.COLOR.ORANGE}   
                                      fontSize={2}      // optional: active font color --- default #fff
                                  />
            </View>
            <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
              <TouchableOpacity onPress={() => {this.Hide_zero_min_left();this.Hide_zero_hour();this.time_decrease_mon();}} style={styles.business_line_left}>
              <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
            <Text style={[styles.Business_hour_text]}>{this.state.mon_zero_hour}{this.state.Mon_time_on_hour}:{this.state.mon_zero_min}{this.state.Mon_time_on_min}</Text>
              <TouchableOpacity onPress={() => {this.Hide_zero_min();this.Hide_zero_hour();this.time_Increase_mon();}} style={styles.business_line_right}>
              <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={() => {this.Hide_zero_min_off();this.left_time_less();this.Hide_zero_hour_off()}} style={styles.business_line_left}>
            <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.mon_zero_hour_left}{this.state.Mon_time_off_hour}:{this.state.mon_zero_min_left}{this.state.Mon_time_off_min}</Text>
            <TouchableOpacity onPress={() => {this.left_time_add();this.Hide_zero_hour_off();this.Hide_zero_min_1_off()}} style={styles.business_line_right}>
            <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View> 
            <TouchableOpacity activeOpacity = { 0.8 }  onPress = { this.Select_unselect_mon }>
                        <ResponsiveImage source = { ( this.state.Select_unselect_mon ) ? GLOBAL.UnSelectIcon : GLOBAL.Plus_yellow_icon } initHeight="18" initWidth="18" />
           </TouchableOpacity>    
        </View>
      <TouchableOpacity style={[styles.button,{backgroundColor:GLOBAL.COLOR.White_color,shadowColor: GLOBAL.COLOR.GRAY}]} onPress={() => {this.props.navigation.navigate('Calendar')}} >
          <Text style={[styles.buttonText,{color:GLOBAL.COLOR.ORANGE, shadowColor:GLOBAL.COLOR.White_color,}]}>Setup Holidays</Text>
      </TouchableOpacity>        
    </View> 
  </View>   
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
</ScrollView>
    );
  }
}
