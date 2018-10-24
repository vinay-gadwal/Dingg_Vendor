import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from '../Component/Style'
import PasswordInputText from 'react-native-hide-show-password-input';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Forget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      New_Password: "",
      Con_Password: "",hidePassword:"true"
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
        <View style={[styles.box,{marginBottom:"20%"}]}>
          <TextInput
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            style={styles.input}
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="New Password"
          />
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="go"
             secureTextEntry
          />
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Forget_password')}}>
        <Text style={{color:"rgb(255,163,0)",marginLeft:"30%",fontSize: RF(2),marginBottom:"4%",fontWeight:"bold"}}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>
    </View>
        <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
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
