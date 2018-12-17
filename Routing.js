import React from 'react';
import {TouchableOpacity,Image,Dimensions,Icon,SafeAreaView,View} from 'react-native';
import {createBottomTabNavigator,createStackNavigator,} from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import sing_in from './Auth_Module/Signin'
import sing_up from './Auth_Module/Signup'
import Forget_password from './Auth_Module/Forget_Pass'
import Crea_pass from './Auth_Module/Create_password'
import Add_Details from './Component/AddDetails'
import DashBoard from './Component/Dashboard'
import Setting from './Component/Setting'
import Profile from './Component/Profile'
import Profile_edit from './Component/Profile_Edit'
import history from './Component/History'
import Share from './Component/Share'
import Rating from './Component/Star_Rating'
import Queue from './Component/Queue'
import Queue_request from './Component/Queue_Request'
import styles from './Component/Style';
import For_New_Pass from './Auth_Module/Forget_Pass_NewPass'
import New_User from './Component/New_User'
import Exist_User from './Component/Existing_user'
import Welcome from './Auth_Module/Welcome'
import ResponsiveImage from 'react-native-responsive-image'
import ViewOffer from './Component/View_offer'
import AddOffer from './Component/Add_offers'
import App_setting from './Setting_screens/App_Setting'
import Business_Hour from './Setting_screens/Busi_Hour_Setting'
import Calendar from './Setting_screens/Calendar'
import Manage_user from './Setting_screens/Manage_users'
import Add_user from './Setting_screens/Add_users'
import Set_up from './Setting_screens/Setup_service'
import Add_stylist from './Setting_screens/Add_stylist'
import Star_Rating from './Setting_screens/Review_rating'
import Reject from './Component/Reject_reason'
import QR_Code from './Component/QR_Code'
import OTP from './Auth_Module/OTP'
import OTP_forget from './Auth_Module/OTP_Forget'
const GLOBAL = require('./Component/Color');

// import Alert from './Component/Alert'
console.disableYellowBox = true;

const AuthStack = createBottomTabNavigator({
  D: {
    screen: DashBoard,
      headerMode:"none",

    navigationOptions: () => ({
      title:'Dashboard',
      tabBarIcon: ({ focused }) => {
        const line = focused ? GLOBAL.Yellow_line : GLOBAL.Yullow_off_line
        const image = focused
        ? GLOBAL.Dashboard
        : GLOBAL.Dashboard_yellow
        return (
          <View style={styles.Only_Column}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%"),marginLeft:wp("4%")}} initWidth="50" initHeight="3"/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth="23" initHeight="23"/>
          </View>
        )
    }
  })
  },
  QR: {
    screen: Queue_request,
    navigationOptions: () => ({
      title:"Que",
      tabBarIcon: ({ focused }) => {
        const line = focused ? GLOBAL.Yellow_line : GLOBAL.Yullow_off_line
        const image = focused
        ? GLOBAL.Queue_req
        : GLOBAL.Que_req_white
        return (
          <View style={styles.Only_Column}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%")}} initWidth={GLOBAL.COLOR.Size_60} initHeight={GLOBAL.COLOR.Icon_divider_width}/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth={GLOBAL.COLOR.Size_27} initHeight={GLOBAL.COLOR.Icon_width}/>
          </View>
        )
    }
    })
  },
  Q: {
    screen: Queue,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ? GLOBAL.Yellow_line : GLOBAL.Yullow_off_line
        const image = focused
        ? GLOBAL.Queue
        : GLOBAL.Queue_white
        return (
          <View style={styles.Only_Column}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%")}} initWidth={GLOBAL.COLOR.Size_60} initHeight={GLOBAL.COLOR.Icon_divider_width}/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth={GLOBAL.COLOR.Icon_width} initHeight={GLOBAL.COLOR.Icon_width}/>
          </View>
        )
    }
    })
  },
  H: {
    screen: history,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ? GLOBAL.Yellow_line : GLOBAL.Yullow_off_line
        const image = focused
        ? GLOBAL.History
        : GLOBAL.History_white
        return (
          <View style={styles.Only_Column}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%")}} initWidth={GLOBAL.COLOR.Size_60} initHeight={GLOBAL.COLOR.Icon_divider_width}/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth={GLOBAL.COLOR.Icon_width} initHeight={GLOBAL.COLOR.Icon_width}/>
          </View>
        )
    }
    })
  },
  S: {
    screen: Setting,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ? GLOBAL.Yellow_line : GLOBAL.Yullow_off_line
        const image = focused
        ? GLOBAL.Setting
        : GLOBAL.Setting_white
        return (
          <View style={styles.Only_Column}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%")}} initWidth={GLOBAL.COLOR.Size_60} initHeight={GLOBAL.COLOR.Icon_divider_width}/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth={GLOBAL.COLOR.Size_21} initHeight={GLOBAL.COLOR.Icon_width}/>
          </View>
            )
    }
    })
  },
  P: {
    screen: Profile,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ? GLOBAL.Yellow_line : GLOBAL.Yullow_off_line
        const image = focused
        ? GLOBAL.Profile
        : GLOBAL.Profile_white
        return (
         <View style={styles.Only_Column}>
          <ResponsiveImage source={line} style={{marginBottom:hp("2%"),marginRight:wp("4%")}} initWidth={GLOBAL.Yellow_50} initHeight={GLOBAL.Icon_divider_width}/>
          <ResponsiveImage source={image} style={{marginBottom:hp("3%")}} initWidth={GLOBAL.COLOR.Size_21} initHeight={GLOBAL.COLOR.Icon_width}/>
          </View>
        )
    }
    })
  }
},
{
  initialRouteName: 'D',
  headerMode:"none",
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: 'black',
      height: 10,
      alignSelf: 'flex-end',
  },
      showIcon: true,
      showLabel: false,
    // activeTintColor: '#F8F8F8', // active icon color
    // inactiveTintColor: '#586589',  // inactive icon color
}
});

const RootStack = createStackNavigator({
  SignIn: {
          screen: sing_in,
          navigationOptions: ({ navigation }) => ({
            title: 'SIGN IN',
            headerBackTitle:null,

          })
        },
  SignUp: {
          screen: sing_up,
          navigationOptions: ({ navigation }) => ({
            title: 'SIGN UP',
            headerLeft: null,
            headerBackTitle:null,
          })
        },

 OTP: {
          screen: OTP,
          navigationOptions: ({ navigation }) => ({
            title: 'OTP VERIFICATION',
            headerBackTitle:null,
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={[styles.back_butt0n,]}
            />
            </TouchableOpacity>)
          })
        },

  Crea_pass: {
          screen: Crea_pass,
          navigationOptions: ({ navigation }) => ({
            title: 'SIGN UP',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={[styles.back_butt0n]}
            />
            </TouchableOpacity>)
          })
        },
  Forget_password: {
          screen: Forget_password,
          navigationOptions: ({ navigation }) => ({
            title:'FORGOT PASSWORD',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={[styles.back_butt0n,]}
            />
            </TouchableOpacity>)
          })
        },
  OTP_forget: {
          screen: OTP_forget,
          navigationOptions: ({ navigation }) => ({
            title: 'OTP VERIFICATION',
            headerBackTitle:null,
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={[styles.back_butt0n,]}
            />
            </TouchableOpacity>)
          })
        },

  For_New_Pass:{
      screen:For_New_Pass,
      navigationOptions: ({ navigation }) => ({
        title:'CREATE NEW PASSWORD',
        headerLeft:(
          <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
        <Image
              source={GLOBAL.Back_button}
              style={[styles.back_butt0n]}
        />
        </TouchableOpacity>)
      })
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: ({ navigation }) => ({
      title: 'WELCOME',
      headerLeft: null,
      headerBackTitle:null,
    })
  },
  AddDetails:{
          screen: Add_Details,
          navigationOptions: ({ navigation }) => ({
            title: 'ADD BUSINESS DETAILS',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={[styles.back_butt0n,{marginBottom:hp("1%")}]}
            />
            </TouchableOpacity>)
          })
        },

 New_User:{
            screen:New_User,
            headerMode: null,
            navigationOptions: ({ navigation }) => ({
              title: 'NEW USER',
              headerLeft:(
                <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
              <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
              />
              </TouchableOpacity>)
            })
          },

 Exist_User:{
            screen:Exist_User,
            headerMode: null,
            navigationOptions: ({ navigation }) => ({
              title: 'EXISTING USER',
              headerTitleStyle: {
                fontFamily:'Muli-Bold',marginBottom:hp("2%")
              },
              headerLeft:(
                <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
              <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
              />
              </TouchableOpacity>)
            })
          },


 ViewOffer:{
        screen:ViewOffer,
        headerMode: null,
        navigationOptions: ({ navigation }) => ({
          title: 'VIEW OFFER',
          headerLeft:(
            <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
          <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
          />
          </TouchableOpacity>)
        })
},

AddOffer:{
          screen:AddOffer,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'ADD OFFER',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
},

  AuthStack:{
             screen:AuthStack,
             headerMode:"none",
             navigationOptions: ({ navigation }) => ({
              header: null,
              title:null,
              headerLeft: null,
              headerRight:(
                <TouchableOpacity onPress={() => {navigation.navigate('Alert')}}>
              <Image
                source={GLOBAL.Notification}
                style={{marginRight:wp("5%"),
                width: wp('5%'),
                height: hp('3.5%'),}}
              />
              </TouchableOpacity>),
            })
            },
  Setting:{
            screen:Setting,
            navigationOptions: ({ navigation }) => ({
              title: 'SETTINGS',
            })
          } ,
  Queue:{
          screen:Queue,
          navigationOptions: ({ navigation }) => ({
            title: 'SETTINGS',
          })
        },
  Queue_request:{
          screen:Queue_request,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
          headerLeft: null,
          })
        },
  history:{
          screen:history,
          navigationOptions: ({ navigation }) => ({
          })
        },
  Profile:{
          screen:Profile,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
          headerLeft: null,
          })
        },
 QR_Code:{
          screen:QR_Code,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'DINGG CODE',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },
  Profile_edit:{
          screen:Profile_edit,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'EDIT PROFILE',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },
  Share:{
          screen:Share,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
          })
        },
  Rating:{
          screen:Rating,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
          })
        },
  App_setting:{
          screen:App_setting,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'APP SETTING',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },

  Business_Hour:{
          screen:Business_Hour,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'ADD BUSINESS HOUR',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },

  Calendar:{
          screen:Calendar,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'SETUP HOLIDAYS',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },
 Manage_user:{
          screen:Manage_user,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'MANAGE USER',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },
 Add_user:{
          screen:Add_user,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'ADD NEW USER',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },
Set_up:{
          screen:Set_up,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'ADD SERVICES',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },

  Add_stylist:{
          screen:Add_stylist,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'ADD STYLIST',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },
 Star_rating:{
          screen:Star_Rating,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'Rating & Review',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },
  Reject:{
          screen:Reject,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'REJECTION REASON',
            headerLeft:(
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={GLOBAL.Back_button}
              style={styles.back_butt0n}
            />
            </TouchableOpacity>)
          })
        },
      },

      {
        initialRouteName:"SignIn",
        // headerMode: "none",
        navigationOptions: {
          headerTitleStyle: GLOBAL.header
            },

});


export default class DinggApp extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}  forceInset={{top: 'always'}}>
        <RootStack />
      </SafeAreaView>
    );
  }
}
