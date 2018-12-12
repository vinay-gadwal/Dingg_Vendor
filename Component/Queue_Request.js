import React, { Component } from 'react';
 import styles from '../Component/Style'
 import PropTypes from 'prop-types'
import { TouchableOpacity, ScrollView, View, Animated, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
import {createBottomTabNavigator,createStackNavigator,} from 'react-navigation';
import Alert_top from './Alert'
 class Queue_request extends Component {
 
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
                        },
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
   
<View style={styles.container}>
    <View style={{flexDirection:"row"}}>
              <FlatList          
                    data={ this.state.dataSource }
                    renderItem={({item}) => 
                    <View style={styles.Flat_box}>
                        <View style={styles.setting_Row}>                          
                             <View style={styles.flat_box_colum}>
                                <View style={{flexDirection:"row",marginTop:hp("1%")}}>
                                    <ResponsiveImage source={require('../Image/main/serveTimeIcon3x.png')} initWidth="20" initHeight="20"/>
                                    <Text style={[styles.text,{marginLeft:wp("3%")}]}>{item.time}</Text>
                                 </View>
                                 <View style={{marginVertical:hp("1%")}}>
                                 <Image style={styles.avatarMultiple} source={GLOBAL.Image} />
                                 </View>
                                 <View style={styles.flat_box_top_row}>
                                 <TouchableOpacity>
                                    <ResponsiveImage source={require('../Image/main/acceptIcon3x.png')} initWidth="30" initHeight="30"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Reject')}}>
                                    <ResponsiveImage source={require('../Image/main/rejectIcon3x.png')} initWidth="30" initHeight="30"/>
                                    </TouchableOpacity>
                                 </View>
                            </View>           
                              <View style={styles.Flat_box_row}>
                                 <Text style={[styles.text,{fontSize:RF(2.2),marginBottom:hp("1%"),marginLeft:wp("2.5%")}]}>Token ID : TK102</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.2),marginBottom:hp("1%")}]}>{item.name}</Text>
                                 <Text style={styles.grey_text}>Service</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.2),marginBottom:hp("1%")}]}>{item.name}</Text>
                                 <Text style={styles.grey_text}>Stylist</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.2)}]}>{item.name}</Text>
                            </View>           
                        </View>
                        </View>   }                       
                    />
           </View>
 </View>
   );
 }
}
export default createStackNavigator({
  Queue_request:{
    screen:Queue_request,
    navigationOptions: ({ navigation }) => ({
      title: 'QUEUE REQUEST',
     
      headerRight:(
        <TouchableOpacity onPress={() => {navigation.navigate('Alert_top')}}>
         <Image
          source={require('../Image/icon/notificationIcon3x.png')}
          style={[styles.back_butt0n,{marginRight:wp("3%"),height:hp("3.2%"),width:wp("5%"),marginBottom:hp("1.5%")}]}
        />
        </TouchableOpacity>)
      })
  },
 Alert_top:{
          screen:Alert_top,
          navigationOptions: ({ navigation }) => ({
            title: 'ALERTS',
            headerLeft:null,
            headerRight:(
            <Image
              source={require('../Image/icon/notificationIconYellow3x2.png')}
              style={[styles.back_butt0n,{marginRight:wp("3%"),height:hp("3.2%"),width:wp("5%"),marginBottom:hp("1.5%")}]}
            />)
          })
        },
},

{
  initialRouteName:"Queue_request",
  // headerMode: "none",
  navigationOptions: {
    headerTitleStyle: {
      fontWeight: 'bold',marginBottom:hp("2%"),fontSize: RF("2.4"),justifyContent:"center",alignItems:"center"
    },
      },

});