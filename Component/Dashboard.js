import React, { Component } from 'react';
import {
  Text,
  View,Image,
  ScrollView,TextInput,TouchableOpacity,FlatList
} from 'react-native';
import styles from './Style'
import {createBottomTabNavigator,createStackNavigator,} from 'react-navigation';
import Alert_top from './Alert'

import ToggleSwitch from 'toggle-switch-react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import { Dialog } from "react-native-simple-dialogs";
import CountDown from 'react-native-countdown-component';
import TimerCountdown from 'react-native-timer-countdown';
import ResponsiveImage from 'react-native-responsive-image'
import SwitchButton from 'switch-button-react-native';
import Switch from 'react-native-customisable-switch';
class App extends Component {
    state = {
        avatarSource: null,avatarSource1:null,
        videoSource: null,isOnDefaultToggleSwitch: false,
        isOnLargeToggleSwitch_user: true,activeSwitch:1,activeSwitch1:1,
        isOnBlueToggleSwitch: false,switchThreeValue: true,switchvalue:true,
        dataSource : [
          {
            name: "John Doe",served:"20",queue:"14",wait_time:2
          },
          {
            name: "rohan dell",served:"10",queue:"24",wait_time:30
          },
          {
            name: "john alexer",served:"10",queue:"24",wait_time:600
          },
          {
            name: "same flint",served:"44",queue:"44",wait_time:180
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
      switchThreeValue,switchvalue
    } = this.state;
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}} horizontal={false}>
      
         <View style={styles.Dashboard_block_box}>
         <View style={styles.Dashboard_block}>
                    <ResponsiveImage source={require('../Image/main/completetotalIcon3x.png')} style={styles.Dashbosrd_image_top}/>                
                    <View style={{flexDirection:"column",width:wp("18%"),alignItems:"flex-end"}}>
                    <Text style={[styles.Dashboard_text,{fontSize: RF(3.2),marginTop:hp("2%")}]}>100</Text>
                    <Text style={[styles.Dashboard_text,{color:"rgb(168,168,168)",fontSize:RF(1.7),width:wp("15%")}]}>Total Booking</Text>
                    {/* <Text style={[styles.Dashboard_text,{color:"rgb(168,168,168)",fontSize:RF(1.7),marginBottom:hp("2%")}]}>Booking</Text>             */}
                    </View>
        </View>
        <View style={styles.Dashboard_block}>
                    <ResponsiveImage source={require('../Image/main/completecustomersHandledCopy3x.png')} style={styles.Dashbosrd_image_top} />                
                    <View style={{flexDirection:"column",width:wp("18%"),alignItems:"flex-end"}}>
                    <Text style={[styles.Dashboard_text,{fontSize: RF(3.2),marginTop:hp("2%")}]}>100</Text>
                    <Text style={[styles.Dashboard_text,{color:"rgb(168,168,168)",marginLeft:wp("6%"),fontSize:RF(1.7),marginBottom:hp("2%"),fontFamily:"Muli-ExtraBold"}]}>Served</Text>      
                    </View>
        </View>
        </View>
        <View style={styles.Dashboard_block_box}>
         <View style={styles.Dashboard_block}>
                    <ResponsiveImage source={require('../Image/main/completequeueCopy3x.png')} style={styles.Dashbosrd_image_top}/>                
                    <View style={{flexDirection:"column",width:wp("18%"),alignItems:"flex-end"}}>
                    <Text style={[styles.Dashboard_text,{fontSize: RF(3.2),marginTop:hp("2%")}]}>100</Text>
                    <Text style={[styles.Dashboard_text,{color:"rgb(168,168,168)",marginLeft:wp("7%"),fontSize:RF(1.7),marginBottom:hp("2%"),fontFamily:"Muli-ExtraBold"}]}>Queue</Text>      
                    </View>       
       </View>
        <View style={styles.Dashboard_block}>
                    <ResponsiveImage source={require('../Image/main/completewaitTimeIcon3x.png')} style={styles.Dashbosrd_image_top}/>                
                    <View style={{flexDirection:"column",width:wp("23%"),alignItems:"flex-end"}}>
                    <View style={{flexDirection:"row",fontSize: RF(3),marginRight:wp("2%")}}>
                    <TimerCountdown
                        initialSecondsRemaining={1000*60}
                        allowFontScaling={true}
                        style={{ fontSize:RF(3.1),marginTop:hp("2%")  }}
                    />
                    <Text style={{ fontSize: RF(3.2),
                          justifyContent:"flex-start",
                          fontFamily:"Muli-Bold",marginTop:hp("1.1%")}}>m</Text>
                    </View>
                    <Text style={[styles.Dashboard_text,{color:"rgb(168,168,168)",marginRight:wp("2%"),fontSize:RF(1.7),marginBottom:hp("2%"),fontFamily:"Muli-ExtraBold"}]}>Wait Time</Text>      
                    </View>      
        </View>
        </View>
        <Text></Text>
        <View style={[styles.Profile_Container,{paddingBottom:hp(".5%")}]}>
        
        <View style={[styles.setting_Row,{paddingVertical:hp("1%")}]}>
                    <Text style={[styles.setting_text,{marginLeft:"5%",}]}>Ready to Accept Booking</Text>
                    <TouchableOpacity style={{marginRight:wp("5%"),marginTop:hp("2%")}}>
                    {/* <Switch
                          value={switchThreeValue}
                          onChangeValue={(value) => {
                                        console.log(value);
                                      }}                          
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
                        /> */}
                     <SwitchButton
                                      onValueChange={(val) => this.setState({ activeSwitch: val })}      // this is necessary for this component
                                      switchWidth = {wp("12%")}                 // optional: switch width --- default 44
                                      switchHeight = {hp("3%")}                 // optional: switch height --- default 100
                                      switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                                      switchBorderRadius = {20}          // optional: switch border radius --- default oval
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
                                  />
                      { this.state.activeSwitch === 1 ? console.log('view1') : console.log('view2') }

                    </TouchableOpacity>
            </View>
            <View style={{marginHorizontal:wp("5%")}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
            </View>
                <TouchableOpacity onPress={ () => this.openDialog(true) }>
            <View style={[styles.setting_Row,{paddingVertical:hp("1%")}]}>
                    <Text style={[styles.setting_text,{marginLeft:"5%",}]}>Add Customer</Text>
                    <TouchableOpacity onPress={ () => this.openDialog(true) }>
                      <Image
                                  source={require('../Image/icon/arrow_right.png')}
                                  style={[styles.setting_Image,{marginRight:wp("6%")}]}
                      />
                    </TouchableOpacity>
            </View>
            <View style={{marginHorizontal:wp("5%")}}>
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
                      <TouchableOpacity style={[styles.button,{width:wp("30%")}]} onPress={() => {this.props.navigation.navigate('New_User');this.openDialog(false)}}>
                      <Text style={styles.buttonText}>New User</Text>
                      </TouchableOpacity>
                      <Text></Text>
                      <Text></Text>
                      <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Exist_User');this.openDialog(false)}}>
                      <Text style={styles.buttonText}>Existing User</Text>
                      </TouchableOpacity>
                      <Text></Text>
              </Dialog>
            <View style={{paddingVertical:hp("1%")}}>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddOffer')}}>
                  <View style={styles.setting_Row}>
                    <Text style={[styles.setting_text,{marginLeft:"5%",}]}>View Offers</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddOffer')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image,{marginRight:wp("6%")}]}
                    />
                    </TouchableOpacity>
                  </View>
                  </TouchableOpacity>
            </View>
        </View>
        
          <View style={styles.Profile_Container}>
              
              <View style={[styles.setting_Row,{marginVertical:hp("2%")}]}>
                          
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
                          <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="1"/>
                          </View>  
                   <FlatList
       
                      data={ this.state.dataSource }
                      
                      // ItemSeparatorComponent = {this.FlatListItemSeparator}

                      renderItem={({item}) => 
                   <View style={[styles.setting_Row,{marginBottom:hp("2%"),height: hp('7%'),}]}>
                                   <View style={{marginTop:hp("3%"),marginLeft:wp("2%")}}>
                                   <SwitchButton
                                      onValueChange={(val) => this.setState({ activeSwitch1: val })}      // this is necessary for this component
                                      switchWidth = {wp("10%")}                 // optional: switch width --- default 44
                                      switchHeight = {hp("3%")}                 // optional: switch height --- default 100
                                      switchdirection = 'rtl'             // optional: switch button direction ( ltr and rtl ) --- default ltr
                                      switchBorderRadius = {20}          // optional: switch border radius --- default oval
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
                                  />
                                   { this.state.activeSwitch1 === 1 ? console.log('view1') : console.log('view2') }
                                  </View>
                    <Text style={[styles.setting_text,{width:wp("28%"),marginTop:hp("1%"),alignItems:"flex-start"}]}>{item.name}</Text>
                   <Text style={[styles.setting_text,{width:wp("10%"),marginTop:hp("1%"),alignItems:"center"}]}>{item.served}</Text>
                   <Text style={[styles.setting_text,{width:wp("8"),marginTop:hp("1%"),justifyContent:"flex-end"}]}>{item.queue}</Text>
                 <View style={{flexDirection:"row",justifyContent:"space-evenly",width:wp("10%"),marginRight:wp("5%")}}>
                    <CountDown
                        until={item.wait_time*60}
                        timeToShow	={['M']}
                        size={18}
                        digitBgColor="false"
                        style={{marginTop:hp("2%"),marginLeft:wp("2%")}}
                        marginTop="2%"
                        label="false"
                        timeTxtColor="white"
                    /> 
                     <Text style={{ fontSize: RF(2.5),marginRight:wp("2%"),
                          justifyContent:"flex-start",marginTop:hp("2.2%"),
                          fontFamily:"Muli-Bold"}}>  m</Text>
                  </View>
                  </View>
                   }

                   // keyExtractor={(item, index) => index.toString()}
                   
                   />
            
             </View>
          <Text></Text>
      </ScrollView>
    );
  }
}

export default createStackNavigator({
  App:{
    screen:App,
    navigationOptions: ({ navigation }) => ({
      title: 'DASHBOARD',
     
      headerRight:(
          <TouchableOpacity onPress={() => {navigation.navigate('Alert_top')}}>
        <Image
          source={require('../Image/icon/notificationIcon3x.png')}
          style={[styles.back_butt0n,{marginRight:wp("3%"),height:hp("3.2%"),width:wp("5%"),marginBottom:hp("1.5%")}]}
        />
        </TouchableOpacity>)
      })
  },
 Alert_top:{
          screen:Alert_top,
          navigationOptions: ({ navigation }) => ({
            title: 'ALERTS',
            headerLeft:null,
            headerRight:(
            <Image
              source={require('../Image/icon/notificationIconYellow3x2.png')}
              style={[styles.back_butt0n,{marginRight:wp("3%"),height:hp("3.2%"),width:wp("5%"),marginBottom:hp("1.5%")}]}
            />)
          })
        },
},

{
  initialRouteName:"App",
  // headerMode: "none",
  navigationOptions: {
    headerTitleStyle: {
      fontWeight: 'bold',marginBottom:hp("2%"),fontSize: RF("2.4"),justifyContent:"center",alignItems:"center"
    },
      },

});