import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  TextInput,Alert,
  TouchableOpacity,NetInfo,AsyncStorage
} from "react-native";
import styles from '../Component/Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import ResponsiveImage from 'react-native-responsive-image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import apis from '../apis/index'
const GLOBAL = require('../Component/Color');

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Mobile:"",
      password: "",
    }; 
  }
  componentDidMount(){
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const userTokenMobile = await AsyncStorage.getItem('MobileTicket');
    this.setState({Mobile:userTokenMobile})
  };
  handlePress(){  
    NetInfo.isConnected.fetch().done((isConnected) => {
     if(isConnected){
         debugger
      apis.Reset_password(this.state.Mobile, this.state.password)
        .then((responseJson) => {
          console.log(responseJson)
          if(responseJson.success === true){
            Alert.alert(responseJson.message)
            apis.LOCAL_Delete_DATA('ticket')
            AsyncStorage.removeItem('Registered');
            AsyncStorage.removeItem('MobileTicket');
            this.props.navigation.navigate('SignIn');            
          }
          else{
            debugger
            Alert.alert(responseJson.message)
            console.log(responseJson)
          }
        })
        .catch((error) => {
          debugger
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
      Alert.alert("Please Enter New Password")
    }
    else {
        {this.handlePress()}
      }
     
  }

  render() {
    return (
<KeyboardAwareScrollView  contentContainerStyle={styles.container}
  keyboardShouldPersistTaps='handled'
>
      <View style={[styles.box,{marginTop:hp("4%"),paddingVertical:hp("5%"),paddingBottom:hp("8%")}]}>
      <View style={styles.Row_divider}>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}>

                      <Text style={styles.Mobile_number_divider}>+91     </Text>
                  </TextInputLayout>
                          <Text>   </Text>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                      <Text style={[styles.Mobile_number_divider,{width:wp("53%"),paddingBottom:hp("1%")}]}>{this.state.Mobile}</Text>
                </TextInputLayout>
                  </View>
          <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            style={styles.input}
            placeholder="Enter New Password"
            returnKeyType="next"
             secureTextEntry
          />
          </TextInputLayout>
         
    </View>
        <TouchableOpacity onPress={this.Password_Validate} style={[styles.button,{marginBottom:hp("45%")}]}>
               <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
</KeyboardAwareScrollView>
    );
  }
}