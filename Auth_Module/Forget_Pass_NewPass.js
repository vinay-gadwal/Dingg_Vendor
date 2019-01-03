import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,ScrollView,Alert,NetInfo
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
      new_pass:"",
      password: "",
      hidePassword:"true",processing:false,
    };
  }
  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  handlePress(){   
    NetInfo.isConnected.fetch().done((isConnected) => {
      if(isConnected){
        this.setState({ processing: true });
        apis.Reset_pass(GLOBAL.Mobile1,this.state.password)
            .then((responseJson) => {
              this.setState({ processing: false, loginText: 'Successfull..' });
              console.log(responseJson)
              if(responseJson.success === true){
                Alert.alert(responseJson.message)
                this.props.navigation.navigate('SignIn');
                console.log(responseJson)
                this.setState({ password:"" });
                this.setState({ new_pass :""});
              }
              else{
                Alert.alert(responseJson.message)
                console.log(responseJson)
              }
            })
            .catch((error) => {
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
    if(this.state.password.trim() === "" ){
      Alert.alert("Please enter password.")
    }
    else if(this.state.new_pass.trim() === "" ){
      Alert.alert("Please enter confirm password.")
    }
    else if(this.state.password.trim() === this.state.new_pass.trim()){
        {this.handlePress()}
      }
      else if(this.state.password.trim() != this.state.new_pass.trim() ){
        Alert.alert("Password and ConfirmPassword should be same.")
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
        <View style={[styles.box,{paddingBottom:hp("6%")}]}>
        <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Enter New Password"
            returnKeyType="next"
             secureTextEntry
          />
          </TextInputLayout>
          <Text></Text>
          <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
           <TextInput
            value={this.state.new_pass}
            onChangeText={new_pass => this.setState({ new_pass })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Confirm Password"
            returnKeyType="next"
             secureTextEntry
          />
        </TextInputLayout>
    </View>
        <TouchableOpacity onPress={this.Password_Validate} style={[styles.button,{marginBottom:hp("15%")}]}>
        {/* {!this.state.processing ? <View style={styles.button}> */}
               <Text style={styles.buttonText}>Submit</Text>
             {/* </View> :  <Text style={styles.buttonText}>Submit</Text>} */}
        </TouchableOpacity>
        <View style={styles.Colom_margin}>
        <View style={styles.Row_margin}>
        <ResponsiveImage
          source={GLOBAL.Copy_right}
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
