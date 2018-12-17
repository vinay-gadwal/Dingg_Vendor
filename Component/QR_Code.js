import React, { Component } from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import styles from './Style'
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
const GLOBAL = require('../Component/Color');
const initWidth=250
const initHeight=250
export default class App extends Component {
  render() {return (
      <View style={styles.container}>
        <View style={[styles.flat_box_colum,{alignItems:"center"}]}>
            <Text style={styles.Big_text}>Scan this Dingg Code</Text>
            <Text style={[styles.grey_text,{fontSize:RF(2.2)}]}>Add to Bianna beauty saloon queue</Text>
        </View>
        <View style={styles.QR_Code}>
            <ResponsiveImage source={GLOBAL.QR_Code} initWidth={initWidth} initHeight={initHeight}/>
        </View>
        <View style={[styles.Row_divider]}>
            <TouchableOpacity style={[styles.QR_button]} >
             <Text style={styles.buttonText}>Print QR Code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.QR_button]}>
              <Text style={styles.buttonText}>Email QR Code</Text>
            </TouchableOpacity>
        </View>
    </View>);}}

