import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,Alert,
  TouchableOpacity,KeyboardAvoidingView,ScrollView
} from "react-native";
import styles from '../Component/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import ResponsiveImage from 'react-native-responsive-image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Uid:"",
      password: "",
      conf_pass:"",
      // hidePassword:"true"
    };
    
  }

  handlePress(){  
    fetch('http://18.217.123.119:3000/api/vendor_save_password', {
        method: 'POST',
        headers: {
           "content-type": "application/json",
          "authorization": GLOBAL.token,
          "cache-control": "no-cache",
          "postman-token": "d8d5eeac-2172-38f3-2441-1b3f2d8d715e"
        },
        body: JSON.stringify({
          password : this.state.password, 
          vendor_unique_id:this.state.Uid
        })
  })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        if(responseJson.success === true){
          this.props.navigation.navigate('AddDetails');
        }
        else{
          Alert.alert(responseJson.message)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  Password_Validate = () =>
  {
    if(this.state.Uid == ""){
      Alert.alert("Enter User ID")
    }
    else if(this.state.conf_pass === this.state.password){
        {this.handlePress()}
      }
      else{
        this.setState({conf_pass:""})
        Alert.alert("Confirm Password is Different")
      }
  }

  render() {
    return (
<KeyboardAwareScrollView  contentContainerStyle={styles.container}
  keyboardShouldPersistTaps='handled'
>
<View style={{paddingVertical:hp("2%")}}>
        <ResponsiveImage source={require('../Image/icon/logo_3.png')} initWidth="110" initHeight="77"/>
        
        </View>
                <View style={[styles.box,{marginTop:hp("3%")}]}>
        <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
        <TextInput
            value={this.state.Uid}
            onChangeText={Uid => this.setState({ Uid })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input]}
            placeholder="User ID"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
             secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
          <TextInput
            value={this.state.conf_pass}
            onChangeText={conf_pass => this.setState({ conf_pass })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
             secureTextEntry
          />
          </TextInputLayout>
         
    </View>
    <View style={{marginBottom:"10%",marginTop:hp("3%")}}>
        <TouchableOpacity style={[styles.button,{width: wp('50%'),}]} onPress={this.Password_Validate}>
        <Text style={styles.buttonText}>Complete Signup</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",marginTop:hp("5%")}}>
        <Image
          source={require('../Image/icon/copyright.png')}
          style={styles.copy_rigth_image}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to </Text>
          </View>
          <Text style={[styles.copy_rigth]}> Vrienden Tech Private Limited 2018 </Text>

</KeyboardAwareScrollView>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
