import React, { Component } from 'react';
 import styles from '../Component/Style'
import { TouchableOpacity, View, Animated, FlatList, Text, Image,} from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
const GLOBAL = require('../Component/Color');

export default class Queue_request extends Component {
 constructor(props) {
   super(props);
   this.state = {
                valueArray: [], disabled: false ,hair_data:"",hair_data_time:"",
                isLoading: true,MakeUp_data:"",makeup_data_time:"",
                    dataSource : [ {
                                    name:"Hair cut"
                                  },],
       }
     this.index = 0;
     this.animatedValue = new Animated.Value(0);
 }
 
 FlatListItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }
 
render() {
return (
<View style={styles.container}>                
  <View style={styles.Row_divider}>
      <FlatList          
          data={ this.state.dataSource }
          renderItem={({item}) => 
          <View style={styles.Flat_box}>
              <View style={styles.Row_divider}>                          
                  <View style={styles.flat_box_colum}>
                    <Image style={styles.avatarMultiple} source={GLOBAL.Image} />
                    <ResponsiveImage source={GLOBAL.Serve_Icon} style={{marginVertical:hp("1%")}} initWidth="18" initHeight="18"/>
                    <ResponsiveImage source={GLOBAL.Calender_Icon} style={{marginVertical:hp("1%")}} initWidth="18" initHeight="18"/>
                  </View>           
                  <View style={[styles.Flat_box_row,{width:wp("60%")}]}>
                    <Text style={[styles.text,{fontSize:RF(2.2),width:wp("50%")}]}>Rhyan Khan is still in the queue</Text>
                        <View style={styles.Row_divider}>
                          <Text style={[styles.text,{fontSize:RF(2.2),marginTop:hp(".4%")}]}>Token ID : TK102</Text>
                          <ResponsiveImage style={{marginTop:hp("1.5%"),marginLeft:wp("20%")}} source={GLOBAL.Arrow_image} initWidth="8" initHeight="10"/>
                        </View>
                        <TouchableOpacity style={styles.Action_button}>
                         <Text style={[styles.buttonText,{color:GLOBAL.COLOR.ORANGE}]}>Send Alert</Text>
                        </TouchableOpacity>
                  </View> 
                </View>          
            </View>   }                       
                    />
           </View>
 </View>
   );
 }
}
