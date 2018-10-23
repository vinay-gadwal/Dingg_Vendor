import React from 'react';
import {
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,View
} from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';
// import { Dropdown } from 'react-native-material-dropdown';
import sing_in from './Auth_Module/Signin'
import sing_up from './Auth_Module/Signup'
import Password from './Auth_Module/Password'
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

console.disableYellowBox = true;
const AuthStack = createBottomTabNavigator({
  D: {
    screen: DashBoard,
    navigationOptions: ({ navigation }) => ({
      title: 'D',
    })
  },
  QR: {
    screen: Queue_request
  },
  Q: {
    screen: Queue
  },
  H: {
    screen: history
  },
  S: {
    screen: Setting
  },
  P: {
    screen: Profile
  }
},
{
  initialRouteName: 'D',
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
          })
        },
  SignUp: {
          screen: sing_up,
          navigationOptions: ({ navigation }) => ({
            title: 'SIGN UP',
            headerBackTitle:null
          })
        },
  Crea_pass: {
          screen: Crea_pass,
          navigationOptions: ({ navigation }) => ({
            title: 'CREATE PASSWORD',
            headerBackTitle:null
          })
        },
  Password: {
          screen: Password,
          headerLeft: null,
          navigationOptions: ({ navigation }) => ({
            title: 'PASSWORD',
            headerBackTitle:null
          })
        },
  AddDetails:{
          screen: Add_Details,
          navigationOptions: ({ navigation }) => ({
            title: 'ADD BUSINESS DETAILS',
            headerBackTitle:null
          })
        },
  DashBoard:{
          screen: DashBoard,
          navigationOptions: ({ navigation }) => ({
            title: 'DASHBOARD',
            headerBackTitle:null,
            headerLeft: null,
          })
           },
  AuthStack:{
             screen:AuthStack,
             navigationOptions: ({ navigation }) => ({
              headerLeft: null,
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
