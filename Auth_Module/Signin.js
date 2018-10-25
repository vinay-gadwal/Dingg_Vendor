import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from '../Component/Style'
import RF from "react-native-responsive-fontsize"
import {TextInputLayout} from 'rn-textinputlayout';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Login extends Component {
  constructor(props)
   {
    super(props);
    this.state = {
      username: "",
      password: '',hidePassword:"true"
    };  
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    return (
    <View  style={styles.container}>

        <Image
              source={require('../Image/icon/logo_3.png')}
              style={styles.Logo_style}
            />
        
        <View style={[styles.box,{marginBottom:"0%",height: hp('27%'),}]}>
        
         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <TextInputLayout focusColor="rgb(255,164,0)">

              <Text style={{marginTop:"17%",fontSize:18}}>+91     </Text>
              </TextInputLayout>
              <Text>   </Text>
          <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
          <TextInput
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            style={[styles.input,{width: wp('52'), height: hp('4%')}]}
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Mobile Number"
          />
         </TextInputLayout>
          </View>
         
          <View style = { styles.textBoxBtnHolder }>
                <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
                 <TextInput 
                  placeholder="Password"
                  underlineColorAndroid = "transparent" secureTextEntry = { this.state.hidePassword } style = { styles.input }/>
                  </TextInputLayout>
                <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                <Image source = { ( this.state.hidePassword ) ? require('../Image/icon/showIcon2.png') : require('../Image/icon/hideicon.png') } style = { styles.btnImage } />
              </TouchableOpacity>
          </View>
          <Text></Text>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Forget_password')}}>
          <Text style={{color:"rgb(255,163,0)",marginLeft:wp('36%'),fontSize: RF(2),marginBottom:"4%",fontWeight:"bold"}}>Forget Password?</Text>
          </TouchableOpacity>
      </View>
      
      <View style={{marginBottom:"10%"}}>
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
      </View>
      
      <View style={{flexDirection:"row"}}>
        <Text style={styles.text}>Don't have an account? </Text>
        <View style={{flexDirection:"column"}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.text}>Sign Up </Text>
            <Image
              source={require('../Image/icon/Line/rectangle1.png')}
              style={{
                width: wp('16'),
                height: hp('.5%'),marginBottom:"5%",marginTop:"4%"
                // left: 20
              }}
            />
            </TouchableOpacity>
        </View>
        <Text style={styles.text}>here</Text>
      </View>
      
      <View style={{flexDirection:"row"}}>
        <Image
          source={require('../Image/icon/copyright.png')}
          style={{
            width: 16,
            height: 16,
            // left: 20
          }}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to Dingg 2018</Text>
      </View>
      
</View>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
