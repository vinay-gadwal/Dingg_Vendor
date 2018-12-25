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
const GLOBAL = require('../Component/Color');

export default class Login extends Component {
  constructor(props)
   {
    super(props);
    this.state = {
      username: "",
      password: "",Email_password:"",
      hidePassword:"true",processing:false,
      data: [ 
        {
            label: 'Mobile Number',
            value:this.phone(),
            color: GLOBAL.COLOR.ORANGE,
            fontFamily:"Muli-ExtraBold"
        },
        {
            label: 'Email ID',
            value:this.email(),
            color: GLOBAL.COLOR.ORANGE
        }, 
           
            ],
    };  
  }
  componentDidMount() {
    apis.LOCAL_GET_DATA('ticket').then((value) => {
      if (value) {
        this.setState({ processing: true });
        this.props.navigation.dangerouslyGetParent().navigate('AuthStack');
      }
    }).catch((error) => {
      Alert.alert(error);
      this.setState({ processing: false });
    });
    apis.OTP_LOCAL_GET_DATA('OTPticket').then((value) => {
      GLOBAL.token = value;
      console.log(GLOBAL.DetailsToken)
      if (value!= null) {
        this.props.navigation.dangerouslyGetParent().navigate('Crea_pass');
      }
    }).catch((error) => {
      Alert.alert(error);
      this.setState({ processing: false });
    });
  }
  
    handlePress = () => {
      if(this.state.username.trim() === "")
      {
          Alert.alert("Please Enter Mobile Number or Username")
      }
      else if(this.state.password.trim() === ""){
        Alert.alert("Please Enter Password")
      }
      else{
    this.setState({ processing: true });
    apis.LOGIN_API(this.state.username, this.state.password)
      .then((responseJson) => {
        this.setState({ processing: false, loginText: 'Successfull..' });
        if(responseJson.success === true) {
          apis.Sign_LOCAL_SET_DATA('ticket',responseJson.token).then(() => {
            this.props.navigation.navigate('AuthStack');    
            }).catch((error) => {
              console.error(error);
              this.setState({ processing: false });
            });
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
}
  phone(){
    return(
      <View style={styles.Only_Column}>
      <View style={styles.Row_divider}>
      <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}>
      <Text style={styles.Mobile_number_divider}>+91     </Text>
      </TextInputLayout>
       <Text>   </Text>
       <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
       <TextInput
         onChangeText={username => this.setState({ username })}
         style={[styles.Mobile_nput]}
        //  placeholderTextColor={GLOBAL.COLOR.GRAY}
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
       <View style = { styles.textBoxBtnHolder } > 
       <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}  labelFontSize={0.1}>
           <TextInput 
           // secureTextEntry = { this.state.hidePassword }
             placeholder="Enter Password"
             onChangeText={password => this.setState({ password })}
             underlineColorAndroid = "transparent"
             secureTextEntry
             // placeholderStyle={{ fontFamily: "AnotherFont", borderColor: 'red' }}
              style = { styles.input }/>
       </TextInputLayout>
       {/* <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
             <Image source = { ( this.state.hidePassword ) ? require('../Image/icon/showIcon2.png') : require('../Image/icon/hideicon.png') } style = { styles.btnImage } />
       </TouchableOpacity> */}
</View>
</View>
    )
  }
  email(){
    return(
      <View style={styles.Only_Column}>
      <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
       <TextInput
        //  value={this.state.username}
         onChangeText={username => this.setState({ username })}
         style={styles.input}
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
      <View style = { styles.textBoxBtnHolder } > 
       <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}  labelFontSize={0.1}>
           <TextInput 
           // secureTextEntry = { this.state.hidePassword }
             placeholder="Enter Password"
            //  onChangeText={password => this.setState({ password })}
             underlineColorAndroid = "transparent"
             secureTextEntry
             // placeholderStyle={{ fontFamily: "AnotherFont", borderColor: 'red' }}
              style = { styles.input }
              />
       </TextInputLayout>
       {/* <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
             <Image source = { ( this.state.hidePassword ) ? require('../Image/icon/showIcon2.png') : require('../Image/icon/hideicon.png') } style = { styles.btnImage } />
       </TouchableOpacity> */}
</View>
  </View>
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
      <View style={styles.margin_top}>
      <ResponsiveImage source={GLOBAL.Logo} initWidth={GLOBAL.COLOR.Logo_width} initHeight={GLOBAL.COLOR.Logo_height}/>
      </View>
      <View style={styles.box}>
         <Text style={[styles.text,{marginRight:wp("44%")}]}>Sign In Using</Text>
         <Text></Text>
         <View style={styles.Radio_button}>
           <RadioGroup radioButtons={this.state.data} onPress={this.onPress}  flexDirection='row' />
         </View>
         {selectedButton}
          {/* <Text>{this.state.username}</Text> */}
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Forget_password')}}>
              <Text style={[styles.text_orange,{marginLeft:"44%"}]}>Forgot Password?</Text>
          </TouchableOpacity>
      </View>
      
          {/* <TouchableOpacity onPress={this.handlePress}>
             {!this.state.processing ? <View style={styles.button}>
               <Text style={styles.buttonText}>Sign In</Text>
             </View> : <ResponsiveImage source={GLOBAL.Loader} initWidth={GLOBAL.COLOR.size_75} initHeight={GLOBAL.COLOR.size_75}/>}
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.button} onPress={this.handlePress}>
               <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
      
      <View style={styles.Row_margin}>
        <Text style={styles.text}>Don't have an account? </Text>
        <View style={styles.Only_Column}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.text}>Sign Up </Text>
            <Image
                source={GLOBAL.rectangle_line}              
                style={[styles.orange_line]}
            />
            </TouchableOpacity>
        </View>
        <Text style={styles.text}>here</Text>
      </View>
      
      <View style={[styles.Row_margin,{marginBottom:hp("1.5%")}]}>
        <ResponsiveImage
          source={GLOBAL.Copy_right}
          initWidth={GLOBAL.COLOR.size_12} initHeight={GLOBAL.COLOR.size_12}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to Dingg 2018</Text>
      </View>
</KeyboardAwareScrollView>
    );
  }
}
