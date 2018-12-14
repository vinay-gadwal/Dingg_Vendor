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
import apis from '../apis/index'

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Uid:"",
      password: "",
      conf_pass:"",
    };
    
  }

  handlePress(){  
    apis.Create_Pass(this.state.password, this.state.Uid,GLOBAL.token)
      .then((responseJson) => {
        console.log(responseJson)
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
      <View style={{marginVertical:hp("4%")}}>
      <ResponsiveImage source={require('../Image/icon/logo_3.png')} initWidth="110" initHeight="77"/>
      </View>
      <View style={[styles.box,{paddingBottom:hp("4%")}]}>
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
    <View style={{marginBottom:"12%"}}>
        <TouchableOpacity style={[styles.button,{width: wp('50%'),}]} onPress={this.Password_Validate}>
        <Text style={styles.buttonText}>Complete Signup</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.Colom_margin}>
        <View style={styles.Row_margin}>
        <Image
          source={require('../Image/icon/copyright.png')}
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