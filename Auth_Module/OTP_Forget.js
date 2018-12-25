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
      code: '',switchThreeValue: true,time:500,processing:false,
    };
  }
  handlePress(code) {
    if(code == ""){
      return null;
    }
    else{
      this.setState({ processing: true });
      apis.OTP_FORGOT(GLOBAL.Mobile1,code)
      .then((responseJson) => {
        this.setState({ processing: false, loginText: 'Successfull..' });
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
        console.error(error);
        Alert.alert(error)
      });
    }
  }

_resend_OTP = async () =>{
  apis.Resend_OTP(GLOBAL.Mobile1)
  .then((response) => response.json())
  .then((responseJson) => {
   console.log(GLOBAL.Mobile1)
   this.setState({ time : 500 })
  })
  .catch((error) => {
    console.error(error);
    Alert.alert(error)
  });
}
 
  render() {
    return (
    <KeyboardAwareScrollView  contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'
    >      
         <Text style={styles.Otp_text}>Verify to continue</Text>
        <View style={[styles.box]}>
          <Text style={styles.text}>Enter OTP sent to +91-{this.state.user}</Text>
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
                        style={styles.timer}
                    />
                  <TouchableOpacity onPress={this._resend_OTP.bind(this)}>
                  <Text style={styles.timer_text}>Resend OTP</Text>
                  </TouchableOpacity>
              </View>
          </View>
        </View>
        {/* onPress={() => {this.props.navigation.navigate('Crea_pass')}} */}
        <TouchableOpacity style={styles.Otp_button_margin} onPress={this.handlePress(this.state.code)}>
          {!this.state.processing ? <View style={styles.button}>
               <Text style={styles.buttonText}>Next</Text>
             </View> : <ResponsiveImage source={GLOBAL.Loader} initWidth={GLOBAL.COLOR.size_75} initHeight={GLOBAL.COLOR.size_75}/>}
          </TouchableOpacity>
</KeyboardAwareScrollView>    );
  }
}