import React, { Component } from 'react';
 import styles from '../Component/Style'
 import PropTypes from 'prop-types'
import { TouchableOpacity, ScrollView, View, Animated, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
export default class Queue_request extends Component {
 
 constructor(props) {
   super(props);
   this.state = {
                valueArray: [], disabled: false ,hair_data:"",hair_data_time:"",
                isLoading: true,MakeUp_data:"",makeup_data_time:"",
                    dataSource : [ 
                        {
                            name:"Hair cut"
                        },
                        {
                          time:"1h 10m"
                        }
                ],
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
 <ScrollView>
<View style={{  flex: 1,
      justifyContent: "space-between",
      backgroundColor: "rgb(243,242,242)",
      paddingVertical:"0%"}}>
        
    <View style={{ 
          width: wp('90%'),marginLeft:"5%",
          height: hp('30%'),
          backgroundColor:"white",
          marginVertical:hp('5%'),
          borderRadius:10,}}>
          
     <View style={{flexDirection:"row"}}>
              <FlatList          
                    data={ this.state.dataSource }
                    renderItem={({item}) => 
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>                          
                             <View style={{flexDirection:"column",marginVertical:hp("2%"),marginLeft:wp("5%")}}>
                                <View style={{flexDirection:"row"}}>
                                    <ResponsiveImage source={require('../Image/main/serveTimeIcon3x.png')} initWidth="30" initHeight="30"/>
                                    <Text style={[styles.text,{marginLeft:wp("3%")}]}>{item.time}</Text>
                                 </View>
                                 <View style={{marginVertical:hp("2%")}}>
                                 <Image style={styles.avatarMultiple} source={GLOBAL.Image} />
                                 </View>
                                 <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                 <TouchableOpacity>
                                    <ResponsiveImage source={require('../Image/main/acceptIcon3x.png')} initWidth="25" initHeight="25"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Reject')}}>
                                    <ResponsiveImage source={require('../Image/main/rejectIcon3x.png')} initWidth="25" initHeight="25"/>
                                    </TouchableOpacity>
                     </View>
                            </View>           
                              <View style={{flexDirection:"column",marginVertical:hp("2%"),alignItems:"flex-end",marginRight:wp("3%")}}>
                                 <Text style={[styles.text,{fontSize:RF(3)}]}>Token ID : TK102</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(3)}]}>{item.name}</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.5),color:"rgb(187,187,187)"}]}>Service</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(3)}]}>{item.name}</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.5),color:"rgb(187,187,187)"}]}>Stylist</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(3)}]}>{item.name}</Text>
                            </View>           
                        </View>   }                       
                    />
           </View>
  </View>
 </View>
</ScrollView>
   );
 }
}
