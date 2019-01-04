import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,NetInfo,Alert,Text
} from 'react-native';
import RF from "react-native-responsive-fontsize"

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('ticket');
    const userTokenOTP = await AsyncStorage.getItem('OTPticket');
    const Profile_token = await AsyncStorage.getItem('Profile_Token');
    const registered = await AsyncStorage.getItem('Profile_Vendor');
    console.log('Login ',userToken)
    console.log('Password',userTokenOTP)
    console.log('registered',registered)
    console.log("profile",Profile_token);
    AsyncStorage.getItem("Profile_Vendor").then((Profile_boolean) => {
      GLOBAL.profile=Profile_boolean
      if(registered === "true"){
        this.props.navigation.navigate('AddDetails')
      }
     else if(userTokenOTP != undefined){
          this.props.navigation.navigate(userTokenOTP ? 'Crea_pass' : 'SignIn');
          }
          else{
          this.props.navigation.navigate(userToken ? 'D' : 'SignIn');
          }
      

   }).done();
    
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    
    // if(userTokenOTP != undefined){
    //   this.props.navigation.navigate(userTokenOTP ? 'Crea_pass' : 'SignIn');
    //   }
    //   else{
    //   this.props.navigation.navigate(userToken ? 'D' : 'SignIn');
    //   }
    
    // this.props.navigation.navigate('For_New_Pass');
  };
  // Fetch the token from storage then navigate to our appropriate place

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
        <ActivityIndicator />
        <Text style={{ fontSize: RF(3), 
        fontFamily:"Muli-ExtraBold",
        justifyContent:"flex-start",
        color:'#ffa400',
        }}>Loading...</Text>
      </View>
    );
  }
}
