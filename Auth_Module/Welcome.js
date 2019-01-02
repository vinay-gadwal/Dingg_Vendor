import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  View,
  TouchableOpacity,AsyncStorage
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
  componentDidMount(){
    AsyncStorage.setItem('Profile', JSON.stringify(true))
    AsyncStorage.setItem('Registered', JSON.stringify(true))
  }
render() {
    return (
    <View  style={styles.container}>   
        <ResponsiveImage source={GLOBAL.Welcome_icon} style={[styles.MARGIN_VERticle]} initWidth={GLOBAL.COLOR.Size_100} initHeight={GLOBAL.COLOR.Size_100}/>
       <Text style={[styles.text,{marginHorizontal:hp("8%"),justifyContent:"center"}]}>Thank you for submitting the</Text>
       <Text style={[styles.text,{marginHorizontal:hp("10%"),justifyContent:"center"}]}>information.</Text>
       <Text style={[styles.text,{marginHorizontal:hp("5%"),alignItems:"flex-end"}]}>You are now all set to explore </Text>
       <Text style={[styles.text,{marginHorizontal:hp("10%"),justifyContent:"center",marginBottom:hp("8%")}]}>your business.</Text>
          <TouchableOpacity style={[styles.button,{marginBottom:hp("40%")}]} onPress={() =>{this.props.navigation.navigate('AuthStack')}}>
          <Text style={styles.buttonText}>Let's Go</Text>
          </TouchableOpacity>
    </View>
    );
  }
}