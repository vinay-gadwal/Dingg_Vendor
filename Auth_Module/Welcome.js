import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import styles from '../Component/Style'
import RF from "react-native-responsive-fontsize"
import ResponsiveImage from 'react-native-responsive-image'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Login extends Component {
  constructor(props)
   {
    super(props);
  }



  render() {
    return (
    <View  style={styles.container}>
        
        <View style={{paddingVertical:hp("8%")}}>
        <ResponsiveImage source={require('../Image/icon/illustration2x.png')} initWidth="130" initHeight="130"/>
        </View>
       
       <Text style={[styles.text,{marginHorizontal:hp("10%"),justifyContent:"center",marginBottom:"0%"}]}>Thank you for submitting the information.</Text>
      
       <Text style={[styles.text,{marginHorizontal:hp("10%"),alignItems:"flex-end",marginBottom:"15%"}]}>You are now all set to explore your business.</Text>
      
      <View style={{marginBottom:"80%"}}>
          <TouchableOpacity style={[styles.button,{width:wp("30%")}]} onPress={() =>{this.props.navigation.navigate('AuthStack')}}>
          <Text style={styles.buttonText}>Let's Go</Text>
          </TouchableOpacity>
      </View>
      
     
  
</View>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
