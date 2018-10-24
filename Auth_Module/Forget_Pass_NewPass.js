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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {

      password: "",hidePassword:"true"
    };
    
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    return (
      <View  style={[styles.container]}>
      <Image
          source={require('../Image/icon/logo_3.png')}
          style={styles.Logo_style}
        />
        <View style={[styles.box,{ height: hp('20%'),marginBottom:"0%"}]}>
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Enter New Password"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="go"
             secureTextEntry
          />
           <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Confirm New Password"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="go"
             secureTextEntry
          />
        
    </View>
    <View style={{marginBottom:"40%"}}> 
        <TouchableOpacity style={[styles.button,{width: wp('50%'),}]} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('Forget_password')}}>
        <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
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
