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

export default class example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
  }
  handlePress = async () => {
    fetch('http://18.217.123.119:3000/api/vendor_signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            OTP:this.state.OTP
        })
  })
      .then((response) => response.json())
      .then((responseJson) => {
   Alert.alert("Author name at 0th index:  ");
      })
      .catch((error) => {
        console.error(error);
      });
  }
 
  render() {
    
    return (
<KeyboardAwareScrollView  contentContainerStyle={styles.container}
  keyboardShouldPersistTaps='handled'
>      
<View style={{paddingVertical:hp("2%")}}>
        <ResponsiveImage source={require('../Image/icon/logo_3.png')} initWidth="110" initHeight="77"/>
        </View>
        <View style={[styles.box_SignUp,{marginTop:hp("3%")}]}>
          <Text style={styles.text}>Enter OTP sent to +91-{this.state.user}</Text>
          <View style={{alignItems:"center"}}>
            <CodeInput
              ref="codeInputRef1"
              secureTextEntry
              className={'border-b'}
              space={10}
              size={30}
              inputPosition='left'
              onFulfill={(code) => this._onFulfill(code)}
              codeLength={4}
              activeColor="rgb(255,164,0)"
              inactiveColor="black"
            />
          </View>
        </View>
        {/* onPress={() => {this.props.navigation.navigate('Crea_pass')}} */}
        <TouchableOpacity onPress={this.handlePress.bind(this)} style={[styles.button,{width: wp('40'),marginVertical:hp("3%")}]}>
            <Text style={styles.buttonText}>Submit for OTP</Text>
          </TouchableOpacity>

        <View style={{flexDirection:"row",marginTop:hp("5%")}}>
        <Text style={styles.text}>Already have an account? </Text>
        <View style={{flexDirection:"column"}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
        <Text style={styles.text}>Sign In </Text>
        <Image
          source={require('../Image/icon/Line/rectangle1.png')}
          style={{
            width: wp('12.5%'),
            height: hp('.3%'),marginBottom:hp("1%"),marginTop:hp(".5%")
            // left: 20
          }}
        />
        </TouchableOpacity>
        </View>
        <Text style={styles.text}>here</Text>
        </View>
        <View style={{flexDirection:"row",marginTop:hp("5%")}}>
        <Image
          source={require('../Image/icon/copyright.png')}
          style={styles.copy_rigth_image}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to </Text>
          </View>
          <Text style={[styles.copy_rigth]}> Vrienden Tech Private Limited 2018 </Text>

        {/* <Spinner
          visible={this.state.spinner}
          textContent={'One moment...'}
          textStyle={{ color: '#fff' }} /> */}

</KeyboardAwareScrollView>    );
  }
}

AppRegistry.registerComponent('example', () => example);