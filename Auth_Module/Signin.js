import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,KeyboardAvoidingView,Keyboard,ScrollView
} from "react-native";
import styles from '../Component/Style'
import RF from "react-native-responsive-fontsize"
import ResponsiveImage from 'react-native-responsive-image'
import {TextInputLayout} from 'rn-textinputlayout';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RadioGroup from 'react-native-radio-buttons-group';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Login extends Component {
  constructor(props)
   {
    super(props);
    this.state = {
      username: "",
      password: '',
      hidePassword:"true",
      data: [ 
        {
            label: 'Mobile Number',
            value:this.phone(),
            color: 'rgb(255,164,0)'
        },
        {
            label: 'Email ID',
            value:this.email(),
            color: 'rgb(255,164,0)'
        }, 
           
            ],
    };  
  }
  componentDidMount(){
    // this.props.navigation.navigate('AddDetails')
  }
  phone(){
    return(
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <TextInputLayout focusColor="rgb(255,164,0)">
      <Text style={{marginTop:"17%",fontSize: RF(2.2),fontFamily:'Muli-Bold',}}>+91     </Text>
      </TextInputLayout>
       <Text>   </Text>
       <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
       <TextInput
        //  value={this.state.username}
         onChangeText={username => this.setState({ username })}
         style={[styles.input,{width: wp('52')}]}
         placeholderTextColor="rgb(204,204,204)"
         returnKeyType='done'
         underlineColorAndroid='transparent'
         ref={input => (this.emailInput = input)}
         // onSubmitEditing={() => this.passwordCInput.focus()}
         keyboardType="numeric"
         autoCapitalize="none"
         autoCorrect={false}
         placeholder="Mobile Number"
       />
      </TextInputLayout>
      </View>
    )
  }
  email(){
    return(
      <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
       <TextInput
        //  value={this.state.username}
         onChangeText={username => this.setState({ username })}
         style={[styles.input]}
         placeholderTextColor="rgb(204,204,204)"
         returnKeyType='next'
         underlineColorAndroid='transparent'
         ref={input => (this.emailInput = input)}
         // onSubmitEditing={() => this.passwordCInput.focus()}
         keyboardType="email-address"
         autoCapitalize="none"
         autoCorrect={false}
         placeholder="Enter Email ID"
       />
      </TextInputLayout>
    )
  }
  uid(){
    return(
      <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
      <TextInput
       //  value={this.state.username}
        onChangeText={username => this.setState({ username })}
        style={[styles.input,{width: wp('70')}]}
        placeholderTextColor="rgb(204,204,204)"
        returnKeyType='next'
        underlineColorAndroid='transparent'
        ref={input => (this.emailInput = input)}
        // onSubmitEditing={() => this.passwordCInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="User ID"
      />
     </TextInputLayout>
    )
  }
  onPress = data => this.setState({ data });
  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.phone()
    return (
    <KeyboardAwareScrollView  contentContainerStyle={styles.container}
                 keyboardShouldPersistTaps='handled'>
                 <View style={{paddingVertical:hp("2%")}}>
        <ResponsiveImage source={require('../Image/icon/logo_3.png')} initWidth="130" initHeight="90"/>
        
        </View>
        <View style={[styles.box,{marginTop:"2%",height: hp('39%'),}]}>
        <Text style={[styles.text,{alignItems:"flex-start",marginRight:wp("40%")}]}>Sign In Using</Text>
         <Text></Text>
         <RadioGroup radioButtons={this.state.data} onPress={this.onPress}  flexDirection='row' />
         {selectedButton}
          <View style = { styles.textBoxBtnHolder } > 
                  <TextInputLayout focusColor="rgb(255,164,0)"  labelFontSize={0.1}>
                      <TextInput 
                      // secureTextEntry = { this.state.hidePassword }
                        placeholder="Enter Password"
                        underlineColorAndroid = "transparent"
                         style = { styles.input }/>
                  </TextInputLayout>
                  <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                        <Image source = { ( this.state.hidePassword ) ? require('../Image/icon/showIcon2.png') : require('../Image/icon/hideicon.png') } style = { styles.btnImage } />
                  </TouchableOpacity>
          </View>
          {/* <Text>{this.state.username}</Text> */}
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Forget_password')}}>
          <Text style={{color:"rgb(255,163,0)",marginLeft:wp('40%'),fontSize: RF(2),marginBottom:hp("4%"),fontFamily:'Muli-Bold'}}>Forgot Password?</Text>
          </TouchableOpacity>
      </View>
      
      <View style={{marginTop:hp("3%")}}>
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
      </View>
      
      <View style={{flexDirection:"row",marginTop:hp("2%")}}>
        <Text style={styles.text}>Don't have an account? </Text>
        <View style={{flexDirection:"column"}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.text}>Sign Up </Text>
            <Image
              source={require('../Image/icon/Line/rectangle1.png')}
              style={{
                width: wp('13.5'),
                height: hp('.3%'),marginBottom:hp("1%"),marginTop:hp("0.5%")
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
          style={styles.copy_rigth_image}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to Dingg 2018</Text>
      </View>
      
</KeyboardAwareScrollView>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
