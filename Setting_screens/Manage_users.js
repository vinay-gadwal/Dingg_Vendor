import React, { Component } from 'react';
 import styles from '../Component/Style'
import { TouchableOpacity, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Manage_Users extends Component {
 
 constructor(props) {

   super(props);

   this.state = {

     isLoading: true,
     dataSource : [
        {
          name: "John Doe",served:"20",queue:"14",wait_time:2
        },
        {
          name: "rohan dell",served:"10",queue:"24",wait_time:5
        },
        {
          name: "john alexer",served:"10",queue:"24",wait_time:10
        },
        {
          name: "same flintop",served:"4",queue:"4",wait_time:3
        }
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
        
        <View style={{ 
          width: wp('90%'),marginLeft:"5%",
          height: hp('60%'),
          backgroundColor:"white",
          marginVertical:hp('5%'),
          borderRadius:10,}}>
       <FlatList
       
        data={ this.state.dataSource }
        
        // ItemSeparatorComponent = {this.FlatListItemSeparator}

        renderItem={({item}) => 
        
       
                     
                <View style={{flexDirection:"row",marginVertical:hp("2%")}}>
                <Text style={[styles.text,{marginHorizontal:wp("5%")}]}>{item.name}</Text>
                            <Image
                                        source={require('../Image/icon/serviceIcon3x.png')}
                                        style={[styles.setting_Image,{marginLeft:wp("25%"),marginBottom:hp("2%"),marginTop:hp("1%")}]}
                                    />
                            <Image
                                        source={require('../Image/icon/serviceIcon3x.png')}
                                        style={[styles.setting_Image,{marginLeft:wp("5%"),marginRight:wp("5%"),marginBottom:hp("2%"),marginTop:hp("1%")}]}
                                    />
                </View>              
                
        }

        // keyExtractor={(item, index) => index.toString()}
        
        />
        </View>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Add_user')}}>
        <View style={[styles.button,{marginBottom:hp("15%"),marginHorizontal:wp("30%")}]} >
        <Text style={styles.buttonText}>Add New User</Text>
       </View>
       </TouchableOpacity>
     </View>
   );
 }
}
 
