import React, { Component } from 'react';
import {
  Text,
  View,Image,
  ScrollView,TouchableOpacity
} from 'react-native';
import styles from './Style'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import ResponsiveImage from 'react-native-responsive-image'
import Switch from 'react-native-customisable-switch';

export default class App extends Component {
    state = {
      
      };
     

   
  render() {
   
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}} horizontal={false}>
          <Text style={[styles.text,{marginVertical:hp("4%"),fontSize:RF(3),marginHorizontal:wp("10%")}]}>Select a category to continue</Text>
          <View style={[styles.Profile_Container,{paddingVertical:hp("2%"),marginTop:hp("5%")}]}>
            <TouchableOpacity >
             <View style={{justifyContent:"space-between"}}>
                   <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                   <Image
                                source={require('../Image/new_images/salonIcon3x.png')}
                                style={[styles.setting_Image,{marginLeft:wp("5%"),marginRight:wp("0%")}]}
                    />
                    <Text style={[styles.setting_text,{marginRight:wp("50%")}]}>Salon</Text>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </View>
                    <View style={{marginHorizontal:"5%"}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
             </View>  
            </TouchableOpacity>
            <TouchableOpacity >
            <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                   <Image
                                source={require('../Image/new_images/doctorIcon3x.png')}
                                style={[styles.setting_Image,{marginLeft:wp("5%"),marginRight:wp("0%")}]}
                    />
                    <Text style={[styles.setting_text,{marginRight:wp("48%")}]}>Doctor</Text>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </View>
                    <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                   <Image
                                source={require('../Image/new_images/restaurantIcon3x.png')}
                                style={[styles.setting_Image,{marginLeft:wp("5%"),marginRight:wp("0%")}]}
                    />
                    <Text style={[styles.setting_text,{marginRight:wp("40%")}]}>Restaurant</Text>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </View>   
             </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

