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
// import SwitchButton from 'switch-button-react-native';
import Switch from 'react-native-customisable-switch';
import ResponsiveImage from 'react-native-responsive-image'

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
                Alert.alert("select right time")
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

  ///// tuesday time ////
  tueOnIncrease(){
    if(this.state.Tue_time_on_min <= 30)
    {
      this.setState({
        Tue_time_on_min : (this.state.Tue_time_on_min)+15,
        Tue_zero_min:""
      })
    }
    else {
      this.setState({
        Tue_time_on_hour : (this.state.Tue_time_on_hour)+1 , Tue_time_on_min : 0,Tue_zero_min:0
      })
      if(this.state.Tue_time_on_hour > 8){
        this.setState({
        Tue_zero_hour : "",
        })
      }
    }  
  }

  tueOnDecrease(){
    if(this.state.Tue_time_on_hour > 0 && this.state.Tue_time_on_hour < 10){
      this.setState({
       Tue_zero_hour:0
      })
    }
    if(this.state.Tue_time_on_min > 0)
    {
      this.setState({
        Tue_time_on_min : (this.state.Tue_time_on_min)-15,Tue_zero_min:""
      })
    }
    else if(this.state.Tue_time_on_min === 0 && this.state.Tue_time_on_hour >=1) 
    {
      this.setState({
        Tue_time_on_min : 45,
        Tue_time_on_hour : -1+(this.state.Tue_time_on_hour)
      })
    }
    else if(this.state.Tue_time_on_hour <= 0 || this.state.Tue_time_on_min <= 0){
      this.setState({
        Tue_zero_min : 0,
        })
      Alert.alert("increase your time")
    }  
  }

  tueOffIncrease(){
    if(this.state.Tue_time_off_min <= 30)
    {
      this.setState({
        Tue_time_off_min : (this.state.Tue_time_off_min)+15,
        Tue_zero_min_off:""
      })
    }
    else {
      this.setState({
        Tue_time_off_hour : (this.state.Tue_time_off_hour)+1 , Tue_time_off_min : 0,Tue_zero_min_off:0
      })
      if(this.state.Tue_time_off_hour > 8){
        this.setState({
        Tue_zero_hour_off : "",
        })
      }
    }  
  }

  tueOffDecrease(){
    if(this.state.Tue_time_off_hour > 0 && this.state.Tue_time_off_hour < 10){
      this.setState({
       Tue_zero_hour_off:0
      })
    }
    if(this.state.Tue_time_off_min > 0)
    {
      this.setState({
        Tue_time_off_min : (this.state.Tue_time_off_min)-15,Tue_zero_min_off:""
      })
    }
    else if(this.state.Tue_time_off_min === 0 && this.state.Tue_time_off_hour >=1) 
    {
      this.setState({
        Tue_time_off_min : 45,
        Tue_time_off_hour : -1+(this.state.Tue_time_off_hour),
        Tue_zero_hour_off:""
      })
    }
    else if(this.state.Tue_time_off_hour <= 0 || this.state.Tue_time_off_min <= 0){
      this.setState({
        Tue_zero_min_off : 0,
        })
      Alert.alert("increase your time")
    }  
  }
  ////////end ///////

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
    <ScrollView style={{backgroundColor:"rgb(243,242,242)"}}> 
      <View style={styles.container}>
            
        <View style={[styles.box,{marginBottom:"0%",height: hp('8%'),marginTop:hp("0%"),height:hp("83%")}]}>     
        <Text style={[styles.text,{fontSize:RF(3.2),marginRight:wp("34%"),paddingVertical:hp("2%")}]}>Add Day and Time</Text>
        <View style={{flexDirection:"column"}}>
        <View style={styles.Business_hour}>
        <View style={styles.Business_hour_main}>
        <Switch
                          value={switchMonValue}
                          onChangeValue={() => this.setState({ switchMonValue: !switchMonValue })}
                          activeText={'Mon'}
                          inactiveText={'Mon'}
                          onChangeValue={(value) => {this.ShowAlert(value)}}              
                          fontSize={10}
                          switchWidth={52}
                          switchHeight={17}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={24}
                          buttonHeight={24}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          inactiveTextColor="black"
                          // padding={true}
                          activeBackgroundColor	="rgb(255,164,0)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          // activeButtonBackgroundColor	="rgb(255,164,0)"
                          // inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
              <TouchableOpacity onPress={() => {this.Hide_zero_min_left();this.Hide_zero_hour();this.time_decrease_mon();}} style={styles.business_hour_image_Arrow}>
              <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="10" initHeight="10"/>           
              </TouchableOpacity>
            <Text style={[styles.Business_hour_text]}>{this.state.mon_zero_hour}{this.state.Mon_time_on_hour}:{this.state.mon_zero_min}{this.state.Mon_time_on_min}</Text>
              <TouchableOpacity onPress={() => {this.Hide_zero_min();this.Hide_zero_hour();this.time_Increase_mon();}} style={styles.business_line}>
              <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
              </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={() => {this.Hide_zero_min_off();this.left_time_less();this.Hide_zero_hour_off()}} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.mon_zero_hour_left}{this.state.Mon_time_off_hour}:{this.state.mon_zero_min_left}{this.state.Mon_time_off_min}</Text>
            <TouchableOpacity onPress={() => {this.left_time_add();this.Hide_zero_hour_off();this.Hide_zero_min_1_off()}} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View> 
            <TouchableOpacity activeOpacity = { 0.8 }  onPress = { this.Select_unselect_mon }>
                        <Image source = { ( this.state.Select_unselect_mon ) ? require('../Image/main/unselectedIcon3x.png') : require('../Image/main/addTimeIcon3x.png') } style = {{width:wp(4.5),height:hp(2.5),marginTop:hp("1%"),marginRight:wp("3%")}} />
                  </TouchableOpacity>    
        </View> 

        <View style={styles.Business_hour}>
        <View style={styles.Business_hour_main}>
        <Switch
                          value={switchTueValue}
                          onChangeValue={() => this.setState({ switchTueValue: !switchTueValue })}
                          activeText={'Tue'}
                          inactiveText={'Tue'}
                          fontSize={10}
                          switchWidth={52}
                          switchHeight={17}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={24}
                          buttonHeight={24}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          inactiveTextColor="black"
                          // padding={true}
                          activeBackgroundColor	="rgb(255,164,0)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          // activeButtonBackgroundColor	="rgb(255,164,0)"
                          // inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={() => {this.tueOnDecrease()}} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Tue_zero_hour}{this.state.Tue_time_on_hour}:{this.state.Tue_zero_min}{this.state.Tue_time_on_min}</Text>
            <TouchableOpacity onPress={() => {this.tueOnIncrease()}} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={() => {this.tueOffDecrease()}} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Tue_zero_hour_off}{this.state.Tue_time_off_hour}:{this.state.Tue_zero_min_off}{this.state.Tue_time_off_min}</Text>
            <TouchableOpacity onPress={() => {this.tueOffIncrease()}} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View>  
            <TouchableOpacity activeOpacity = { 0.8 }  onPress = { this.Select_unselect_tue }>
                        <Image source = { ( this.state.Select_unselect_tue ) ? require('../Image/main/unselectedIcon3x.png') : require('../Image/main/addTimeIcon3x.png') } style = {{width:wp(4.5),height:hp(2.5),marginTop:hp("1%"),marginRight:wp("3%")}} />
                  </TouchableOpacity>         
        </View> 

      <View style={styles.Business_hour}>
        <View style={styles.Business_hour_main}>
        <Switch
                          value={switchWedValue}
                          onChangeValue={() => this.setState({ switchWedValue: !switchWedValue })}
                          activeText={'Wed'}
                          inactiveText={'Wed'}
                          fontSize={10}
                          switchWidth={52}
                          switchHeight={17}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={24}
                          buttonHeight={24}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          inactiveTextColor="black"
                          // padding={true}
                          activeBackgroundColor	="rgb(255,164,0)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          // activeButtonBackgroundColor	="rgb(255,164,0)"
                          // inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={() => {this.Hide_zero_min_left();this.Hide_zero_hour();this.time_decrease_mon();}} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Wed_zero_hour}{this.state.Wed_time_on_hour}:{this.state.Wed_zero_min}{this.state.Wed_time_on_min}</Text>
            <TouchableOpacity onPress={() => {this.Hide_zero_min();this.Hide_zero_hour();this.time_Increase_mon();}} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={() => {this.Hide_zero_min_left();this.Hide_zero_hour();this.time_decrease_mon();}} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Wed_zero_hour_off}{this.state.Wed_time_off_hour}:{this.state.Wed_time_on_min}{this.state.Wed_time_off_min}</Text>
            <TouchableOpacity onPress={() => {this.Hide_zero_min();this.Hide_zero_hour();this.time_Increase_mon();}} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View> 
            <TouchableOpacity activeOpacity = { 0.8 }  onPress = { this.Select_unselect_wed }>
                        <Image source = { ( this.state.Select_unselect_wed ) ? require('../Image/main/unselectedIcon3x.png') : require('../Image/main/addTimeIcon3x.png') } style = {{width:wp(4.5),height:hp(2.5),marginTop:hp("1%"),marginRight:wp("3%")}} />
                  </TouchableOpacity>         
        </View> 

      <View style={styles.Business_hour}>
        <View style={styles.Business_hour_main}>
        <Switch
                          value={switchThuValue}
                          onChangeValue={() => this.setState({ switchThuValue: !switchThuValue })}
                          activeText={'Thu'}
                          inactiveText={'Thu'}
                          fontSize={10}
                          switchWidth={52}
                          switchHeight={17}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={24}
                          buttonHeight={24}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          inactiveTextColor="black"
                          // padding={true}
                          activeBackgroundColor	="rgb(255,164,0)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          // activeButtonBackgroundColor	="rgb(255,164,0)"
                          // inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={() => {this.Hide_zero_min_left();this.Hide_zero_hour();this.time_decrease_mon();}} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Thu_zero_hour}{this.state.Thu_time_on_hour}:{this.state.Thu_zero_min}{this.state.Thu_time_on_min}</Text>
            <TouchableOpacity onPress={() => {this.Hide_zero_min();this.Hide_zero_hour();this.time_Increase_mon();}} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={() => {this.Hide_zero_min_left();this.Hide_zero_hour();this.time_decrease_mon();}} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Thu_zero_hour_off}{this.state.Thu_time_off_hour}:{this.state.Thu_zero_min}{this.state.Thu_time_off_min}</Text>
            <TouchableOpacity onPress={() => {this.Hide_zero_min();this.Hide_zero_hour();this.time_Increase_mon();}} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View>  
            <TouchableOpacity activeOpacity = { 0.8 }  onPress = { this.Select_unselect_thu }>
                        <Image source = { ( this.state.Select_unselect_thu ) ? require('../Image/main/unselectedIcon3x.png') : require('../Image/main/addTimeIcon3x.png') } style = {{width:wp(4.5),height:hp(2.5),marginTop:hp("1%"),marginRight:wp("3%")}} />
                  </TouchableOpacity>          
        </View> 

 <View style={styles.Business_hour}>
        <View style={styles.Business_hour_main}>
        <Switch
                          value={switchFriValue}
                          onChangeValue={() => this.setState({ switchFriValue: !switchFriValue })}
                          activeText={'Fri'}
                          inactiveText={'Fri'}
                          fontSize={10}
                          switchWidth={52}
                          switchHeight={17}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={24}
                          buttonHeight={24}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          inactiveTextColor="black"
                          // padding={true}
                          activeBackgroundColor	="rgb(255,164,0)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          // activeButtonBackgroundColor	="rgb(255,164,0)"
                          // inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={() => {this.Hide_zero_min_left();this.Hide_zero_hour();this.time_decrease_mon();}} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Fri_zero_hour}{this.state.Fri_time_on_hour}:{this.state.Fri_zero_hour}{this.state.Fri_time_on_min}</Text>
            <TouchableOpacity onPress={() => {this.Hide_zero_min();this.Hide_zero_hour();this.time_Increase_mon();}} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={() => {this.Hide_zero_min_left();this.Hide_zero_hour();this.time_decrease_mon();}} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Fri_zero_hour_off}{this.state.Fri_time_off_hour}:{this.state.Fri_zero_min}{this.state.Fri_time_off_min}</Text>
            <TouchableOpacity onPress={() => {this.Hide_zero_min();this.Hide_zero_hour();this.time_Increase_mon();}} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View> 
            <TouchableOpacity activeOpacity = { 0.8 }  onPress = { this.Select_unselect_fri }>
                        <Image source = { ( this.state.Select_unselect_fri ) ? require('../Image/main/unselectedIcon3x.png') : require('../Image/main/addTimeIcon3x.png') } style = {{width:wp(4.5),height:hp(2.5),marginTop:hp("1%"),marginRight:wp("3%")}} />
                  </TouchableOpacity>          
        </View> 

 <View style={styles.Business_hour}>
        <View style={styles.Business_hour_main}>
        <Switch
                          value={switchSatValue}
                          onChangeValue={() => this.setState({ switchSatValue: !switchSatValue })}
                          activeText={'Fri'}
                          inactiveText={'Fri'}
                          fontSize={10}
                          switchWidth={52}
                          switchHeight={17}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={24}
                          buttonHeight={24}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          inactiveTextColor="black"
                          // padding={true}
                          activeBackgroundColor	="rgb(255,164,0)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          // activeButtonBackgroundColor	="rgb(255,164,0)"
                          // inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={() => {this.Hide_zero_min_left();this.Hide_zero_hour();this.time_decrease_mon();}} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Sat_zero_hour}{this.state.Sat_time_on_hour}:{this.state.Sat_zero_min}{this.state.Sat_time_on_min}</Text>
            <TouchableOpacity onPress={() => {this.Hide_zero_min();this.Hide_zero_hour();this.time_Increase_mon();}} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={() => {this.Hide_zero_min_left();this.Hide_zero_hour();this.time_decrease_mon();}} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Sat_zero_hour_off}{this.state.Sat_time_off_hour}:{this.state.Sat_zero_min}{this.state.Sat_time_off_min}</Text>
            <TouchableOpacity onPress={() => {this.Hide_zero_min();this.Hide_zero_hour();this.time_Increase_mon();}} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View>     
            <TouchableOpacity activeOpacity = { 0.8 }  onPress = { this.Select_unselect_sat }>
                        <Image source = { ( this.state.Select_unselect_sat ) ? require('../Image/main/unselectedIcon3x.png') : require('../Image/main/addTimeIcon3x.png') } style = {{width:wp(4.5),height:hp(2.5),marginTop:hp("1%"),marginRight:wp("3%")}} />
                  </TouchableOpacity>        
        </View> 

 <View style={styles.Business_hour}>
        <View style={styles.Business_hour_main}>
        <Switch
                          value={switchSunValue}
                          onChangeValue={() => this.setState({ switchSunValue: !switchSunValue })}
                          activeText={'Sun'}
                          inactiveText={'Sun'}
                          fontSize={10}
                          switchWidth={52}
                          switchHeight={17}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={24}
                          buttonHeight={24}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          inactiveTextColor="black"
                          // padding={true}
                          activeBackgroundColor	="rgb(255,164,0)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          // activeButtonBackgroundColor	="rgb(255,164,0)"
                          // inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={() => {this.Hide_zero_min_left();this.Hide_zero_hour();this.time_decrease_mon();}} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Sun_zero_hour}{this.state.Sun_time_on_hour}:{this.state.Sun_zero_hour}{this.state.Sun_time_on_min}</Text>
            <TouchableOpacity onPress={() => {this.Hide_zero_min();this.Hide_zero_hour();this.time_Increase_mon();}} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={() => {this.Hide_zero_min_left();this.Hide_zero_hour();this.time_decrease_mon();}} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Sun_zero_hour_off}{this.state.Sun_time_off_hour}:{this.state.Sun_zero_min}{this.state.Sun_time_off_min}</Text>
            <TouchableOpacity onPress={() => {this.Hide_zero_min();this.Hide_zero_hour();this.time_Increase_mon();}} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View>   
            <TouchableOpacity activeOpacity = { 0.8 }  onPress = { this.Select_unselect_sun }>
                        <Image source = { ( this.state.Select_unselect_sun ) ? require('../Image/main/unselectedIcon3x.png') : require('../Image/main/addTimeIcon3x.png') } style = {{width:wp(4.5),height:hp(2.5),marginTop:hp("1%"),marginRight:wp("3%")}} />
                  </TouchableOpacity>      
        </View> 

          <TouchableOpacity style={[styles.button,{backgroundColor:"white",shadowColor: 'grey',marginHorizontal:wp("30%")}]} onPress={() => {this.props.navigation.navigate('Calendar')}} >
          <Text style={[styles.buttonText,{color:"rgb(255,164,0)", shadowColor: 'white',}]}>Setup Holidays</Text>
          </TouchableOpacity>        
        </View> 
        
      </View>   
      
      <View style={{marginTop:"5%"}}>
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
      </View>   
      </View> 
</ScrollView>
    );
  }
}
AppRegistry.registerComponent("Login", () => Login);
