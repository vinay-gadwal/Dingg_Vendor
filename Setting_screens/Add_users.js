import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  AppRegistry,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from '../Component/Style'
import RF from "react-native-responsive-fontsize"
import {TextInputLayout} from 'rn-textinputlayout';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Login extends Component {
  constructor(props)
   {
    super(props);
    this.state = {
      First_name: "",
      Last_name: '',
      User_id:"",
      Email_id:"",
      password:"",
      Con_pass:"",
      mob_no:'',      
    };  
  }
  render() {
    return (
   <ScrollView  contentContainerStyle={styles.container}
                 keyboardShouldPersistTaps='handled'>      
        <View style={[styles.box,{marginBottom:"0%",height: hp('65%'),marginTop:hp("3%")}]}>
        <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
        <TextInput
            value={this.state.First_name}
            onChangeText={First_name => this.setState({ First_name })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input,{height:hp("3")}]}
            placeholder="First Name"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
        <TextInput
            value={this.state.Last_name}
            onChangeText={Last_name => this.setState({ Last_name })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input,{height:hp("3")}]}
            placeholder="Last Name"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
        <TextInput
            value={this.state.User_id}
            onChangeText={User_id => this.setState({ User_id })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input,{height:hp("3")}]}
            placeholder="User ID"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
        <TextInput
            value={this.state.Email_id}
            onChangeText={Email_id => this.setState({ Email_id })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input,{height:hp("3")}]}
            placeholder="Email ID"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
        <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input,{height:hp("3")}]}
            placeholder="Password"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
        <TextInput
            value={this.state.Con_pass}
            onChangeText={Con_pass => this.setState({ Con_pass })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input,{height:hp("3")}]}
            placeholder="Confirm Passwaord"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <TextInputLayout focusColor="rgb(255,164,0)">

              <Text style={{marginTop:"17%",fontSize: RF(2.2),fontFamily:'Muli-Bold',}}>+91     </Text>
              </TextInputLayout>
              <Text>   </Text>
          <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
          <TextInput
            value={this.state.mob_no}
            onChangeText={mob_no => this.setState({ mob_no })}
            style={[styles.input,{width: wp('52')}]}
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="done"
            underlineColorAndroid='transparent'
            ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Enter Mobile Number"
          />
         </TextInputLayout>
          </View> 
         
      </View>     
      <View style={{marginBottom:"3%"}}>
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
      </View>    
      </ScrollView>   
       );
  }
}

AppRegistry.registerComponent("Login", () => Login);