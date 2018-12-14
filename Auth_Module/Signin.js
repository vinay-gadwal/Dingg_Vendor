import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,Alert,Keyboard,ScrollView
} from "react-native";
import styles from '../Component/Style'
import RF from "react-native-responsive-fontsize"
import ResponsiveImage from 'react-native-responsive-image'
import {TextInputLayout} from 'rn-textinputlayout';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RadioGroup from 'react-native-radio-buttons-group';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import apis from '../apis/index'
const ccolor_focus = "rgb(255,164,0)" ;
const _width = 110;
const _height = 77;
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
            color: 'rgb(255,164,0)',
            fontFamily:"Muli-ExtraBold"
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
    this.props.navigation.navigate('Crea_pass');
  }
  handlePress = () => {
    this.setState({ processing: true });
    apis.LOGIN_API(this.state.username, this.state.password)
      .then((responseJson) => {
        if(responseJson.success === true) {
          this.props.navigation.navigate('AuthStack');
          console.log(responseJson)
        } else {
          Alert.alert(responseJson.message)
          console.log(this.state.username)
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ processing: false, loginText: 'Try Again' });
      });
  }
  phone(){
    return(
      <View style={styles.Row_divider}>
      <TextInputLayout focusColor="rgb(255,164,0)">
      <Text style={styles.Mobile_number_divider}>+91     </Text>
      </TextInputLayout>
       <Text>   </Text>
       <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
       <TextInput
         onChangeText={username => this.setState({ username })}
         style={[styles.input,{width: wp('52')}]}
         placeholderTextColor="rgb(204,204,204)"
         placeholderStyle={{fontFamily:"Muli-ExtraBold"}}
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
      <View style={{marginTop:hp("5%")}}>
      <ResponsiveImage source={require('../Image/icon/logo_3.png')} initWidth={_width} initHeight={_height}/>
      </View>
      <View style={styles.box}>
         <Text style={[styles.text,{marginRight:wp("44%")}]}>Sign In Using</Text>
         <Text></Text>
         <View style={styles.Radio_button}>
           <RadioGroup radioButtons={this.state.data} onPress={this.onPress}  flexDirection='row' />
         </View>
         {selectedButton}
         <View style = { styles.textBoxBtnHolder } > 
                  <TextInputLayout focusColor="rgb(255,164,0)"  labelFontSize={0.1}>
                      <TextInput 
                      // secureTextEntry = { this.state.hidePassword }
                        placeholder="Enter Password"
                        onChangeText={password => this.setState({ password })}
                        underlineColorAndroid = "transparent"
                        secureTextEntry
                         style = { styles.input }/>
                  </TextInputLayout>
                  <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                        <Image source = { ( this.state.hidePassword ) ? require('../Image/icon/showIcon2.png') : require('../Image/icon/hideicon.png') } style = { styles.btnImage } />
                  </TouchableOpacity>
          </View>
          {/* <Text>{this.state.username}</Text> */}
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Forget_password')}}>
              <Text style={styles.Forget_pass_text}>Forgot Password?</Text>
          </TouchableOpacity>
      </View>
      
          <TouchableOpacity style={styles.button} onPress={this.handlePress}>
             <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
      
      <View style={styles.Row_margin}>
        <Text style={styles.text}>Don't have an account? </Text>
        <View style={{flexDirection:"column"}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.text}>Sign Up </Text>
            <Image
              source={require('../Image/icon/Line/rectangle1.png')}
              style={[styles.orange_line,{width: wp('16%')}]}
            />
            </TouchableOpacity>
        </View>
        <Text style={styles.text}>here</Text>
      </View>
      
      <View style={[styles.Row_margin,{marginBottom:hp("2%")}]}>
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
