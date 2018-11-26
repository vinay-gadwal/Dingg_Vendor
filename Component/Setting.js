import React, { Component } from 'react';
import {
  Text,
  View,Image,
  ScrollView,TouchableOpacity
} from 'react-native';
import styles from './Style'
import ToggleSwitch from 'toggle-switch-react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import ResponsiveImage from 'react-native-responsive-image'
import SwitchButton from 'switch-button-react-native';
import Switch from 'react-native-customisable-switch';
import {createBottomTabNavigator,createStackNavigator,} from 'react-navigation';
import Alert_top from './Alert'
 class Setting extends Component {
    state = {
        avatarSource: null,avatarSource1:null,
        videoSource: null,
        isOnDefaultToggleSwitch: true,
        isOnLargeToggleSwitch: false,
        isOnBlueToggleSwitch: false,switchThreeValue: true,
      };
      openDialog = (show) => {
        this.setState({ showDialog: show });
    }

    onToggle(isOn){
      // alert('Changed to ' + isOn)
    }
    
  render() {
    const {
      switchThreeValue,
    } = this.state;
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}} horizontal={false}>
      {/* <Text style={styles.Header}>SETTINGS</Text> */}

        <View style={{paddingVertical:"4%"}}>
          <View style={styles.Profile_Container}>
            <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('App_setting')}}>
             <View style={{justifyContent:"space-between"}}>
                   <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>App Setting</Text>
                    <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('App_setting')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                    </View>
                    <View style={{marginHorizontal:"5%"}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
             </View>  
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Business_Hour')}}>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>

                    <Text style={styles.setting_text}>Business Hour Setting</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Business_Hour')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                    </View>
                    <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Set_up')}}>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>Set Up Services</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Set_up')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View>            
             </TouchableOpacity>
             <TouchableOpacity onPress={() => {this.props.navigation.navigate('Star_rating')}}>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>Review & Rating</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Star_rating')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View> 
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Add_stylist')}}>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>Add Stylist</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Add_stylist')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View>
              </TouchableOpacity>

              <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Auto Accept</Text>
                    <View style={{marginRight:wp("7%"),paddingVertical:hp("2%")}}>
                    {/* <ToggleSwitch  
                      onColor="rgb(255,164,0)" 
                      width={"1%"}
                      size="small"
                      isOn={this.state.isOnDefaultToggleSwitch}
                      onToggle={isOnDefaultToggleSwitch => {
                        this.setState({ isOnDefaultToggleSwitch });
                        this.onToggle(isOnDefaultToggleSwitch);
                      }}
                    /> */}
                     <Switch
                          value={switchThreeValue}
                          onChangeValue={() => this.setState({ switchThreeValue: !switchThreeValue })}
                          // activeText={'On'}
                          // inactiveText={'Off'}
                          fontSize={16}
                          switchWidth={48}
                          switchHeight={18}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={22}
                          buttonHeight={22}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          // padding={true}
                          activeBackgroundColor	="rgb(238,238,238)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          activeButtonBackgroundColor	="rgb(255,164,0)"
                          inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
                    </View>
                   </View>
                  <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Manage_user')}}>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                  <Text style={styles.setting_text}>Manage Users</Text>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('Manage_user')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                </View>
                <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>Set Queue Limit</Text>
                    <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
             </TouchableOpacity>
          </View>
         
        <TouchableOpacity style={[styles.button,{marginTop:hp("3"),marginHorizontal:wp("30%")}]} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('AuthStack')}}>
                  <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
export default createStackNavigator({
  Setting:{
    screen:Setting,
    navigationOptions: ({ navigation }) => ({
      title: 'SETTINGS',
     
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
  initialRouteName:"Setting",
  // headerMode: "none",
  navigationOptions: {
    headerTitleStyle: {
      fontWeight: 'bold',marginBottom:hp("2%"),fontSize: RF("2.4"),justifyContent:"center",alignItems:"center"
    },
      },

});
