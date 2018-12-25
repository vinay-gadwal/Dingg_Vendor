import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  TextInput,Alert,
  TouchableOpacity,
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
      conf_pass:"",processing:false,
    }; 
  }
  handlePress(){  
    this.setState({ processing: true });
    apis.Create_Pass(this.state.password, this.state.Uid,GLOBAL.token)
      .then((responseJson) => {
        this.setState({ processing: false, loginText: 'Successfull..' });
        console.log(responseJson)
        console.log(GLOBAL.token)
        if(responseJson.success === true){
          this.props.navigation.navigate('AddDetails');
          console.log(responseJson)
        }
        else{
          Alert.alert(responseJson.message)
          console.log(responseJson)
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ processing: false, loginText: 'Try Again' });
      });
  }
  
  Password_Validate = () =>
  {
    if(this.state.conf_pass == '' && this.state.password == null ){
      Alert.alert("Please enter password")
    }
   else if(this.state.Uid == ""){
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
      <View style={styles.margin_top}>
      <ResponsiveImage source={GLOBAL.Logo} initWidth={GLOBAL.COLOR.Logo_width} initHeight={GLOBAL.COLOR.Logo_height}/>
      </View>
      <View style={styles.box}>
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
        <TouchableOpacity onPress={this.Password_Validate}>
        {!this.state.processing ? <View style={styles.button}>
               <Text style={styles.buttonText}>Complete Signup</Text>
             </View> : <ResponsiveImage source={GLOBAL.Loader} initWidth={GLOBAL.COLOR.size_75} initHeight={GLOBAL.COLOR.size_75}/>}
        </TouchableOpacity>
    <View style={styles.Colom_margin}>
        <View style={styles.Row_margin}>
        <Image
         source={GLOBAL.Copy_right}
         style={styles.copy_rigth_image}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to </Text>
          </View>
          <Text style={[styles.copy_rigth]}> Vrienden Tech Private Limited 2018 </Text>
    </View>
</KeyboardAwareScrollView>
    );
  }
}