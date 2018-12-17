import React, { Component } from 'react';
 import styles from './Style'
import { StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image';
const GLOBAL = require('../Component/Color');

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
     <View style={styles.container}>
       <FlatList
        data={ this.state.dataSource } 
        // ItemSeparatorComponent = {this.FlatListItemSeparator
        renderItem={({item}) => 
        <View style={[styles.Flat_box]}>
               <View style={styles.Row_divider}>

                            <Image
                                    source={GLOBAL.Edit_image}
                                    style={styles.View_offer}
                                />
                            <Image
                                    source={GLOBAL.Delete_image}
                                    style={[styles.View_offer,{marginLeft:wp("3%")}]}
                                />  
              </View>          
              <Text style={[styles.text,{marginHorizontal:wp("5%")}]}>dakkjkkj</Text>
                <View style={styles.Row_margin}>
                            <ResponsiveImage
                                        source={GLOBAL.SERve_image} style={{marginTop:hp("1.7%"),marginLeft:wp("4%")}} initWidth={GLOBAL.Icon_width} initHeight={GLOBAL.Icon_height}
                                    />
                            {/* <Text style={styles.text}>xxxxxxxx</Text> */}

                </View>
                <View style={styles.Row_margin}>
                <ResponsiveImage
                                        source={GLOBAL.Calender_Icon} style={{marginTop:hp("1.7%"),marginLeft:wp("4%")}} initWidth={GLOBAL.Icon_width} initHeight={GLOBAL.Icon_height}
                                    />
                            
                </View>
                <View style={[styles.Offer_button]} >
                            <Text style={styles.buttonText}>{item.offer_per}% Off</Text>
                </View>
            </View>       
          }
        />
     </View>
   );
 }
}
 
