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
        dataSource : [
          {
            name: "John Doe",served:"20",queue:"14",wait_time:120
          },
          {
            name: "rohan dell",served:"10",queue:"24",wait_time:300
          },
          {
            name: "john alexer",served:"10",queue:"24",wait_time:600
          },
          {
            name: "same flint",served:"4",queue:"4",wait_time:180
          }
        ]
    
      };
      
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
      
         <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"5%",marginVertical:hp("3%")}}>
         <View style={styles.Dashboard_block}>
                    <View style={styles.Dashbosrd_image_top}>
                    <ResponsiveImage source={require('../Image/main/completetotalIcon3x.png')} initWidth="55" initHeight="55"/>                
                    </View>
                    <View style={{flexDirection:"column"}}>
                    <Text style={[styles.text,{fontSize: RF(3.2),marginLeft:wp("5%"),marginTop:hp("2%")}]}>100</Text>
                    <Text style={[styles.setting_text,{color:"rgb(168,168,168)",marginLeft:wp("4%"),fontSize:RF(2)}]}>Total</Text>
                    {/* <Text style={[styles.setting_text,{color:"rgb(168,168,168)",marginLeft:wp("2%"),fontSize:RF(2)}]}>Booking</Text>             */}
                    </View>
        </View>
        <View style={styles.Dashboard_block}>
                    
                    <View style={styles.Dashbosrd_image_top}>
                    <ResponsiveImage source={require('../Image/main/completecustomersHandledCopy3x.png')} initWidth="55" initHeight="55"/>                
                    </View>
                    <View style={{flexDirection:"column"}}>
                    <Text style={[styles.text,{fontSize: RF(3.2),marginLeft:wp("5%"),marginTop:hp("2%")}]}>100</Text>
                    <Text style={[styles.setting_text,{color:"rgb(168,168,168)",marginLeft:wp("4%"),fontSize:RF(2)}]}>Served</Text>      
                    </View>
        </View>
        </View>
        <Text></Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"5%",marginBottom:wp("3%")}}>
         <View style={styles.Dashboard_block}>
             
                    <View style={styles.Dashbosrd_image_top}>
                      <ResponsiveImage source={require('../Image/main/completequeueCopy3x.png')} initWidth="55" initHeight="55"/>                
                    </View>
                    <View style={{flexDirection:"column"}}>
                    <Text style={[styles.text,{fontSize: RF(3.2),marginLeft:wp("5%"),marginTop:hp("2%")}]}>100</Text>
                    <Text style={[styles.setting_text,{color:"rgb(168,168,168)",marginLeft:wp("4%"),fontSize:RF(2)}]}>Queue</Text>      
                    </View>       
       </View>
        <View style={styles.Dashboard_block}>
                    
                    <View style={styles.Dashbosrd_image_top}>
                      <ResponsiveImage source={require('../Image/main/completewaitTimeIcon3x.png')} initWidth="55" initHeight="55"/>                
                    </View>
                    <View style={{flexDirection:"column"}}>
                    <View style={{flexDirection:"row",fontSize: RF(3.2),marginRight:wp("2%")}}>
                    <TimerCountdown
                        initialSecondsRemaining={1000*60}
                        allowFontScaling={true}
                        style={{ fontSize:RF(3.2),marginTop:hp("2%")  }}
                    />
                    <Text style={{ fontSize: RF(3.2),
                          justifyContent:"flex-start",
                          fontFamily:"Muli-Bold",marginTop:hp("1%")}}>m</Text>
                    </View>
                    <Text style={{color:"rgb(168,168,168)", fontSize: RF(2.5),
                            justifyContent:"flex-start",
                            fontFamily:"Muli-Bold",fontSize:RF(2)}}>Wait Time</Text>      
                    </View>      
        </View>
        </View>
        <Text></Text>
        <View style={[styles.Profile_Container,{paddingBottom:"3%"}]}>
        
        <View style={[styles.setting_Row,{paddingVertical:hp("2%")}]}>
                    <Text style={styles.setting_text}>Ready to Accept Booking</Text>
                    <View style={{marginRight:wp("7%"),marginTop:hp("2%")}}>
                    <Switch
                          value={switchThreeValue}
                          onChangeValue={() => this.setState({ switchThreeValue: !switchThreeValue })}
                          // activeText={'On'}
                          // inactiveText={'Off'}
                          fontSize={16}
                          switchWidth={48}
                          switchHeight={18}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={22}
                          buttonHeight={22}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          // padding={true}
                          activeBackgroundColor	="rgb(238,238,238)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          activeButtonBackgroundColor	="rgb(255,164,0)"
                          inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
                     {/* <SwitchButton
                                      onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                                      switchWidth = {wp("12%")}                 // optional: switch width --- default 44
                                      switchHeight = {hp("3%")}                 // optional: switch height --- default 100
                                      switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                                      switchBorderRadius = {40}          // optional: switch border radius --- default oval
                                      switchSpeedChange = {500}           // optional: button change speed --- default 100
                                      switchBorderColor = 'white'       // optional: switch border color --- default #d4d4d4
                                      switchBackgroundColor = 'rgb(243,242,242)'      // optional: switch background color --- default #fff
                                      btnBorderColor = 'rgb(255,164,0)'          // optional: button border color --- default #00a4b9
                                      btnBackgroundColor = 'rgb(255,164,0)'      // optional: button background color --- default #00bcd4
                                      fontColor = 'white'               // optional: text font color --- default #b1b1b1
                                      activeFontColor = '#fff' 
                                      text1 = '.'                        // optional: first text in switch button --- default ON
                                      text2 = '.'   
                                      fontColor = 'rgb(243,242,242)'               // optional: text font color --- default #b1b1b1
                                      activeFontColor = 'rgb(255,164,0)'          // optional: active font color --- default #fff
                                  /> */}
                    </View>
                   </View>
                  <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View>
                <TouchableOpacity onPress={ () => this.openDialog(true) }>
                <View style={[styles.setting_Row,{paddingVertical:hp("2%")}]}>
                    <Text style={styles.setting_text}>Add Customer</Text>
                    <TouchableOpacity onPress={ () => this.openDialog(true) }>
                      <Image
                                  source={require('../Image/icon/arrow_right.png')}
                                  style={[styles.setting_Image,{marginRight:wp("8%")}]}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginHorizontal:"5%"}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                </TouchableOpacity>              
                <Dialog
                    // title="Choose a Dingg User Type"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialog(false) }
                    onTouchInside={ () => this.openDialog(false) }
                    visible={ this.state.showDialog }
                >   
                    <TouchableOpacity onPress={() => this.openDialog(false)}>
                     <Image
                                source={require('../Image/icon/cancel1.png')}
                                style={[styles.setting_Image,{marginLeft:wp("75%"),marginBottom:hp("2%"),marginTop:hp("0%")}]}
                    />
                    </TouchableOpacity>
                      <Text style={[styles.text,{fontSize: RF(2.5),}]}>Choose a Dinng User Type</Text>
                      <Text></Text>
                      <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('New_User');this.openDialog(false)}}>
                      <Text style={styles.buttonText}>New User</Text>
                      </TouchableOpacity>
                      <Text></Text>
                      <Text></Text>
                      <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Exist_User');this.openDialog(false)}}>
                      <Text style={styles.buttonText}>Existing User</Text>
                      </TouchableOpacity>
                      <Text></Text>
              </Dialog>
                    <View style={{paddingVertical:hp("2%")}}>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddOffer')}}>
                  <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>View Offers</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddOffer')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image,{marginRight:wp("8%")}]}
                    />
                    </TouchableOpacity>
                  </View>
                  </TouchableOpacity>
                  </View>
        </View>
        
        <View style={{paddingVertical:"5%"}}>
          <View style={styles.Profile_Container}>
              
              <View style={[styles.setting_Row,{marginVertical:hp("3%")}]}>
                          
                          <View style={[styles.Dashbosrd_image,{marginLeft:wp("5%")}]}>
                             <ResponsiveImage source={require('../Image/main/attendanceIcon3x.png')} initWidth="23" initHeight="23"/>                
                          </View>
                          
                      
                          <View style={[styles.Dashbosrd_image,{width:wp(.5),marginLeft:hp("2%")}]}>
                             <ResponsiveImage source={require('../Image/main/iconDivider3x.png')} initWidth="3" initHeight="23"/>                
                          </View>
                          
                          <View style={[styles.Dashbosrd_image,{marginLeft:wp("12%")}]}>
                             <ResponsiveImage source={require('../Image/main/employeeNameIcon3x.png')} initWidth="15" initHeight="23"/>                
                          </View>
                    
                           <View style={[styles.Dashbosrd_image,{width:wp(.5),marginLeft:wp("12%")}]}>
                             <ResponsiveImage source={require('../Image/main/iconDivider3x.png')} initWidth="3" initHeight="23"/>                
                          </View>
                        
                          <View style={[styles.Dashbosrd_image,{marginLeft:wp("2%")}]}>
                             <ResponsiveImage source={require('../Image/main/customersHandledCopy3x.png')} initWidth="23" initHeight="23"/>                
                          </View>
                          
                          <View style={[styles.Dashbosrd_image,{width:wp(.5),marginLeft:wp("4%")}]}>
                             <ResponsiveImage source={require('../Image/main/iconDivider3x.png')} initWidth="3" initHeight="23"/>                
                          </View>
                          
                          <View style={[styles.Dashbosrd_image,{width:wp("7%"),height:hp("2.5%"),marginLeft:wp("1%"),marginRight:wp("1%")}]}>
                             <ResponsiveImage source={require('../Image/main/queueCopy3x.png')} initWidth="32" initHeight="23"/>                
                          </View>
                          
                           <View style={[styles.Dashbosrd_image,{width:wp(.5),marginRight:wp("3%")}]}>
                             <ResponsiveImage source={require('../Image/main/iconDivider3x.png')} initWidth="3" initHeight="23"/>                
                          </View>
                          
                           <View style={[styles.Dashbosrd_image,{marginRight:wp("9%")}]}>
                             <ResponsiveImage source={require('../Image/main/waitTimeIcon3x.png')} initWidth="23" initHeight="23"/>                
                          </View>
                          </View>
                          <View style={{marginHorizontal:"5%"}}>
                          <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                          </View>  
                   <FlatList
       
                      data={ this.state.dataSource }
                      
                      // ItemSeparatorComponent = {this.FlatListItemSeparator}

                      renderItem={({item}) => 
                   <View style={[styles.setting_Row,{marginBottom:"5%",height: hp('7%'),}]}>
                                   <View style={{marginTop:"6%",marginLeft:wp("2%")}}>
                                   <Switch
                                          value={switchThreeValue}
                                          onChangeValue={() => this.setState({ switchThreeValue: !switchThreeValue })}
                                          // activeText={'On'}
                                          // inactiveText={'Off'}
                                          fontSize={16}
                                          switchWidth={40}
                                          switchHeight={12}
                                          switchBorderRadius={12}
                                          switchBorderWidth={0}
                                          buttonWidth={18}
                                          buttonHeight={18}
                                          buttonBorderRadius={20}
                                          buttonBorderWidth={0}
                                          animationTime={150}
                                          // padding={true}
                                          activeBackgroundColor	="rgb(238,238,238)"
                                          inactiveBackgroundColor	="rgb(238,238,238)"
                                          activeButtonBackgroundColor	="rgb(255,164,0)"
                                          inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                                    />
                                  </View>
                    <Text style={[styles.setting_text,{marginRight:"5%",marginLeft:wp("0%"),marginTop:hp("1.5%")}]}>{item.name}</Text>
                   <Text style={[styles.setting_text,{marginRight:wp("0%"),marginLeft:wp("5%"),marginTop:hp("1.5%")}]}>{item.served}</Text>
                   <Text style={[styles.setting_text,{marginRight:wp("0%"),marginLeft:wp("5%"),marginTop:hp("1.5%")}]}>{item.queue}</Text>
                    {/* <CountDown
                        until={item.wait_time*60}
                        timeToShow	={['M']}
                        size={18}
                        digitBgColor="false"
                        label="M"
                        style={marginTop=hp("2%")}
                        marginTop="2%"
                    />  */}
                    <View style={{marginRight:wp("2%"),flexDirection:"row"}}>
                    <TimerCountdown
                        initialSecondsRemaining={1000*item.wait_time}
                        allowFontScaling={true}
                        style={{ fontSize:RF(2.2),marginTop:hp("3%"),}}
                    />
                    <Text style={{ fontSize: RF(2.5),
                          justifyContent:"flex-start",marginTop:hp("2%"),
                          fontFamily:"Muli-Bold"}}> m</Text>
                    </View>
                  </View>
                   }

                   // keyExtractor={(item, index) => index.toString()}
                   
                   />
            
             </View>
          <Text></Text>
        </View>
      </ScrollView>
    );
  }
}

