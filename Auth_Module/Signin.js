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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",hidePassword:"true"
    };
    
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    return (
      <View  style={styles.container}>
      {/* <View style={{backgroundColor:"white",height:"10%",width:"100%"}}>
        <Text style={{justifyContent:"center",fontSize:18,color:"black",paddingHorizontal:"40%",paddingVertical:"5%"}}>SIGN IN</Text>
        </View> */}
        <View style={[styles.box,{marginTop:"40%"}]}>
          <TextInput
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            style={styles.input}
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Mobile Number"
          />
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="go"
             secureTextEntry
          />
        <TouchableOpacity >
        <Text style={{color:"rgb(255,163,0)",marginLeft:"30%",fontSize:14,marginBottom:5,marginTop:0,fontWeight:"bold",alignItems:"flex-end"}}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>
    </View>
        <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <View style={{flexDirection:"row"}}>
        <Text style={styles.text}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
        <Text style={styles.text}>Sign Up </Text>
        </TouchableOpacity>
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
        <Text style={{fontSize:16,color:"rgb(152,152,152)"}}> All copyright reserved to Dingg 2018</Text>
          </View>
    </View>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
