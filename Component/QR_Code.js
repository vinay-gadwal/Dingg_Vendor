import React, { Component } from 'react';
import {
  Text,
  View,TouchableOpacity
} from 'react-native';
import styles from './Style'
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'

export default class App extends Component {
  
    state = {
        
      };
    
  render() {
    return (
      <View style={styles.container}>
     <View style={{flexDirection:"column"}}>
            <Text style={[styles.text,{fontSize:RF(3),alignItems:"center"}]}>Scan this Dingg Code</Text>
        <Text style={[styles.text,{color:"rgb(176,176,176)"}]}>Add to Bianna beauty saloon queue</Text>
        </View>
          <View style={[styles.Profile_Container,{justifyContent:"center",alignItems:"center",height:hp("45%"),width:wp("80%"),marginHorizontal:wp("10%")}]}>
          <ResponsiveImage source={require('../Image/main/qrCode3x.jpg')} initWidth="250" initHeight="250"/>

            </View>
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={[styles.button,{marginTop:hp("5"),marginHorizontal:wp("3%")}]} >
                  <Text style={styles.buttonText}>Print QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{marginTop:hp("5"),marginHorizontal:wp("3%")}]}>
                  <Text style={styles.buttonText}>Email QR Code</Text>
        </TouchableOpacity>
            </View>
    </View>
    );
  }
}

