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
const GLOBAL = require('../Component/Color');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Login extends Component {
  constructor(props)
   {
    super(props);
  }
render() {
    return (
    <View  style={styles.container}>   
        <View style={{paddingVertical:hp("5%")}}>
        <ResponsiveImage source={require('../Image/icon/illustration3x.png')} initWidth="100" initHeight="100"/>
        </View>    
       <Text style={[styles.text,{marginHorizontal:hp("8%"),justifyContent:"center"}]}>Thank you for submitting the</Text>
       <Text style={[styles.text,{marginHorizontal:hp("10%"),justifyContent:"center"}]}>information.</Text>
       <Text style={[styles.text,{marginHorizontal:hp("5%"),alignItems:"flex-end"}]}>You are now all set to explore </Text>
       <Text style={[styles.text,{marginHorizontal:hp("10%"),justifyContent:"center",marginBottom:hp("8%")}]}>your business.</Text>
      <View style={{marginBottom:hp("40%")}}>
          <TouchableOpacity style={[styles.button,{width:wp("30%")}]} onPress={() =>{this.props.navigation.navigate('AuthStack')}}>
          <Text style={styles.buttonText}>Let's Go</Text>
          </TouchableOpacity>
      </View>  
</View>
    );
  }
}