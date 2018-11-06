import React from 'react';
import {TouchableOpacity,Image,Dimensions,Icon,SafeAreaView,View} from 'react-native';
import {createBottomTabNavigator,createStackNavigator,} from 'react-navigation';
// import { Dropdown } from 'react-native-material-dropdown';
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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
console.disableYellowBox = true;
const AuthStack = createBottomTabNavigator({
  D: {
    screen: DashBoard,
    navigationOptions: () => ({
      title:'Dashboard',
      tabBarIcon: ({ focused }) => {
        const image = focused 
        ? require('./Image/icon/dashboard_yellow2x.png') 
        : require('./Image/icon/dashboardIcon.png')
        return (
          <ResponsiveImage source={image} initWidth="23" initHeight="23"/>
        )
    }
  })
  },
  QR: {
    screen: Queue_request,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const image = focused 
        ? require('./Image/icon/queueRequest_yellow2x.png') 
        : require('./Image/icon/queueRequestIcon2x.png')
        return (
          <ResponsiveImage source={image} initWidth="27" initHeight="23"/>
        )
    }
    })
  },
  Q: {
    screen: Queue,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const image = focused 
        ? require('./Image/icon/queueIcon_yellow2x.png') 
        : require('./Image/icon/queueIcon2x.png')
        return (
          <ResponsiveImage source={image} initWidth="23" initHeight="23"/>
        )
    }
    })
  },
  H: {
    screen: history,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const image = focused 
        ? require('./Image/icon/historyIcon_yellow2x.png') 
        : require('./Image/icon/historyIcon2x.png')
        return (
          <ResponsiveImage source={image} initWidth="23" initHeight="23"/>
        )
    }
    })
  },
  S: {
    screen: Setting,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const image = focused 
        ? require('./Image/icon/settingsIcon_yellow2x.png') 
        : require('./Image/icon/settingsIcon2x.png')
        return (
          <ResponsiveImage source={image} initWidth="24" initHeight="25"/>
        )
    }
    })
  },
  P: {
    screen: Profile,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const image = focused 
        ? require('./Image/icon/profileIcon_yellow2x.png') 
        : require('./Image/icon/profileIcon2x.png')
        return (
          <ResponsiveImage source={image} initWidth="21" initHeight="23"/>
        )
    }
    })
  }
},
{
  initialRouteName: 'D',
  headerMode:"none",
  headerLeft:null,
  tabBarOptions: {
    showLabel: false, // hide labels
    // activeTintColor: '#F8F8F8', // active icon color
    // inactiveTintColor: '#586589',  // inactive icon color
    style: {
        backgroundColor: 'white' // TabBar background
    }
}
});

// const data = [
//   {
//     value: '30 min',
//   },
//   {
//     value: '45 min',
//   },
//   {
//     value: '60 min',
//   }
// ];
// const ForgetStack = createDrawerNavigator({
//   Log_in:AuthStack,
//   ForgetPass:{
//     screen:forgetpass
//   }
// },{
//   headerMode:'none'
// })
// const HomeStack = createStackNavigator({
//   SignIn: {
//     screen: sing_in,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Sign In',
//     })
//   },
//   SignUp: {
//     screen: sing_up,
//     headerMode:"none",
//     navigationOptions: ({ navigation }) => ({
//       title: 'Sign Up',
//       headerMode:"none"
//     })
//   }
// },
// {
//   initialRouteName:"SignIn",
//   navigationOptions: {
//         headerStyle: {
//           backgroundColor: 'white',
//           // height: "130%",
//         }, 
//       },

// });

// const CalendarStack = createStackNavigator({
//   Calendar: {
//     screen: CalendarComponent,
//     navigationOptions: ({navigation}) => ({
//       title: 'Calendar',
//       drawerLabel: 'Calendar',
//       // drawerIcon:
//       //   <Image
//       //     source={require('./img/albums/breadcrumb.png')}
//       //     style={{
//       //       width: 24,
//       //       height: 24,
//       //       paddingLeft: 10,
//       //     }}
//       //   />,
//       headerLeft:
//       <TouchableOpacity style={{ width: "150%", height: "70%", marginLeft: 20,marginBottom:"20%"}} onPress={() => navigation.dangerouslyGetParent().navigate('home')}>
//         <Image
//           source={require('./img/back.png')}
//           style={{
//             width: "80%",
//             height: "80%",
//             // left: 20
//           }}
//         />
//       </TouchableOpacity>,
//     })
//   },
// },
// {
//   navigationOptions: {
//     headerStyle: {
//       backgroundColor: 'white',
//       // height: "130%",
//     }, 
//   },
// });
// const settingstack = createStackNavigator({
//   Setting: {
//     screen: Setting,
//     navigationOptions: ({navigation}) => ({
//       title: 'Setting',
//       drawerLabel: 'Setting',
//       // drawerIcon:
//       //   <Image
//       //     source={require('./img/albums/breadcrumb.png')}
//       //     style={{
//       //       width: 24,
//       //       height: 24,
//       //       paddingLeft: 10,
//       //     }}
//       //   />,
//       headerLeft:
//       <TouchableOpacity style={{ width: "150%", height: "70%", marginLeft: 20,marginBottom:"20%"}} onPress={() => navigation.dangerouslyGetParent().navigate('home')}>
//         <Image
//           source={require('./img/back.png')}
//           style={{
//             width: "80%",
//             height: "80%",
//             // left: 20
//           }}
//         />
//       </TouchableOpacity>,
//     })
//   },
// },
// {
//   navigationOptions: {
//     headerStyle: {
//       backgroundColor: 'white',
//       // height: "130%",
//     }, 
//   },
// });

const RootStack = createStackNavigator({
  SignIn: {
          screen: sing_in,
          navigationOptions: ({ navigation }) => ({
            title: 'SIGN IN',
            headerBackTitle:null,
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
          })
        },
  SignUp: {
          screen: sing_up,
          navigationOptions: ({ navigation }) => ({
            title: 'SIGN UP',
            headerLeft: null,
            headerBackTitle:null,
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
          })
        },
  Crea_pass: {
          screen: Crea_pass,
          navigationOptions: ({ navigation }) => ({
            title: 'SIGN UP',
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:null
          })
        },
  Forget_password: {
          screen: Forget_password,
          navigationOptions: ({ navigation }) => ({
            title:'FORGET PASSWORD',
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:( 
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
              style={styles.back_butt0n} 
            />
            </TouchableOpacity>)
          })
        },
  For_New_Pass:{
      screen:For_New_Pass,
      navigationOptions: ({ navigation }) => ({
        title:'CREATE NEW PASSWORD',
        headerTitleStyle: {
          fontFamily:'Muli-Bold',marginBottom:hp("2%")
        },
        headerLeft:( 
          <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
        <Image
          source={require('./Image/icon/back_2x.png')}
          style={styles.back_butt0n} 
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
      headerTitleStyle: {
        fontFamily:'Muli-Bold',marginBottom:hp("2%")
      },
    })
  },
  AddDetails:{
          screen: Add_Details,
          navigationOptions: ({ navigation }) => ({
            title: 'ADD BUSINESS DETAILS',
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:null
          })
        },

  DashBoard:{
          screen: DashBoard,
          navigationOptions: ({ navigation }) => ({
            title:"Dashboard",
            headerLeft: null,
          })
           },

 New_User:{
            screen:New_User,
            headerMode: null,
            navigationOptions: ({ navigation }) => ({
              title: 'NEW USER',
              headerTitleStyle: {
                fontFamily:'Muli-Bold',marginBottom:hp("2%")
              },
              headerLeft:( 
                <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
              <Image
                source={require('./Image/icon/back_2x.png')}
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
                source={require('./Image/icon/back_2x.png')}
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
          headerTitleStyle: {
            fontFamily:'Muli-Bold',marginBottom:hp("2%")
          },
          headerLeft:( 
            <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
          <Image
            source={require('./Image/icon/back_2x.png')}
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
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:( 
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
              style={styles.back_butt0n} 
            />
            </TouchableOpacity>)
          })
},   

  AuthStack:{
             screen:AuthStack,
            //  headerMode:"none",
             navigationOptions: ({ navigation }) => ({
               headerMode:true,
              headerLeft: null,
              // headerBackTitle:null,
              headerTitleStyle: {
                fontFamily:'Muli-Bold',marginBottom:hp("2%")
              },
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
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
          headerLeft: null,
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
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
          headerLeft: null,
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
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:( 
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
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
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:( 
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
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
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:( 
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
              style={styles.back_butt0n} 
            />
            </TouchableOpacity>)
          })
        },  
  
  Business_Hour:{
          screen:Business_Hour,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'BUSINESS HOUR',
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:( 
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
              style={styles.back_butt0n} 
            />
            </TouchableOpacity>)
          })
        }, 

  Calendar:{
          screen:Calendar,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'CALENDAR',
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:( 
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
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
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:( 
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
              style={styles.back_butt0n} 
            />
            </TouchableOpacity>)
          })
        },
 Add_user:{
          screen:Add_user,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'ADD USER',
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:( 
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
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
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:( 
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
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
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:( 
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
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
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:( 
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
              style={styles.back_butt0n} 
            />
            </TouchableOpacity>)
          })
        },
  Reject:{
          screen:Reject,
          headerMode: null,
          navigationOptions: ({ navigation }) => ({
            title: 'Rating & Review',
            headerTitleStyle: {
              fontFamily:'Muli-Bold',marginBottom:hp("2%")
            },
            headerLeft:( 
              <TouchableOpacity  onPress={ () => { navigation.goBack() }}>
            <Image
              source={require('./Image/icon/back_2x.png')}
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
              headerStyle: {
                backgroundColor: 'white',

                // height: "130%",
              }, 
            },
      
});


export default class StackNavigator extends React.Component {
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
