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
const GLOBAL = require('../Component/Color');

class App extends Component {
  
    state = {
      };
    
  render() {
    return (
      <ScrollView style={GLOBAL.COLOR.rootBAckgroundColor}>
      <View style={{alignItems:"center"}}>
        <Text></Text>
        <Text></Text>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("40%"),marginBottom:hp("5%")}]}>
                  { GLOBAL.Image === null ? <Image
                                       source={GLOBAL.Plus_icon}
                                       style={{
                                         width: GLOBAL.COLOR.Size_15,
                                         height: GLOBAL.COLOR.Size_15,
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={GLOBAL.Image} />
                  }
            </View>
          <Text style={styles.Big_text}>{GLOBAL.Buss_name}</Text>
          <Text></Text>
          <Text style={styles.text}>{GLOBAL.Master_Ven_ID}</Text>
          <Text></Text>
          <View style={[styles.Profile_Container]}>
                  <View style={styles.profile_edit}>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile_edit')}}>
                  <ResponsiveImage source={GLOBAL.edit_icon}  initWidth={GLOBAL.COLOR.size_75} initHeight={GLOBAL.COLOR.size_75}/>
                  </TouchableOpacity>
                  </View>
                    <Text style={styles.profile_Small_text}>Address</Text>
                    <Text style={styles.profile_text}>jvvnfnk</Text>
                    <View style={[styles.AddServices]}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                </View>

                    <Text style={styles.profile_Small_text}>Locality</Text>
                    <Text style={styles.profile_text}>{GLOBAL.Locality}</Text>
                    <View style={[styles.AddServices]}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                </View>
                  
                    <Text style={styles.profile_Small_text}>City</Text>
                    <Text style={styles.profile_text}>{GLOBAL.City}</Text>

            </View>
            <Text></Text>
            <View style={styles.Profile_Container}>
            
                    <Text style={styles.profile_Small_text}>Website</Text>
                    <Text style={styles.profile_text}>{GLOBAL.Website_url}</Text>
                    <View style={[styles.AddServices,styles.padding_verticle]}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                </View>
                  
                    <Text style={styles.profile_Small_text}>Email</Text>
                    <Text style={styles.profile_text}>{GLOBAL.Email}</Text>

            </View>
            <Text></Text>
            <View style={styles.Profile_Container}>
            
                    <Text style={styles.profile_Small_text}>Conatct Name</Text>
                    <Text style={styles.profile_text}>{GLOBAL.Contact_Name}</Text>
                    <View style={[styles.AddServices,styles.padding_verticle]}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                </View>
                  
                    <Text style={styles.profile_Small_text}>Primary Number</Text>
                    <Text style={styles.profile_text}>+91-{GLOBAL.Primary_No}</Text>
                    <View style={[styles.AddServices,styles.padding_verticle]}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                </View>

                    <Text style={styles.profile_Small_text}>Secondry Number</Text>
                    <Text style={styles.profile_text}>+91-{GLOBAL.Secondry_no}</Text>
                    <View style={[styles.AddServices,styles.padding_verticle]}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                </View>
                  
                  <Text style={styles.profile_Small_text}>Landline Number</Text>
                  <Text style={styles.profile_text}>+91-{GLOBAL.Landline_No}</Text>

            </View>
            <Text></Text>
            <View style={styles.Profile_Container}>
                  <Text style={styles.profile_Small_text}>Category</Text>
                  <Text style={styles.profile_text}>{GLOBAL.Category}</Text>
                  <View style={[styles.AddServices,styles.padding_verticle]}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                </View>

                  <Text style={styles.profile_Small_text}>Service Type</Text>
                  <Text style={styles.profile_text}>Unisex</Text>
                  
            </View>
            <Text></Text>
            <TouchableOpacity style={[styles.Profile_Container,styles.Row_divider]}
                          onPress={() => {this.props.navigation.navigate('QR_Code')}}>
                  
                  <Text style={[styles.profile_text]}>My Dingg Code</Text>
                    <Image
                                source={GLOBAL.Arrow_image}
                                style={[styles.setting_Image]}                    />
            </TouchableOpacity>
            <Text></Text>
            <View style={styles.Row_divider}>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("2%")}]}>
                  { GLOBAL.Image1 === null ? <Image
                                      source={GLOBAL.Plus_icon}
                                      style={{
                                        width: GLOBAL.COLOR.Size_15,
                                        height: GLOBAL.COLOR.Size_15,
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={GLOBAL.Image1} />
                  }
            </View>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("2%")}]}>
                  {GLOBAL.Image2 === null ? <Image
                                     source={GLOBAL.Plus_icon}
                                     style={{
                                       width: GLOBAL.COLOR.Size_15,
                                       height: GLOBAL.COLOR.Size_15,
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={GLOBAL.Image2} />
                  }
            </View>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("2%")}]}>
                  { GLOBAL.Image3 === null ? <Image
                                      source={GLOBAL.Plus_icon}
                                      style={{
                                        width: GLOBAL.COLOR.Size_15,
                                        height: GLOBAL.COLOR.Size_15,
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={GLOBAL.Image3} />
                  }
            </View>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("2%")}]}>
                  {  GLOBAL.Image4 === null ? <Image
                                      source={GLOBAL.Plus_icon}
                                          style={{
                                            width: GLOBAL.COLOR.Size_15,
                                            height: GLOBAL.COLOR.Size_15,
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
          source={GLOBAL.Notification}
          style={styles.back_butt0n_right}  
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
            source={GLOBAL.Notification_yellow}
            style={styles.back_butt0n_right}
            />)
          })
        },    
},


{
  initialRouteName:"App",
  // headerMode: "none",
  navigationOptions: {
    headerTitleStyle:GLOBAL.Header
      },

});