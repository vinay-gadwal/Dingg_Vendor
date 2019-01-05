import React, { Component } from 'react';
 import styles from '../Component/Style'
import { TouchableOpacity, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const GLOBAL = require('../Component/Color');

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
        },
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
  //               Alert.alert(error);
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
        <View style={[styles.Flat_box,{paddingVertical:hp("3%")}]}>
       <FlatList
        data={ this.state.dataSource }
        // ItemSeparatorComponent = {this.FlatListItemSeparator}
        renderItem={({item ,index}) => 
        <View style={[styles.otp_box,{paddingVertical:hp(".5%")}]}>
                <Text style={[styles.text,{width:wp("45%")}]}>{item.name}</Text>
                            <Image
                                        source={GLOBAL.Edit_image}
                                        style={styles.DElete_icon}                                   
                                        />
                            <Image
                                        source={GLOBAL.Delete_image}
                                        style={styles.DElete_icon}
                                    />
                </View>                  
        }
        // keyExtractor={(item, index) => index.toString()}
        />
        </View>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Add_user')}}>
        <View style={[styles.button,{marginBottom:hp("20%")}]} >
        <Text style={styles.buttonText}>Add New User</Text>
       </View>
       </TouchableOpacity>
     </View>
   );
 }
}
 
