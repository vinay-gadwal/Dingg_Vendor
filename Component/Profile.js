import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,TouchableOpacity,Image
} from 'react-native';
import styles from './Style'
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
import {createBottomTabNavigator,createStackNavigator,} from 'react-navigation';
import Alert_top from './Alert'
import Profile_edit from './Profile_Edit'
class App extends Component {
  
    state = {
      };
    
  render() {
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}}>
      <View style={{alignItems:"center"}}>
        <Text></Text>
        <Text></Text>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("40%"),marginBottom:hp("5%")}]}>
                  { GLOBAL.Image === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={GLOBAL.Image} />
                  }
            </View>
          <Text style={{fontSize: RF(3),fontFamily:"Muli-Bold"}}>{GLOBAL.Buss_name}</Text>
          <Text></Text>
          <Text style={{fontSize: RF(2),fontFamily:"Muli-Bold"}}>{GLOBAL.Master_Ven_ID}</Text>
          <Text></Text>
          <View style={[styles.Profile_Container]}>
                  <View style={{height:"1%",justifyContent:"center",alignItems:"center"}}>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile_edit')}}>
                  <ResponsiveImage source={require('../Image/main/editButtonmain3x.png')}  initWidth="75" initHeight="75"/>
                  </TouchableOpacity>
                  </View>
                    <Text style={styles.profile_Small_text}>Address</Text>
                    <Text style={[styles.setting_text,{marginLeft:"10%"}]}>{GLOBAL.Address}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>

                    <Text style={styles.profile_Small_text}>Locality</Text>
                    <Text style={[styles.setting_text,{marginLeft:"10%"}]}>{GLOBAL.Locality}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                  
                    <Text style={styles.profile_Small_text}>City</Text>
                    <Text style={[styles.setting_text,{marginLeft:"10%"}]}>{GLOBAL.City}</Text>

            </View>
            <Text></Text>
            <View style={styles.Profile_Container}>
            
                    <Text style={styles.profile_Small_text}>Website</Text>
                    <Text style={[styles.setting_text,{marginLeft:"10%"}]}>{GLOBAL.Website_url}</Text>
                    <View style={{marginHorizontal:"5%"}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                  
                    <Text style={styles.profile_Small_text}>Email</Text>
                    <Text style={[styles.setting_text,{marginLeft:"10%"}]}>{GLOBAL.Email}</Text>

            </View>
            <Text></Text>
            <View style={styles.Profile_Container}>
            
                    <Text style={styles.profile_Small_text}>Conatct Name</Text>
                    <Text style={[styles.setting_text,{marginLeft:"10%"}]}>{GLOBAL.Contact_Name}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                  
                    <Text style={styles.profile_Small_text}>Primary Number</Text>
                    <Text style={[styles.setting_text,{marginLeft:"10%"}]}>+91-{GLOBAL.Primary_No}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>

                   <View style={{justifyContent:"center"}}>
                    <Text style={styles.profile_Small_text}>Secondry Number</Text>
                    <Text style={[styles.setting_text,{marginLeft:"10%"}]}>+91-{GLOBAL.Secondry_no}</Text>
                    <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
                  </View>
                  
                  <View style={{justifyContent:"center"}}>
                  <Text style={styles.profile_Small_text}>Landline Number</Text>
                  <Text style={[styles.setting_text,{marginLeft:"10%"}]}>+91-{GLOBAL.Landline_No}</Text>
                </View>

            </View>
            <Text></Text>
            <View style={styles.Profile_Container}>
                  <Text style={styles.profile_Small_text}>Category</Text>
                  <Text style={styles.setting_text}>{GLOBAL.Category}</Text>
                  <View style={{marginHorizontal:wp("5%"),marginVertical:hp("2%")}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>

                  <Text style={styles.profile_Small_text}>Service Type</Text>
                  <Text style={[styles.setting_text,{marginLeft:"10%"}]}>Unisex</Text>
                  
            </View>
            <Text></Text>
            <TouchableOpacity style={[styles.Profile_Container,{flexDirection:"row"}]}
                          onPress={() => {this.props.navigation.navigate('QR_Code')}}>
                  
                  <Text style={[styles.setting_text,{marginTop:hp("1%"),marginLeft:wp("5%")}]}>My Dingg Code</Text>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image,{marginRight:wp("3%"),marginTop:hp("3%")}]}
                    />
            </TouchableOpacity>
            <Text></Text>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:"5%"}}>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("2%")}]}>
                  { GLOBAL.Image1 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={GLOBAL.Image1} />
                  }
            </View>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("2%")}]}>
                  {GLOBAL.Image2 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={GLOBAL.Image2} />
                  }
            </View>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("2%")}]}>
                  { GLOBAL.Image3 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={GLOBAL.Image3} />
                  }
            </View>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("2%")}]}>
                  {  GLOBAL.Image4 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={ GLOBAL.Image4} />
                  }
            </View>
        </View>
        </View>
      </ScrollView>
    );
  }
}

export default createStackNavigator({
  App:{
    screen:App,
    navigationOptions: ({ navigation }) => ({
      title: 'PROFILE',
     
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
        },    
},


{
  initialRouteName:"App",
  // headerMode: "none",
  navigationOptions: {
    headerTitleStyle: {
      fontWeight: 'bold',marginBottom:hp("2%"),fontSize: RF("2.4"),justifyContent:"center",alignItems:"center"
    },
      },

});