import React, { Component } from 'react';
 import styles from './Style'
import { StyleSheet, Platform, View, TouchableOpacity, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
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
               <View style={[styles.Row_divider,{marginVertical:hp("1.5%")}]}>

                            <ResponsiveImage
                                    source={GLOBAL.Edit_image} style={{marginLeft:wp("72%")}}
                                    initWidth={GLOBAL.COLOR.size_16} initHeight={GLOBAL.COLOR.size_16}
                                />
                            <ResponsiveImage
                                    source={GLOBAL.Delete_image} style={{marginRight:wp("4%")}}
                                    initWidth={GLOBAL.COLOR.size_16} initHeight={GLOBAL.COLOR.size_16}
                                />  
              </View>          
              <Text style={[styles.text,{marginHorizontal:wp("5%")}]}>Get 25% off on your First Haircut</Text>
                <View style={[styles.Row_margin,{marginTop:hp("2%")}]}>
                            <ResponsiveImage
                                        source={GLOBAL.SERve_image} style={{marginLeft:wp("4%"),marginTop:hp(".5%")}} initWidth={GLOBAL.COLOR.size_16} initHeight={GLOBAL.COLOR.size_16}
                                    />
                            <Text style={[styles.grey_text,styles.greay_View_offer]}>Haircut</Text>

                </View>
                <View style={[styles.Row_margin,{marginTop:hp("2%")}]}>
                <ResponsiveImage
                                        source={GLOBAL.Calender_Icon} style={{marginLeft:wp("4%"),marginTop:hp(".5%")}} initWidth={GLOBAL.COLOR.size_16} initHeight={GLOBAL.COLOR.size_16}
                                    />
                       <Text style={[styles.grey_text,styles.greay_View_offer]}>Mon, 01 Oct 18 - Wed, 31 Oct 18</Text>
                </View>
                <View style={[styles.Offer_button,]} >
                            <Text style={styles.buttonText}>{item.offer_per}% Off</Text>
                </View>
            </View>       
          }
        />
            <TouchableOpacity style={[styles.button,{marginBottom:hp("38%")}]} onPress={() => {this.props.navigation.navigate('Add_Offer')}}>
            <Text style={styles.buttonText}>Add Offers</Text>
            </TouchableOpacity>
     </View>
   );
 }
}
 
