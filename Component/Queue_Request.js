import React, { Component } from 'react';
 import styles from '../Component/Style'
import { TouchableOpacity, View, Animated, FlatList, Text, Image, } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
import {createStackNavigator,} from 'react-navigation';
import Alert_top from './Alert'
const Init_width = 28;
const Init_hight = 28;
const GLOBAL = require('../Component/Color');

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
    <View style={styles.Row_divider}>
              <FlatList          
                    data={ this.state.dataSource }
                    renderItem={({item}) => 
                    <View style={styles.Flat_box}>
                        <View style={styles.setting_Row}>                          
                             <View style={styles.flat_box_colum}>
                                <View style={[styles.Row_divider,{marginTop:hp("1%")}]}>
                                    <ResponsiveImage source={GLOBAL.Serve_Icon} initWidth={GLOBAL.Icon_width} initHeight={GLOBAL.Icon_height}/>
                                    <Text style={[styles.text,{marginLeft:wp("3%")}]}>{item.time}</Text>
                                 </View>
                                 <Image style={styles.avatarMultiple} source={GLOBAL.Image} />
                                 <View style={styles.Row_divider}>
                                 <TouchableOpacity>
                                    <ResponsiveImage source={GLOBAL.Accept} initWidth={Init_width} initHeight={Init_hight}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Reject')}}>
                                    <ResponsiveImage source={GLOBAL.Reject} initWidth={Init_width} initHeight={Init_hight}/>
                                    </TouchableOpacity>
                                 </View>
                            </View>           
                              <View style={styles.flat_box_colum_right}>
                                 <Text style={styles.text}>Token ID : TK102</Text>
                                 <Text style={styles.text}>{item.name}</Text>
                                 <Text style={styles.grey_text}>Service</Text>
                                 <Text style={styles.text}>{item.name}</Text>
                                 <Text style={styles.grey_text}>Stylist</Text>
                                 <Text style={styles.text}>{item.name}</Text>
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
          source={GLOBAL.Notification}
           style={styles.back_butt0n_right}       
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
              source={GLOBAL.Notification_yellow}
              style={styles.back_butt0n_right}       
              />)
          })
        },
},

{
  initialRouteName:"Queue_request",
  // headerMode: "none",
  navigationOptions: {
    headerTitleStyle:GLOBAL.Header
      },

});