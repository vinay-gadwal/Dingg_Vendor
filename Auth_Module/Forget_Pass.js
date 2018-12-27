import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,Alert,NetInfo
} from 'react-native';
import styles from '../Component/Style'
import apis from '../apis/index';
import Form from 'react-native-form';
import CountryPicker from 'react-native-country-picker-modal';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import RF from "react-native-responsive-fontsize"
import ResponsiveImage from 'react-native-responsive-image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const _width = 110;
const _height = 77;
const GLOBAL = require('../Component/Color');

export default class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usermobile: "",
      spinner: false,processing: false,
      country: {
        cca2: 'US',
        callingCode: '1'
      }
    };
  }
  handlePress = async () => {
    NetInfo.isConnected.fetch().done((isConnected) => {
if(isConnected){
  if(this.state.usermobile.trim().length == 0)
  {
    Alert.alert("Enter the registered mobile number")
  }
  else if(this.state.usermobile.trim().length >= 11 || this.state.usermobile.trim().length <= 9){
      Alert.alert("Mobile number should contain 10 digits")
  }
  else{
    this.setState({ processing: true });
    apis.FORGET_PASS(this.state.usermobile)
    .then((responseJson) => {
      // this.setState({ processing: false, loginText: 'Successfull..' });
      console.log(responseJson)
      if(responseJson.success == false){
        Alert.alert(responseJson.message)
      }
      else{
 GLOBAL.Mobile1 =this.state.usermobile
 this.props.navigation.navigate('OTP_forget');
 this.setState({ usermobile :""});
      }
    })
    .catch((error) => {
      Alert.alert("error")
      this.setState({ processing: false, loginText: 'Try Again' });
    });
  }
} else{
  Alert.alert("Please check your internet connection")
}   });
  }
 
  render() {
    
    return (
<KeyboardAwareScrollView  contentContainerStyle={styles.container}
  keyboardShouldPersistTaps='handled'
>      
         <View style={styles.margin_top}>
        <ResponsiveImage source={GLOBAL.Logo} initWidth={GLOBAL.COLOR.Logo_width} initHeight={GLOBAL.COLOR.Logo_height}/>
        </View>
        <View style={[styles.box]}>
          <Text style={styles.text}>Enter the registered mobile number</Text>
          <View style={styles.Sign_up_context}>
              <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}>

              <Text style={styles._91_style}>+91     </Text>
              </TextInputLayout>
              <Text>   </Text>
          <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
          <TextInput
            value={this.state.usermobile}
            onChangeText={usermobile => this.setState({ usermobile })}
            style={[styles.Mobile_nput]}
            returnKeyType="done"
            underlineColorAndroid='transparent'
            ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Enter Mobile Number"
          />
         </TextInputLayout>
          </View>
        </View>
        {/* onPress={() => {this.props.navigation.navigate('Crea_pass')}} */}
        {/* <TouchableOpacity onPress={this.handlePress.bind(this)}>
        {!this.state.processing ? <View style={styles.button}>
               <Text style={styles.buttonText}>Submit for OTP</Text>
             </View> : <ResponsiveImage source={GLOBAL.Loader} initWidth={GLOBAL.COLOR.size_75} initHeight={GLOBAL.COLOR.size_75}/>}
        </TouchableOpacity> */}
         <TouchableOpacity style={[styles.button,{marginBottom:hp("22%")}]} onPress={this.handlePress}>
               <Text style={styles.buttonText}>Submit for OTP</Text>
          </TouchableOpacity>
        <View style={[styles.Colom_margin,{marginBottom:hp("2%")}]}>
          <View style={styles.Row_divider}>
          <ResponsiveImage
          source={GLOBAL.Copy_right}
          initWidth={GLOBAL.COLOR.size_12} initHeight={GLOBAL.COLOR.size_12}
        />
            <Text style={styles.copy_rigth}> All copyright reserved to </Text>
          </View>
          <Text style={[styles.copy_rigth]}> Vrienden Tech Private Limited 2018 </Text>
        </View>

</KeyboardAwareScrollView>    );
  }
}