import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  TouchableOpacity,
  View,  Image,Alert
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
    if(this.state.usermobile.length == 0)
    {
      Alert.alert("Enter Mobile Number")
    }
    else if(this.state.usermobile.length >= 11 || this.state.usermobile.length <= 9){
        Alert.alert("Size of Mobile Number Should be 10")
    }
    else{
      apis.SIGN_UP(this.state.usermobile)
      .then((responseJson) => {
        if(responseJson.success === true) {
          GLOBAL.mobile = this.state.usermobile
          this.props.navigation.navigate('OTP');
          console.log(responseJson)
        } else {
          Alert.alert(responseJson.message)
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }
 
  render() {
    return (
      <KeyboardAwareScrollView  contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='handled'
      >      
       <View style={{marginTop:hp("5%")}}>
        <ResponsiveImage source={require('../Image/icon/logo_3.png')} initWidth={_width} initHeight={_height}/>
        </View>
        <View style={[styles.box,{marginBottom:hp("2%")}]}>
          {/* <Text style={styles.text}>Enter the registered mobile number</Text> */}
          <View style={styles.Sign_up_context}>
              <TextInputLayout focusColor="rgb(255,164,0)">

              <Text style={styles._91_style}>+91     </Text>
              </TextInputLayout>
              <Text>   </Text>
          <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
          <TextInput
            value={this.state.usermobile}
            onChangeText={usermobile => this.setState({ usermobile })}
            style={[styles.input,{width: wp('52'),}]}
            placeholderTextColor="rgb(204,204,204)"
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
        <TouchableOpacity onPress={this.handlePress.bind(this)} style={[styles.button,{width: wp('40'),marginBottom:hp("10%")}]}>
            <Text style={styles.buttonText}>Submit for OTP</Text>
          </TouchableOpacity>

        <View style={[styles.Row_margin,{marginTop:hp("5%")}]}>
            <Text style={styles.text}>Already have an account? </Text>
            <View style={{flexDirection:"column"}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                <Text style={styles.text}>Sign In </Text>
                <Image
                  source={require('../Image/icon/Line/rectangle1.png')}
                  style={styles.orange_line}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>here</Text>
        </View>
        <View style={styles.Colom_margin}>
            <View style={{flexDirection:"row"}}>
                <Image
                  source={require('../Image/icon/copyright.png')}
                  style={styles.copy_rigth_image}
                />
                <Text style={styles.copy_rigth}> All copyright reserved to </Text>
              </View>
                <Text style={styles.copy_rigth}> Vrienden Tech Private Limited 2018 </Text>
          </View>

</KeyboardAwareScrollView>    );
  }
}