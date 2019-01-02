import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  TouchableOpacity,
  View,  Image,Alert,NetInfo
} from 'react-native';
import styles from '../Component/Style'
import apis from '../apis/index';
import Spinner from 'react-native-loading-spinner-overlay';
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
    GLOBAL.mobile = this.state.usermobile
    NetInfo.isConnected.fetch().done((isConnected) => {
if(isConnected){
  if(this.state.usermobile.trim().length == 0)
    {
      Alert.alert("Enter Mobile Number")
    }
    else if(this.state.usermobile.trim().length >= 11 || this.state.usermobile.trim().length <= 9){
      Alert.alert("Mobile number should contain 10 digits")
    }
    else{
      this.setState({ processing: true });
      apis.SIGN_UP(this.state.usermobile)
      .then((responseJson) => {
        this.setState({ processing: false, loginText: 'Successfull..' });
        if(responseJson.success === true) {
          GLOBAL.mobile = this.state.usermobile
          this.props.navigation.navigate('OTP');
          console.log(responseJson)
          this.setState({ usermobile :""});
        } else {
          Alert.alert(responseJson.message)
        }
      })
      .catch((error) => {
        Alert.alert(error);
        this.setState({ processing: false, loginText: 'Try Again' });
      });
    }
} 
else{
  Alert.alert("Please check your internet connection")
}  
 });
  }
 
  render() {
    return (
      <KeyboardAwareScrollView  contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='handled'
      >      
       <View style={[styles.margin_top,{marginVertical:hp("5%")}]}>
        <ResponsiveImage source={GLOBAL.Logo} initWidth={GLOBAL.COLOR.Logo_width} initHeight={GLOBAL.COLOR.Logo_height}/>
        </View>
        <View style={[styles.box]}>
          {/* <Text style={styles.text}>Enter the registered mobile number</Text> */}
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
        {/* <TouchableOpacity onPress={this.handlePress.bind(this)}>
             {!this.state.processing ? <View style={styles.button}>
               <Text style={styles.buttonText}>Submit for OTP</Text>
             </View> : <ResponsiveImage source={GLOBAL.Loader} initWidth={GLOBAL.COLOR.size_75} initHeight={GLOBAL.COLOR.size_75}/>}
          </TouchableOpacity> */}
            <TouchableOpacity style={[styles.button,{marginBottom:hp("17%")}]} onPress={this.handlePress}>
               <Text style={styles.buttonText}>Submit for OTP</Text>
          </TouchableOpacity>
        <View style={[styles.Row_margin]}>
            <Text style={styles.text}>Already have an account? </Text>
            <View style={styles.Only_Column}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                <Text style={styles.text}>Sign In </Text>
                <Image
                    source={GLOBAL.rectangle_line}              
                    style={[styles.orange_line]}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>here</Text>
        </View>
        <View style={[styles.Colom_margin,{marginTop:hp("8%")}]}>
            <View style={styles.Row_divider}>
            <ResponsiveImage
          source={GLOBAL.Copy_right}
          initWidth={GLOBAL.COLOR.size_12} initHeight={GLOBAL.COLOR.size_12}
        />
                <Text style={styles.copy_rigth}> All copyright reserved to </Text>
              </View>
                <Text style={styles.copy_rigth}> Vrienden Tech Private Limited 2018 </Text>
          </View>
</KeyboardAwareScrollView>    );
  }
}