import React, { Component } from 'react';
 import styles from './Style'
import { StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// const dataSource = [
//   {
//     value: 'Salon',
//   },
//   {
//     value: 'Doctor',
//   },
//   {
//     value: 'Food',
//   },
//   {
//     value: 'Plumber',
//   }
// ];
export default class Project extends Component {
 
 constructor(props) {

   super(props);

   this.state = {

     isLoading: true,dataSource : [
      {
        Offer_name: GLOBAL.Offer_name,Start_date:GLOBAL.Start_date,End_date:GLOBAL.end_date,offer_per:GLOBAL.Offer_percentage
      },
    //   {
    //     Start_date:GLOBAL.Start_date
    //   },
    //   {
    //     End_date:GLOBAL.end_date
    //   },
    //   {
    //       offer_per:GLOBAL.Offer_percentage
    //   }
    ]

   }

   YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
  ]);

 }
 
GetItem (flower_name) {
  
 Alert.alert(flower_name);
 
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

 webCall=()=>{

  // return fetch('https://reactnativecode.000webhostapp.com/FlowersList.php')
  //        .then((response) => response.json())
  //        .then((responseJson) => {
  //          this.setState({
  //            isLoading: false,
  //            dataSource: responseJson
  //          }, function() {
  //            // In this block you can do something with new state.
  //          });
  //        })
  //        .catch((error) => {
  //          console.error(error);
  //        });

 }

 componentDidMount(){

  this.webCall();

 }
 
 render() {

  //  if (this.state.isLoading) {
  //    return (

  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

  //        <ActivityIndicator size="large" />

  //      </View>
       
  //    );

  //  }
 
   return (
 
     <View style={{  flex: 1,
      justifyContent: "space-between",
      backgroundColor: "rgb(243,242,242)",
      paddingVertical:"0%"}}>
 
       <FlatList
       
        data={ this.state.dataSource }
        
        // ItemSeparatorComponent = {this.FlatListItemSeparator}

        renderItem={({item}) => 
        
        <View style={{ 
          width: wp('90%'),marginLeft:"5%",
          height: hp('27%'),
          backgroundColor:"white",
          marginVertical:hp('5%'),
          borderRadius:10,}}>
               <View style={{flexDirection:"row"}}>

                            <Image
                                    source={require('../Image/icon/editIcon2x.png')}
                                    style={[styles.setting_Image,{marginLeft:wp("70%"),marginBottom:hp("2%"),marginTop:hp("2%")}]}
                                />
                            <Image
                                    source={require('../Image/icon/deleteIcon2x.png')}
                                    style={[styles.setting_Image,{marginRight:wp("3%"),marginBottom:hp("2%"),marginTop:hp("2%")}]}
                                />  
              </View>          
              <Text style={[styles.text,{marginHorizontal:wp("5%")}]}>{item.Offer_name}</Text>
                <View style={{flexDirection:"row"}}>
                            <Image
                                        source={require('../Image/icon/serviceIcon3x.png')}
                                        style={[styles.setting_Image,{marginLeft:wp("5%"),marginBottom:hp("2%"),marginTop:hp("2%")}]}
                                    />
                            <Text onPress={this.GetItem.bind(this, Offer_name)} style={[styles.text,{marginHorizontal:wp("2%"),marginTop:hp("1%"),color:"rgb(173,173,173)"}]}>{item.offer_per}</Text>

                </View>
                <View style={{flexDirection:"row"}}>
                            <Image
                                        source={require('../Image/icon/calenderIcon2x.png')}
                                        style={[styles.setting_Image,{marginLeft:wp("5%"),marginBottom:hp("2%"),marginTop:hp("2%")}]}
                                    />
                            <Text style={[styles.text,{marginHorizontal:wp("2%"),marginTop:hp("1%"),color:"rgb(173,173,173)"}]}>{item.Start_date}</Text>
                            <Text style={[styles.text,{marginHorizontal:wp("2%"),marginTop:hp("1%"),color:"rgb(173,173,173)"}]}>{item.End_date}</Text>
                </View>
                <View style={[styles.button,{borderRadius:40,height:hp("4%"),width:wp("30%"),marginHorizontal:wp("5%")}]} >
                            <Text style={styles.buttonText}>{item.offer_per}% Off</Text>
                </View>
            </View>
        
          }

        // keyExtractor={(item, index) => index.toString()}
        
        />
 
     </View>
   );
 }
}
 
