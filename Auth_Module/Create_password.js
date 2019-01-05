import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  TextInput,Alert,
  TouchableOpacity,NetInfo,AsyncStorage
} from "react-native";
import styles from '../Component/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import ResponsiveImage from 'react-native-responsive-image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import apis from '../apis/index'
const _width = 110;
const _height = 77;
const GLOBAL = require('../Component/Color');

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Uid:"",
      password: "",
      conf_pass:"",processing:false,token_otp:"",
    }; 
  }
  componentDidMount(){
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const userTokenOTP = await AsyncStorage.getItem('OTPticket');
  this.setState({token_otp:userTokenOTP})
  GLOBAL.token = this.state.token_otp
  console.log(GLOBAL.token)
  };
  handlePress(){  
    NetInfo.isConnected.fetch().done((isConnected) => {
     if(isConnected){
      // GLOBAL.token=this.state.token_otp
      apis.Create_Pass(this.state.password, this.state.Uid,GLOBAL.token)
        .then((responseJson) => {
          console.log(responseJson)
          this.setState({ processing: false, loginText: 'Successfull..' });
          console.log("create password",GLOBAL.token)
          if(responseJson.success === true){
            debugger
            apis.Sign_LOCAL_SET_DATA('Profile_Vendor',JSON.stringify(responseJson.is_profile))
            this.props.navigation.navigate('AddDetails');
            Alert.alert(responseJson.message)
            console.log(responseJson)
            this.setState({ Uid :""});
            this.setState({ password:"" });
            this.setState({ conf_pass:"" });
            apis.LOCAL_Delete_DATA('OTPticket');
          }
          else{
            debugger
            Alert.alert(responseJson.message)
            console.log(responseJson)
          }
        })
        .catch((error) => {
          debugger
          Alert.alert("error")
          this.setState({ processing: false, loginText: 'Try Again' });
        });
     }else{
      Alert.alert("Please check your internet connection")
     }
    });
  }
  
  Password_Validate = () =>
  {
    if(this.state.Uid.trim() == ""){
      Alert.alert("Enter User ID")
    }
    else if(this.state.password.trim() === "" ){
      Alert.alert("Please Enter New Password")
    }
    else if( this.state.conf_pass.trim() === "" ){
      Alert.alert("Please Enter Confirm Password")
    }
    else if( this.state.password.trim() != this.state.conf_pass.trim()){
      Alert.alert("Password and Confirm Password should match")
    }
    else if(this.state.conf_pass.trim() === this.state.password.trim()){
        {this.handlePress()}
      }
     
  }

  render() {
    return (
<KeyboardAwareScrollView  contentContainerStyle={styles.container}
  keyboardShouldPersistTaps='handled'
>
      <View style={[styles.margin_top,styles.Adddetails_image]}>
      <ResponsiveImage source={GLOBAL.Logo} initWidth={GLOBAL.COLOR.Logo_width} initHeight={GLOBAL.COLOR.Logo_height}/>
      </View>
      <View style={[styles.box,styles.padding_bottom]}>
        <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
        <TextInput
            value={this.state.Uid}
            onChangeText={Uid => this.setState({ Uid })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input]}
            placeholder="User ID"
            placeholderTextColor={GLOBAL.COLOR.ORANGE}
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Enter Password"
            returnKeyType="next"
             secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
          <TextInput
            value={this.state.conf_pass}
            onChangeText={conf_pass => this.setState({ conf_pass })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Confirm Password"
            returnKeyType="next"
             secureTextEntry
          />
          </TextInputLayout>
         
    </View>
        {/* <TouchableOpacity onPress={this.Password_Validate}>
        {!this.state.processing ? <View style={styles.button}>
               <Text style={styles.buttonText}>Complete Signup</Text>
             </View> : <Text style={styles.buttonText}>Complete Signup</Text>}
        </TouchableOpacity> */}
        <TouchableOpacity onPress={this.Password_Validate} style={[styles.button,{marginBottom:hp("10%")}]}>
        {/* {!this.state.processing ? <View style={styles.button}> */}
               <Text style={styles.buttonText}>Complete Signup</Text>
             {/* </View> :  <Text style={styles.buttonText}>Submit</Text>} */}
        </TouchableOpacity>
    <View style={styles.Colom_margin}>
        <View style={styles.Row_margin}>
        <ResponsiveImage
          source={GLOBAL.Copy_right} style={{marginTop:hp(".2%")}}
          initWidth={GLOBAL.COLOR.size_12} initHeight={GLOBAL.COLOR.size_12}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to </Text>
          </View>
          <Text style={[styles.copy_rigth]}> Vrienden Tech Private Limited 2018 </Text>
    </View>
</KeyboardAwareScrollView>
    );
  }
}