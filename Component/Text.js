import React, { Component } from 'react';
import {
  Text,
  View,Image,
  ScrollView,TextInput,TouchableOpacity,FlatList
} from 'react-native';
import styles from './Style'
import ToggleSwitch from 'toggle-switch-react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import { Dialog } from "react-native-simple-dialogs";
import CountDown from 'react-native-countdown-component';
import TimerCountdown from 'react-native-timer-countdown';
import ResponsiveImage from 'react-native-responsive-image'
import SwitchButton from 'switch-button-react-native';
import Switch from 'react-native-customisable-switch';

export default class App extends Component {
    state = {
        avatarSource: null,avatarSource1:null,
        videoSource: null,isOnDefaultToggleSwitch: false,
        isOnLargeToggleSwitch_user: true,
        isOnBlueToggleSwitch: false,switchThreeValue: true,
        Mon_time_on_hour:3,Mon_time_on_min:0, mon_zero_hour:0,mon_zero_min:0,mon_zero_hour_left:"",mon_zero_min_left:0,
        Mon_time_off_hour:10,Mon_time_off_min:0,
        mon :false,tue:false,
        dataSource : [
          {
            Mon_time_on_hour:9,mon_zero_hour:0,Mon_time_off_hour:19,mon_zero_min:0,switchMonValue:"mon"
          },
        ]
      };
      time_Increase_mon=()=>{
              if(this.state.dataSource.Mon_time_on_min <= 30)
              {
                this.setState({
                  Mon_time_on_min : (this.state.dataSource.Mon_time_on_min)+15,
                })
              }
              else {
                this.setState({
                  Mon_time_on_hour : (this.state.dataSource.Mon_time_on_hour)+1 , Mon_time_on_min : 0
                })
              }
        }


    openDialog = (show) => {
        this.setState({ showDialog: show });
    }

    onToggle(isOn){
      // alert('Changed to ' + isOn)
    }
    
  render() {
    
    const {
      switchThreeValue,
    } = this.state;
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}} horizontal={false}>
              
        <View style={{paddingVertical:"5%"}}>
          <View style={styles.Profile_Container}>
            
                   <FlatList
       
                      data={ this.state.dataSource }
                      
                      // ItemSeparatorComponent = {this.FlatListItemSeparator}

                      renderItem={({item}) => 
                   <View style={[styles.setting_Row,{marginBottom:"5%",height: hp('7%'),}]}>
                                   <View style={{marginTop:"6%",marginLeft:wp("2%")}}>
                          <Switch
                          value={item.switchMonValue}
        
                          // onChangeValue={(value) => this.ShowAlert(value)}
                          
                          fontSize={10}
                          switchWidth={50}
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
            <TouchableOpacity style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{item.mon_zero_hour}{item.Mon_time_on_hour}:{item.mon_zero_hour}</Text>
            <TouchableOpacity onPress={() => {this.time_Increase_mon();}} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View>
              
            <Text>to</Text>  
            
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity  style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{item.Mon_time_off_hour}:{item.mon_zero_hour}</Text>
            <TouchableOpacity style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
            </View>
            </View>        
               
                  </View>
                      }
                   />
            
             </View>
          <Text></Text>
        </View>
      </ScrollView>
    );
  }
}

