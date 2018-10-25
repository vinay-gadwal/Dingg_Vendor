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
import {TextInputLayout} from 'rn-textinputlayout';

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Uid:"",conf_pass:"",
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
      <Image
          source={require('../Image/icon/logo_3.png')}
          style={styles.Logo_style}
        />
        <View style={[styles.box,{ height: hp('30%')}]}>
        <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
        <TextInput
            value={this.state.Uid}
            onChangeText={Uid => this.setState({ Uid })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="User ID"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="go"
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
            placeholder="Enter New Password"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="go"
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
            placeholder="Confirm New Password"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="go"
             secureTextEntry
          />
        </TextInputLayout>
    </View>
    <View style={{marginBottom:"20%"}}>
        <TouchableOpacity style={[styles.button,{width: wp('50%'),}]} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('AddDetails')}}>
        <Text style={styles.buttonText}>Complete Signup</Text>
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
