import React, { Component } from 'react';
import styles from '../Component/Style'
import { TouchableOpacity, View, Animated, FlatList, Text, Image,} from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
import { Dialog } from "react-native-simple-dialogs";
import PopoverTooltip from 'react-native-popover-tooltip';
import {createStackNavigator,} from 'react-navigation';
import Alert_top from './Alert'

class Queue extends Component {
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
                ], order: 1
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
 openDialog = (show) => {
  this.setState({ showDialog: show });
}
render() {
return ( 
<View style={styles.container}>
  <View style={{flexDirection:"row"}}>
              <FlatList          
                    data={ this.state.dataSource }
                    renderItem={({item}) => 
                    <View style={styles.Flat_box}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>                          
                             <View style={{flexDirection:"column",marginVertical:hp("1.5%"),marginLeft:wp("5%")}}>
                                <View style={{flexDirection:"row"}}>
                                    <ResponsiveImage source={require('../Image/main/serveTimeIcon3x.png')} style={{marginTop:hp(".5%")}} initWidth="20" initHeight="20"/>
                                    <Text style={[styles.text,{marginLeft:wp("3%")}]}>{item.name}</Text>
                                 </View>
                                 <View >
                                 <Image style={styles.avatarMultiple} source={GLOBAL.Image} />                                 
                                 </View>
                                <PopoverTooltip 
                                                // setBelow='true'
                                                ref='tooltip1'
                                                buttonComponent={
                                                    <View style={[styles.button,{height:hp("5%"),width:wp("20%"),backgroundColor:"white",shadowColor: 'rgb(217,217,217)',}]}>
                                                    <Text style={[styles.buttonText,{color:"rgb(255,164,0)"}]}>
                                                        Action
                                                    </Text>
                                                    </View>
                                                }
                                                items={[
                                                    {
                                                    label: 'Start Serving',
                                                    onPress:() => {this.openDialog(true)} 
                                                    },
                                                    {
                                                    label: 'Move Down',
                                                    onPress: () => {}
                                                    }
                                                    ,
                                                    {
                                                    label: 'Drop',
                                                    onPress: () => {}
                                                    },
                                                    {
                                                    label: 'Alert',
                                                    onPress: () => {}
                                                    }
                                                ]}
                                    />
                            </View>           
                              <View style={styles.Flat_box_row}>
                                 <Text style={[styles.text,{fontSize:RF(2.2),marginBottom:hp("1%"),marginLeft:wp("2.5%")}]}>Token ID : TK102</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.2),marginBottom:hp("1%")}]}>{item.name}</Text>
                                 <Text style={styles.grey_text}>Service</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.2)}]}>{item.name}</Text>
                                 <Text style={styles.grey_text}>Stylist</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%"),fontSize:RF(2.2)}]}>{item.name}</Text>
                            </View>  
                            </View>         
                        </View>   }                       
                    />
           </View>
          <Dialog animationType="fade"
                  contentStyle={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width:wp("40%")
                                }}
                            onTouchOutside={ () => this.openDialog(false) }
                            onTouchInside={ () => this.openDialog(false) }
                            visible={ this.state.showDialog } 
          >   
                <View style={[styles.setting_Row,{marginBottom:hp("3%")}]}>
                    <TouchableOpacity onPress={ () => this.openDialog1(true) }>
                      <Text style={styles.setting_text}>Start Serving</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginHorizontal:"5%"}}>
                    <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="280" initHeight="2"/>
                </View>
                <View style={[styles.setting_Row,{marginBottom:hp("3%")}]}>
                    <Text style={styles.setting_text}>Move Down</Text>
                </View>
              <View style={{marginHorizontal:"5%"}}>
                    <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="280" initHeight="2"/>
                </View>
                <View style={[styles.setting_Row,{marginBottom:hp("3%")}]}>
                    <Text style={styles.setting_text}>Drop</Text>
                </View>
                <View style={{marginHorizontal:"5%"}}>
                    <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="280" initHeight="2"/>
                </View>
                <View style={[styles.setting_Row,{marginBottom:hp("3%")}]}>
                    <Text style={styles.setting_text}>Alert</Text>
                </View>
        </Dialog>
 </View>
   );}
}
export default createStackNavigator({
    Queue:{
      screen:Queue,
      navigationOptions: ({ navigation }) => ({
        title: 'QUEUE',
       
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
          },},
  {
    initialRouteName:"Queue",
    // headerMode: "none",
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',marginBottom:hp("2%"),fontSize: RF("2.4"),justifyContent:"center",alignItems:"center"
      },
        },
  });