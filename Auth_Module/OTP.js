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
      code: '',switchThreeValue: true,time:500,mobile_number:"",processing: false,
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
    apis.OTP_SignUP(GLOBAL.mobile,code)
    .then((responseJson) => {
      console.log(responseJson)
      if(responseJson.success == false && responseJson.code === 409)
      {
        Alert.alert(responseJson.message)
      }
     else if(responseJson.success === false){
        GLOBAL.token = responseJson.data[0].auth_tokan
        // console.log(responseJson.data[0].auth_tokan)
        if(!responseJson.data[0].is_password)
        {
          this.props.navigation.navigate('Crea_pass');
        }else{
          this.props.navigation.navigate('SignIn');
          Alert.alert("Mobile Number Already Registered")
        }
      }else{
        apis.Sign_LOCAL_SET_DATA_MOBILE('MobileTicket',responseJson.data.mobile);
        console.log(responseJson.data.mobile)
        apis.Sign_LOCAL_SET_DATA('OTPticket',responseJson.token).then(() => {
          this.props.navigation.navigate('Crea_pass');
          GLOBAL.token = responseJson.token
          console.log(responseJson.token)
          }).catch((error) => {
           Alert.alert(error);
            this.setState({ loginText: 'Try Again' });
          });
        // this.props.navigation.navigate('Crea_pass');
        GLOBAL.token = responseJson.token;
        // console.log(responseJson)
      }
    })
    // .catch((error) => {
    //   Alert.alert(error)
    // });
}else{
  Alert.alert("Please check your internet connection")
}   });
  }

  // handlePress(code) {
  //   if(code == ""){
  //     console.log(code)
  //     return null;
  //   }
  //   else{
  //     this.setState({ processing: true });
  //     apis.OTP_SignUP(GLOBAL.mobile,code)
  //     .then((responseJson) => {
  //       this.setState({ processing: false, loginText: 'Successfull..' });
  //       if(responseJson.success === false){
  //         console.log(responseJson)
  //         GLOBAL.token = responseJson.data[0].auth_tokan
  //         console.log("token" +responseJson.data[0].auth_tokan)
  //        if(!responseJson.data[0].is_password)
  //         {
  //           this.props.navigation.navigate('Crea_pass');
  //         }else{
  //           this.props.navigation.navigate('SignIn');
  //           Alert.alert("Mobile Number already registered")
  //       }
  //     }else{
  //         this.props.navigation.navigate('Crea_pass');
  //         GLOBAL.token = responseJson.token;
  //         console.log(responseJson)
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       Alert.alert(error)
  //       this.setState({ processing: false, loginText: 'Try Again' });
  //     });
  //   }
  // }
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
        <View style={[styles.box,{marginBottom:hp("2%"),paddingVertical:hp("6%")}]}>
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
          <TouchableOpacity style={[styles.Otp_button_margin,styles.button]} onPress={this.otp_verified}>
          {/* {!this.state.processing ? <View style={styles.button}> */}
               <Text style={styles.buttonText}>Next</Text>
             {/* </View> :  <Text style={styles.buttonText}>Next</Text>} */}
          </TouchableOpacity>
</KeyboardAwareScrollView>    );
  }
}
