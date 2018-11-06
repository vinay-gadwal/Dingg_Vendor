import React, { Component } from 'react';
import {
  Text,
  View,Image,
  ScrollView,TouchableOpacity
} from 'react-native';
import styles from './Style'
import ToggleSwitch from 'toggle-switch-react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import ResponsiveImage from 'react-native-responsive-image'
import SwitchButton from 'switch-button-react-native';

export default class App extends Component {
    state = {
        avatarSource: null,avatarSource1:null,
        videoSource: null,
        isOnDefaultToggleSwitch: true,
        isOnLargeToggleSwitch: false,
        isOnBlueToggleSwitch: false,
      };
      openDialog = (show) => {
        this.setState({ showDialog: show });
    }

    onToggle(isOn){
      // alert('Changed to ' + isOn)
    }
    
  render() {
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}} horizontal={false}>
      {/* <Text style={styles.Header}>SETTINGS</Text> */}

        <View style={{paddingVertical:"4%"}}>
          <View style={styles.Profile_Container}>
            <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('App_setting')}}>
             <View style={{justifyContent:"space-between"}}>
                   <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>App Setting</Text>
                    <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('App_setting')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                    </View>
                    <View style={{marginHorizontal:"5%"}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
             </View>  
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Business_Hour')}}>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>

                    <Text style={styles.setting_text}>Business Hour Setting</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Business_Hour')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                    </View>
                    <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Set_up')}}>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>Set Up Services</Text>
                    <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View>            
             </TouchableOpacity>
             <TouchableOpacity onPress={() => {this.props.navigation.navigate('Star_rating')}}>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>Review & rating</Text>
                    <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View> 
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Add_stylist')}}>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>Add Stylist</Text>
                    <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View>
              </TouchableOpacity>

              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>Auto Accept</Text>
                    <View style={{marginRight:wp("7%"),marginTop:hp("4%")}}>
                    {/* <ToggleSwitch  
                      onColor="rgb(255,164,0)" 
                      width={"1%"}
                      size="small"
                      isOn={this.state.isOnDefaultToggleSwitch}
                      onToggle={isOnDefaultToggleSwitch => {
                        this.setState({ isOnDefaultToggleSwitch });
                        this.onToggle(isOnDefaultToggleSwitch);
                      }}
                    /> */}
                     <SwitchButton
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
                                  />
                    </View>
                   </View>
                  <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Manage_user')}}>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                  <Text style={styles.setting_text}>Manage Users</Text>
                  <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                </View>
                <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>Set Queue Limit</Text>
                    <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
             </TouchableOpacity>
          </View>
         
        <TouchableOpacity style={[styles.button,{marginTop:hp("5"),marginHorizontal:wp("30%")}]} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('AuthStack')}}>
                  <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

