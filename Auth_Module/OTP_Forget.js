import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,ScrollView,Alert,NetInfo
} from 'react-native';
import styles from '../Component/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import RF from "react-native-responsive-fontsize"
import ResponsiveImage from 'react-native-responsive-image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CodeInput from 'react-native-confirmation-code-input';
import TimerCountdown from 'react-native-timer-countdown';
import apis from '../apis/index'
const GLOBAL = require('../Component/Color');

export default class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',switchThreeValue: true,time:500,processing:false,
    };
  }
  otp_verified = () =>{
    if(this.state.code == ''){
      Alert.alert("Please Enter OTP")
    }
  }
  handlePress(code) {
    NetInfo.isConnected.fetch().done((isConnected) => {
if(isConnected){
  if(code === "" && code != "1234"){
    Alert.alert("Please Enter OTP")
  }
  else{
    debugger
    this.setState({ processing: true });
    apis.OTP_SignUP(GLOBAL.Mobile1,code)
    .then((responseJson) => {
      console.log(responseJson)
      this.setState({ processing: false, loginText: 'Successfull..' });
      debugger
      if(responseJson.success === true){
          this.props.navigation.navigate('For_New_Pass');
          GLOBAL.token = responseJson.token;
          Alert.alert(responseJson.message)
          console.log(GLOBAL.Mobile1)
          console.log(responseJson)
      }
      else{
        Alert.alert(responseJson.message)
      }
    })
    .catch((error) => {
      this.setState({ processing: false, loginText: 'Try Again' });
      Alert.alert(error)
    });
  }
} else{
  Alert.alert("Please check your internet connection")
}   });

  }

_resend_OTP = async () =>{
  debugger
  apis.Resend_OTP(GLOBAL.Mobile1)
  .then((response) => response.json())
  .then((responseJson) => {
   console.log(GLOBAL.Mobile1)
   console.log(responseJson)
   this.setState({ time : 500 })
  })
  .catch((error) => {
    Alert.alert(error)
  });
}
 
  render() {
    return (
    <KeyboardAwareScrollView  contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'
    >      
         <Text style={[styles.Otp_text,{marginRight:wp("40%")}]}>Verify to continue</Text>
        <View style={[styles.box,{marginBottom:hp("2%"),paddingVertical:hp("6%")}]}>
          <Text style={styles.text}>Enter OTP sent to +91-{GLOBAL.Mobile1}</Text>
          <View style={styles.otp_box}>
          <View style={styles.otp}> 
            <CodeInput
              ref="codeInputRef1"
              className={'border-b'}
              space={10}
              size={30}
              inputPosition='left'
              onFulfill={(code) => this.handlePress(code)}
              codeLength={4}
              activeColor={GLOBAL.COLOR.ORANGE}
              inactiveColor="rgb(176,176,176)"
              keyboardType="numeric"
            />
            </View>
            <View style={styles.timer}>
            <TimerCountdown
                        initialSecondsRemaining={(this.state.time)*60}
                        allowFontScaling={true}
                        style={styles.timer_countdown}
                    />
                  <TouchableOpacity onPress={this._resend_OTP.bind(this)}>
                  <Text style={styles.timer_text}>Resend OTP</Text>
                  </TouchableOpacity>
              </View>
          </View>
        </View>
        {/* onPress={() => {this.props.navigation.navigate('Crea_pass')}} */}
        {/* <TouchableOpacity style={styles.Otp_button_margin} onPress={this.handlePress(this.state.code)}>
          {!this.state.processing ? <View style={styles.button}>
               <Text style={styles.buttonText}>Next</Text>
             </View> : <ResponsiveImage source={GLOBAL.Loader} initWidth={GLOBAL.COLOR.size_75} initHeight={GLOBAL.COLOR.size_75}/>}
          </TouchableOpacity> */}
            <TouchableOpacity style={[styles.Otp_button_margin,styles.button]} onPress={this.otp_verified}>
          {/* {!this.state.processing ? <View style={styles.button}> */}
               <Text style={styles.buttonText}>Next</Text>
             {/* </View> :  <Text style={styles.buttonText}>Next</Text>} */}
          </TouchableOpacity>
</KeyboardAwareScrollView>    );
  }
}