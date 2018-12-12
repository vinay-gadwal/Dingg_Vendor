import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,ScrollView,Alert
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
      new_pass:"",
      password: "",
      hidePassword:"true"
    };
    
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  handlePress(){   
    apis.Reset_pass(GLOBAL.Mobile1,this.state.password)
        .then((responseJson) => {
          console.log(responseJson)
          if(responseJson.success === true){
            Alert.alert(responseJson.message)
            this.props.navigation.navigate('SignIn');
          }
          else{
            Alert.alert(responseJson.message)
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  Password_Validate = () =>
  {
     if(this.state.password === this.state.new_pass){
        {this.handlePress()}
      }
      else{
        this.setState({new_pass:""})
        Alert.alert("Confirm Password is Different")
      }
  }

  render() {
    return (
<KeyboardAwareScrollView  contentContainerStyle={styles.container}
  keyboardShouldPersistTaps='handled'
>
<View style={{paddingVertical:hp("2%")}}>
        <ResponsiveImage source={require('../Image/icon/logo_3.png')} initWidth="110" initHeight="77"/>
        
        </View>
                <View style={[styles.box,{ marginTop:hp("3%")}]}>
        <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Enter New Password"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
             secureTextEntry
          />
          </TextInputLayout>
          <Text></Text>
          <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
           <TextInput
            value={this.state.new_pass}
            onChangeText={new_pass => this.setState({ new_pass })}
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
    <View style={{marginBottom:hp("13%"),marginTop:hp("2%")}}> 
        <TouchableOpacity style={[styles.button,{width: wp('25%'),}]} onPress={this.Password_Validate}>
        <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:"column",alignItems:"center"}}>
        <View style={{flexDirection:"row",marginTop:hp("5%")}}>
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

AppRegistry.registerComponent("Login", () => Login);
