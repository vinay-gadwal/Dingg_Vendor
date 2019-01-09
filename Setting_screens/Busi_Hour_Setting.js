import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Alert,
  TouchableOpacity,ScrollView
} from "react-native";
import styles from '../Component/Style'
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SwitchButton from 'switch-button-react-native';
import ResponsiveImage from 'react-native-responsive-image'
import DatePicker from 'react-native-datepicker'

const GLOBAL = require('../Component/Color');

export default class Business extends Component {
  constructor(props)
   {
    super(props);
    this.state = {
     mon_right:"00-00",mon_left:"00-00",
     tue_right:"00-00",tue_left:"00-00",
     wed_right:"00-00",wed_left:"00-00",
     thu_right:"00-00",thu_left:"00-00",
     fri_right:"00-00",fri_left:"00-00",
     sat_right:"00-00",sat_left:"00-00",
     sun_right:"00-00",sun_left:"00-00",
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

  render() {
    return (
    <ScrollView style={GLOBAL.COLOR.rootBAckgroundColor}> 
      <View style={styles.container}>
            
        <View style={[styles.box,{marginTop:hp("3.2%")}]}>     
        <Text style={[styles.Big_text,{fontSize: RF(2.3),marginRight:wp("40%")}]}>Add Day and Time</Text>
        <View style={styles.Business_hour}>
        <View style={[styles.Business_hour_Switch,{marginTop:hp("1.5%")}]}>
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
              <TouchableOpacity style={[styles.business_line_left]}>
              <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
              <View style={styles.Business_hour_text}>
                <DatePicker 
                style={styles.business_Switch}
                mode="time"
                  date={this.state.mon_right}
                  placeholder="select time"
                  format={'HH:mm'}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}

                  onDateChange={(date) => {this.setState({mon_right: date})}}
                />
                </View>
              <TouchableOpacity style={[styles.business_line_right]}>
              <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View>
             
             <Text style={[styles.Business_to]}>to</Text>
             
             <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity style={[styles.business_line_left]}>
            <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            <View style={{width:wp("2%"),marginLeft:wp("0%")}}>
                <DatePicker 
                style={{width:wp("11%")}}
                  mode="time"
                  date={this.state.mon_left}
                  placeholder="select time"
                  format={'HH:mm'}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}

                  onDateChange={(date) => {this.setState({mon_left: date})}}
                />
                </View>
            <TouchableOpacity style={[styles.business_line_right,{marginLeft:wp("10%")}]}>
            <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View> 
            <TouchableOpacity style={styles.Business_Off} activeOpacity = { 0.8 }  onPress = { this.Select_unselect_mon }>
                        <ResponsiveImage source = { ( this.state.Select_unselect_mon ) ? GLOBAL.UnSelectIcon : GLOBAL.Plus_yellow_icon } initHeight="18" initWidth="18" />
           </TouchableOpacity>    
        </View>
        <View style={styles.Business_hour}>
        <View style={[styles.Business_hour_Switch,{marginTop:hp("1.5%")}]}>
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
                                      text2 = 'TUE'   
                                      fontColor = 'rgb(243,242,242)'               // optional: text font color --- default #b1b1b1
                                      activeFontColor = {GLOBAL.COLOR.ORANGE}   
                                      fontSize={2}      // optional: active font color --- default #fff
                                  />
            </View>
            <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
              <TouchableOpacity style={[styles.business_line_left]}>
              <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
              <View style={styles.Business_hour_text}>
                <DatePicker 
                style={styles.business_Switch}
                mode="time"
                  date={this.state.tue_right}
                  placeholder="select time"
                  format={'HH:mm'}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}

                  onDateChange={(date) => {this.setState({tue_right: date})}}
                />
                </View>
              <TouchableOpacity style={[styles.business_line_right]}>
              <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View>
             
             <Text style={[styles.Business_to]}>to</Text>
             
             <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity style={[styles.business_line_left]}>
            <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            <View style={{width:wp("2%"),marginLeft:wp("0%")}}>
                <DatePicker 
                style={{width:wp("11%")}}
                  mode="time"
                  date={this.state.tue_left}
                  placeholder="select time"
                  format={'HH:mm'}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}

                  onDateChange={(date) => {this.setState({tue_left: date})}}
                />
                </View>
            <TouchableOpacity style={[styles.business_line_right,{marginLeft:wp("10%")}]}>
            <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View> 
            <TouchableOpacity style={styles.Business_Off} activeOpacity = { 0.8 }  onPress = { this.Select_unselect_tue }>
                        <ResponsiveImage source = { ( this.state.Select_unselect_tue ) ? GLOBAL.UnSelectIcon : GLOBAL.Plus_yellow_icon } initHeight="18" initWidth="18" />
           </TouchableOpacity>    
        </View>
        <View style={styles.Business_hour}>
        <View style={[styles.Business_hour_Switch,{marginTop:hp("1.5%")}]}>
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
                                      text2 = 'WED'   
                                      fontColor = 'rgb(243,242,242)'               // optional: text font color --- default #b1b1b1
                                      activeFontColor = {GLOBAL.COLOR.ORANGE}   
                                      fontSize={2}      // optional: active font color --- default #fff
                                  />
            </View>
            <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
              <TouchableOpacity style={[styles.business_line_left]}>
              <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
              <View style={styles.Business_hour_text}>
                <DatePicker 
                style={styles.business_Switch}
                mode="time"
                  date={this.state.wed_right}
                  placeholder="select time"
                  format={'HH:mm'}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}

                  onDateChange={(date) => {this.setState({wed_right: date})}}
                />
                </View>
              <TouchableOpacity style={[styles.business_line_right]}>
              <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View>
             
             <Text style={[styles.Business_to]}>to</Text>
             
             <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity style={[styles.business_line_left]}>
            <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            <View style={{width:wp("2%"),marginLeft:wp("0%")}}>
                <DatePicker 
                style={{width:wp("11%")}}
                  mode="time"
                  date={this.state.wed_left}
                  placeholder="select time"
                  format={'HH:mm'}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}

                  onDateChange={(date) => {this.setState({wed_left: date})}}
                />
                </View>
            <TouchableOpacity style={[styles.business_line_right,{marginLeft:wp("10%")}]}>
            <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View> 
            <TouchableOpacity style={styles.Business_Off} activeOpacity = { 0.8 }  onPress = { this.Select_unselect_wed }>
                        <ResponsiveImage source = { ( this.state.Select_unselect_wed ) ? GLOBAL.UnSelectIcon : GLOBAL.Plus_yellow_icon } initHeight="18" initWidth="18" />
           </TouchableOpacity>    
        </View>
        <View style={styles.Business_hour}>
        <View style={[styles.Business_hour_Switch,{marginTop:hp("1.5%")}]}>
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
                                      text2 = 'THU'   
                                      fontColor = 'rgb(243,242,242)'               // optional: text font color --- default #b1b1b1
                                      activeFontColor = {GLOBAL.COLOR.ORANGE}   
                                      fontSize={2}      // optional: active font color --- default #fff
                                  />
            </View>
            <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
              <TouchableOpacity style={[styles.business_line_left]}>
              <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
              <View style={styles.Business_hour_text}>
                <DatePicker 
                style={styles.business_Switch}
                mode="time"
                  date={this.state.thu_right}
                  placeholder="select time"
                  format={'HH:mm'}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}

                  onDateChange={(date) => {this.setState({thu_right: date})}}
                />
                </View>
              <TouchableOpacity style={[styles.business_line_right]}>
              <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View>
             
             <Text style={[styles.Business_to]}>to</Text>
             
             <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity style={[styles.business_line_left]}>
            <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            <View style={{width:wp("2%"),marginLeft:wp("0%")}}>
                <DatePicker 
                style={{width:wp("11%")}}
                  mode="time"
                  date={this.state.thu_left}
                  placeholder="select time"
                  format={'HH:mm'}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}

                  onDateChange={(date) => {this.setState({thu_left: date})}}
                />
                </View>
            <TouchableOpacity style={[styles.business_line_right,{marginLeft:wp("10%")}]}>
            <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View> 
            <TouchableOpacity style={styles.Business_Off} activeOpacity = { 0.8 }  onPress = { this.Select_unselect_thu }>
                        <ResponsiveImage source = { ( this.state.Select_unselect_thu ) ? GLOBAL.UnSelectIcon : GLOBAL.Plus_yellow_icon } initHeight="18" initWidth="18" />
           </TouchableOpacity>    
        </View>
        <View style={styles.Business_hour}>
        <View style={[styles.Business_hour_Switch,{marginTop:hp("1.5%")}]}>
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
                                      text2 = 'FRI'   
                                      fontColor = 'rgb(243,242,242)'               // optional: text font color --- default #b1b1b1
                                      activeFontColor = {GLOBAL.COLOR.ORANGE}   
                                      fontSize={2}      // optional: active font color --- default #fff
                                  />
            </View>
            <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
              <TouchableOpacity style={[styles.business_line_left]}>
              <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
              <View style={styles.Business_hour_text}>
                <DatePicker 
                style={styles.business_Switch}
                mode="time"
                  date={this.state.fri_right}
                  placeholder="select time"
                  format={'HH:mm'}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}

                  onDateChange={(date) => {this.setState({fri_right: date})}}
                />
                </View>
              <TouchableOpacity style={[styles.business_line_right]}>
              <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View>
             
             <Text style={[styles.Business_to]}>to</Text>
             
             <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity style={[styles.business_line_left]}>
            <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            <View style={{width:wp("2%"),marginLeft:wp("0%")}}>
                <DatePicker 
                style={{width:wp("11%")}}
                  mode="time"
                  date={this.state.fri_left}
                  placeholder="select time"
                  format={'HH:mm'}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}

                  onDateChange={(date) => {this.setState({fri_left: date})}}
                />
                </View>
            <TouchableOpacity style={[styles.business_line_right,{marginLeft:wp("10%")}]}>
            <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View> 
            <TouchableOpacity style={styles.Business_Off} activeOpacity = { 0.8 }  onPress = { this.Select_unselect_fri }>
                        <ResponsiveImage source = { ( this.state.Select_unselect_fri ) ? GLOBAL.UnSelectIcon : GLOBAL.Plus_yellow_icon } initHeight="18" initWidth="18" />
           </TouchableOpacity>    
        </View>
        <View style={styles.Business_hour}>
        <View style={[styles.Business_hour_Switch,{marginTop:hp("1.5%")}]}>
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
                                      text2 = 'SAT'   
                                      fontColor = 'rgb(243,242,242)'               // optional: text font color --- default #b1b1b1
                                      activeFontColor = {GLOBAL.COLOR.ORANGE}   
                                      fontSize={2}      // optional: active font color --- default #fff
                                  />
            </View>
            <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
              <TouchableOpacity style={[styles.business_line_left]}>
              <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
              <View style={styles.Business_hour_text}>
                <DatePicker 
                style={styles.business_Switch}
                mode="time"
                  date={this.state.sat_right}
                  placeholder="select time"
                  format={'HH:mm'}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}

                  onDateChange={(date) => {this.setState({sat_right: date})}}
                />
                </View>
              <TouchableOpacity style={[styles.business_line_right]}>
              <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View>
             
             <Text style={[styles.Business_to]}>to</Text>
             
             <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity style={[styles.business_line_left]}>
            <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            <View style={{width:wp("2%"),marginLeft:wp("0%")}}>
                <DatePicker 
                style={{width:wp("11%")}}
                  mode="time"
                  date={this.state.sat_left}
                  placeholder="select time"
                  format={'HH:mm'}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}

                  onDateChange={(date) => {this.setState({sat_left: date})}}
                />
                </View>
            <TouchableOpacity style={[styles.business_line_right,{marginLeft:wp("10%")}]}>
            <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View> 
            <TouchableOpacity style={styles.Business_Off} activeOpacity = { 0.8 }  onPress = { this.Select_unselect_sat }>
                        <ResponsiveImage source = { ( this.state.Select_unselect_sat ) ? GLOBAL.UnSelectIcon : GLOBAL.Plus_yellow_icon } initHeight="18" initWidth="18" />
           </TouchableOpacity>    
        </View>
        <View style={styles.Business_hour}>
        <View style={[styles.Business_hour_Switch,{marginTop:hp("1.5%")}]}>
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
                                      text2 = 'SUN'   
                                      fontColor = 'rgb(243,242,242)'               // optional: text font color --- default #b1b1b1
                                      activeFontColor = {GLOBAL.COLOR.ORANGE}   
                                      fontSize={2}      // optional: active font color --- default #fff
                                  />
            </View>
            <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
              <TouchableOpacity style={[styles.business_line_left]}>
              <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
              <View style={styles.Business_hour_text}>
                <DatePicker 
                style={styles.business_Switch}
                mode="time"
                  date={this.state.sun_right}
                  placeholder="select time"
                  format={'HH:mm'}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}

                  onDateChange={(date) => {this.setState({sun_right: date})}}
                />
                </View>
              <TouchableOpacity style={[styles.business_line_right]}>
              <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
              </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View>
             
             <Text style={[styles.Business_to]}>to</Text>
             
             <View style={styles.Only_Column}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity style={[styles.business_line_left]}>
            <ResponsiveImage source={GLOBAL.Left_Yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            <View style={{width:wp("2%"),marginLeft:wp("0%")}}>
                <DatePicker 
                style={{width:wp("11%")}}
                  mode="time"
                  date={this.state.sun_left}
                  placeholder="select time"
                  format={'HH:mm'}
                  // minDate="2016-05-01"
                  // maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{dateInput:{borderWidth: 0},marginRight:wp("0%")}}

                  onDateChange={(date) => {this.setState({sun_left: date})}}
                />
                </View>
            <TouchableOpacity style={[styles.business_line_right,{marginLeft:wp("10%")}]}>
            <ResponsiveImage source={GLOBAL.Right_yellow_arrow} initWidth={GLOBAL.COLOR.Yellow_10} initHeight={GLOBAL.COLOR.Yellow_10}/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
            </View>
            </View> 
            <TouchableOpacity style={styles.Business_Off} activeOpacity = { 0.8 }  onPress = { this.Select_unselect_sun }>
                        <ResponsiveImage source = { ( this.state.Select_unselect_sun ) ? GLOBAL.UnSelectIcon : GLOBAL.Plus_yellow_icon } initHeight="18" initWidth="18" />
           </TouchableOpacity>    
        </View>
      <TouchableOpacity style={[styles.button,{backgroundColor:GLOBAL.COLOR.White_color,shadowColor: GLOBAL.COLOR.GRAY,height:hp("5.9%")}]} onPress={() => {this.props.navigation.navigate('Calendar')}} >
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
