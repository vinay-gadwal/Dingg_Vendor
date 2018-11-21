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
                          name:"Hair cut" 
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
        
   
          
     <View style={{flexDirection:"row"}}>
              <FlatList          
                    data={ this.state.dataSource }
                    renderItem={({item}) => 
                    <View style={{ 
                      width: wp('90%'),marginLeft:"5%",
                      height: hp('33Fgive F%'),
                      backgroundColor:"white",
                      marginVertical:hp('2%'),
                      borderRadius:10,}}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>                          
                             <View style={{flexDirection:"column",marginVertical:hp("2%"),marginLeft:wp("5%")}}>
                                <View style={{flexDirection:"row"}}>
                                    <ResponsiveImage source={require('../Image/main/serveTimeIcon3x.png')} initWidth="20" initHeight="20"/>
                                    <Text style={[styles.text,{marginLeft:wp("3%")}]}>{item.time}</Text>
                                 </View>
                                 <View style={{marginVertical:hp("2%")}}>
                                 <Image style={styles.avatarMultiple} source={GLOBAL.Image} />
                                 </View>
                                 <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                 <TouchableOpacity>
                                    <ResponsiveImage source={require('../Image/main/acceptIcon3x.png')} initWidth="30" initHeight="30"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Reject')}}>
                                    <ResponsiveImage source={require('../Image/main/rejectIcon3x.png')} initWidth="30" initHeight="30"/>
                                    </TouchableOpacity>
                                 </View>
                            </View>           
                              <View style={{flexDirection:"column",marginVertical:hp("2%"),alignItems:"flex-start",width:wp("45%")}}>
                                 <Text style={[styles.text,{fontSize:RF(2.7),marginBottom:hp("1%"),marginLeft:wp("2.5%")}]}>Token ID : TK102</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.7),marginBottom:hp("1%")}]}>{item.name}</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2),color:"rgb(187,187,187)",marginTop:hp("1%")}]}>Service</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.7),marginBottom:hp("1%")}]}>{item.name}</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2),color:"rgb(187,187,187)",marginTop:hp("1%")}]}>Stylist</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.7)}]}>{item.name}</Text>
                            </View>           
                        </View>
                        </View>   }                       
                    />
           </View>
 </View>
</ScrollView>
   );
 }
}
