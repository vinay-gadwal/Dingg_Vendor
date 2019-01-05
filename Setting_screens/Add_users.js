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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const GLOBAL = require('../Component/Color');

export default class Add_User extends Component {
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
   <KeyboardAwareScrollView  contentContainerStyle={styles.container}
                 >      
        <View style={[styles.box,{marginTop:hp("4%")}]}>
        <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
        <TextInput
            value={this.state.First_name}
            onChangeText={First_name => this.setState({ First_name })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input]}
            placeholder="First Name"
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
        <TextInput
            value={this.state.Last_name}
            onChangeText={Last_name => this.setState({ Last_name })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input]}
            placeholder="Last Name"
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
        <TextInput
            value={this.state.User_id}
            onChangeText={User_id => this.setState({ User_id })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input]}
            placeholder="User ID"
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
        <TextInput
            value={this.state.Email_id}
            onChangeText={Email_id => this.setState({ Email_id })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input]}
            placeholder="Email ID"
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
            style={[styles.input]}
            placeholder="Password"
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
          <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
        <TextInput
            value={this.state.Con_pass}
            onChangeText={Con_pass => this.setState({ Con_pass })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input]}
            placeholder="Confirm Passwaord"
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}>

              <Text style={styles.Mobile_number_divider}>+91     </Text>
              </TextInputLayout>
              <Text>   </Text>
          <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
          <TextInput
            value={this.state.mob_no}
            onChangeText={mob_no => this.setState({ mob_no })}
            style={[styles.input,{width: wp('52')}]}
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
          <TouchableOpacity style={[styles.button,{marginBottom:hp("10%")}]} >
          <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
      </KeyboardAwareScrollView>   
       );
  }
}