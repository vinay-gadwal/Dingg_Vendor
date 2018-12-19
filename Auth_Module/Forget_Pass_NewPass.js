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
const _width = 110;
const _height = 77;
const GLOBAL = require('../Component/Color');

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
       <View style={styles.margin_top}>
        <ResponsiveImage source={GLOBAL.Logo} initWidth={GLOBAL.COLOR.Logo_width} initHeight={GLOBAL.COLOR.Logo_height}/>
        </View>
        <View style={[styles.box,{paddingBottom:hp("4%")}]}>
        <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Enter New Password"
            returnKeyType="next"
             secureTextEntry
          />
          </TextInputLayout>
          <Text></Text>
          <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
           <TextInput
            value={this.state.new_pass}
            onChangeText={new_pass => this.setState({ new_pass })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Confirm Password"
            returnKeyType="next"
             secureTextEntry
          />
        </TextInputLayout>
    </View>
        <TouchableOpacity style={[styles.button,{width: wp('25%'),}]} onPress={this.Password_Validate}>
        <Text style={styles.buttonText}>Submit</Text>
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
