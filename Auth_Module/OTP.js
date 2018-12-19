import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,ScrollView,Alert
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
      code: '',switchThreeValue: true,time:500,mobile_number:""
    };
  }
  componentDidMount(){
  GLOBAL.mobile
  }
  
  handlePress(code) {
    if(code == ""){
      console.log(code)
      return null;
    }
    else{
      apis.OTP_SignUP(GLOBAL.mobile,code)
      .then((responseJson) => {
        if(responseJson.success === false){
          console.log(responseJson)
          if(responseJson.code === 201 || responseJson.code === 422){
          GLOBAL.token = responseJson.data[0].auth_tokan
          console.log("token" +responseJson.data[0].auth_tokan)
         if(!responseJson.data[0].is_password)
          {
            this.props.navigation.navigate('Crea_pass');
          }else{
            this.props.navigation.navigate('SignIn');
            Alert.alert("Mobile Number already registered")
          }
        }
        else{
          Alert.alert(responseJson.message)
        }
      }else{
          this.props.navigation.navigate('Crea_pass');
          GLOBAL.token = responseJson.token;
          console.log(responseJson)
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(error)
      });
    }
  }
  _onFulfill(code) {
    // TODO: call API to check code here
    // If code does not match, clear input with: this.refs.codeInputRef1.clear()
    if (code == '1234') {
      Alert.alert(
        'Confirmation Code',
        'Successful!',
        [{text: 'OK'}],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Confirmation Code',
        'Code not match!',
        [{text: 'OK'}],
        { cancelable: false }
      );
      
      this.refs.codeInputRef1.clear();
    }
  }
_resend_OTP = async () =>{
  this.setState({code:""})
  apis.Resend_OTP(GLOBAL.mobile)
  .then((responseJson) => {
    console.log(responseJson)
   console.log(GLOBAL.mobile)
   this.setState({ time : 500 })
  })
  .catch((error) => {
    console.error(error);
    Alert.alert(error)
  });
}
  render() {
    const {
      switchThreeValue
    } = this.state;
    return (
    <KeyboardAwareScrollView  contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'
    >      
        <Text style={styles.Otp_text}>Verify to continue</Text>
        <View style={styles.box}>
          <Text style={styles.text}>Enter OTP sent to +91-{GLOBAL.mobile}</Text>
          <View style={styles.otp_box}>
          <View style={styles.otp}> 
            <CodeInput
              ref="codeInputRef1"
              className={'border-b'}
              space={10}
              size={30}
              inputPosition='left'
              codeLength={4}
              activeColor={GLOBAL.COLOR.ORANGE}
              inactiveColor="rgb(176,176,176)"
              keyboardType="numeric"
              onFulfill={(code) => this.handlePress(code)}
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
        <View style={{marginBottom:hp("30%")}}>
          <TouchableOpacity style={styles.button} onPress={this.handlePress(this.state.code)}>
          <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
      </View>
</KeyboardAwareScrollView>    );
  }
}
