import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,ScrollView
} from "react-native";
import styles from '../Component/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import ResponsiveImage from 'react-native-responsive-image'

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_pass:"",
      password: "",
      hidePassword:"true"
    };
    
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    return (
<ScrollView  contentContainerStyle={styles.container}
  keyboardShouldPersistTaps='handled'
>
      <ResponsiveImage source={require('../Image/icon/logo_3.png')} initWidth="130" initHeight="90"/>
        <View style={[styles.box,{ height: hp('30%'),marginBottom:"0%"}]}>
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
            value={this.state.new_pass}
            onChangeText={new_pass => this.setState({ new_pass })}
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
        <TouchableOpacity style={[styles.button,{width: wp('25%'),}]} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('SignIn')}}>
        <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row"}}>
        <Image
          source={require('../Image/icon/copyright.png')}
          style={styles.copy_rigth_image}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to Dingg 2018</Text>
          </View>
</ScrollView>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
