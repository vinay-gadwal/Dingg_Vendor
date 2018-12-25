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
import apis from '../apis/index'

const GLOBAL = require('../Component/Color');
const initWidth = 330 
const initHeight = 2
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
    logout=()=>{
      apis.LOCAL_Delete_DATA('OTPticket').then(() => {
        this.props.navigation.navigate('login');    
        })
          apis.LOCAL_Delete_DATA('ticket').then(() => {
            this.props.navigation.navigate('login');    
            })
    }
  render() {
    const {
      switchThreeValue,
    } = this.state;
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}} horizontal={false}>
        <View style={{paddingVertical:"4%"}}>
          <View style={styles.Profile_Container}>
            <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('App_setting')}}>
                   <View style={[styles.setting_Row,]}>
                    <Text style={styles.Setting_text_}>App Setting</Text>
                    <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('App_setting')}}>
                    <Image
                                source={GLOBAL.Arrow_image}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                    </View>
                    <View style={styles.AddServices}>
                    <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Business_Hour')}}>
              <View style={[styles.setting_Row,]}>

                    <Text style={styles.Setting_text_}>Business Hour Setting</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Business_Hour')}}>
                    <Image
                                source={GLOBAL.Arrow_image}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                    </View>
                    <View style={styles.AddServices}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={initWidth} initHeight={initHeight}/>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Set_up')}}>
              <View style={[styles.setting_Row,]}>
                    <Text style={styles.Setting_text_}>Set Up Services</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Set_up')}}>
                    <Image
                                source={GLOBAL.Arrow_image}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.AddServices}>
                  <ResponsiveImage source={GLOBAL.TableDivider} initWidth={initWidth} initHeight={initHeight}/>
              </View>            
             </TouchableOpacity>
             <TouchableOpacity onPress={() => {this.props.navigation.navigate('Star_rating')}}>
              <View style={[styles.setting_Row,]}>
                    <Text style={styles.Setting_text_}>Review & Rating</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Star_rating')}}>
                    <Image
                                source={GLOBAL.Arrow_image}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.AddServices}>
                  <ResponsiveImage source={GLOBAL.TableDivider} initWidth={initWidth} initHeight={initHeight}/>
              </View> 
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Add_stylist')}}>
              <View style={[styles.setting_Row,]}>
                    <Text style={styles.Setting_text_}>Add Stylist</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Add_stylist')}}>
                    <Image
                                source={GLOBAL.Arrow_image}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.AddServices}>
                  <ResponsiveImage source={GLOBAL.TableDivider} initWidth={initWidth} initHeight={initHeight}/>
              </View>
              </TouchableOpacity>

              <View style={styles.setting_Row}>
                    <Text style={styles.Setting_text_}>Auto Accept</Text>
                    <View style={styles.switch_Style}>
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
                          activeButtonBackgroundColor	={GLOBAL.COLOR.ORANGE}
                          inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
                    </View>
                   </View>
                   <View style={styles.AddServices}>
                  <ResponsiveImage source={GLOBAL.TableDivider} initWidth={initWidth} initHeight={initHeight}/>
              </View>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Manage_user')}}>
              <View style={[styles.setting_Row,]}>
                  <Text style={styles.Setting_text_}>Manage Users</Text>
                  <TouchableOpacity onPress={() => {this.props.navigation.navigate('Manage_user')}}>
                    <Image
                                source={GLOBAL.Arrow_image}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                </View>
                <View style={styles.AddServices}>
                <ResponsiveImage source={GLOBAL.TableDivider} initWidth={initWidth} initHeight={initHeight}/>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={[styles.setting_Row]}>
                    <Text style={styles.Setting_text_}>Set Queue Limit</Text>
                    <TouchableOpacity>
                    <Image
                                source={GLOBAL.Arrow_image}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
             </TouchableOpacity>
          </View>
         
        <TouchableOpacity style={[styles.button]} onPress={this.logout}>
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
  initialRouteName:"Setting",
  // headerMode: "none",
  navigationOptions: {
    headerTitleStyle:GLOBAL.Header
      },

});
