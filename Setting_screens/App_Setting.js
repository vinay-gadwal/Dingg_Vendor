import React, { Component } from 'react';
import {
  Text,
  View,Image,
  ScrollView,TextInput,TouchableOpacity
} from 'react-native';
import styles from '../Component/Style'
import ToggleSwitch from 'toggle-switch-react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import ResponsiveImage from 'react-native-responsive-image'
import Switch from 'react-native-customisable-switch';
const GLOBAL = require('../Component/Color');

export default class App_Setting extends Component {
    state = {
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
      <ScrollView style={{backgroundColor:GLOBAL.COLOR.rootBAckgroundColor}} horizontal={false}>

        <View style={styles.padding_verticle}>
          <View style={styles.Profile_Container}>
          <View style={styles.setting_Row}>
                    <Text style={styles.Setting_text_}>Notification</Text>
                    <View style={styles.switch_Style}>
                    <Switch
                          value={switchThreeValue}
                          onChangeValue={() => this.setState({ switchThreeValue: !switchThreeValue })}
                          // activeText={'On'}
                          // inactiveText={'Off'}
                          fontSize={16}
                          switchWidth={40}
                          switchHeight={15}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={18}
                          buttonHeight={18}
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
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
            </View>
            
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Change_password')}}>   
                   <View style={styles.setting_Row}>
                    <Text style={styles.Setting_text_}>Change Password</Text>
                    <Image
                                source={GLOBAL.Arrow_image}
                                style={styles.setting_Image}
                    />
                    </View>
                    <View style={styles.AddServices}>
                   <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
                   </View>
             </TouchableOpacity>
            
             <TouchableOpacity>
              <View style={styles.setting_Row}>

                    <Text style={styles.Setting_text_}>Terms & Conditions</Text>
                    <Image
                                source={GLOBAL.Arrow_image}
                                style={styles.setting_Image}
                    />
                    </View>
                    <View style={styles.AddServices}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
              </View>
              </TouchableOpacity>
              
              <TouchableOpacity>
              <View style={styles.setting_Row}>
                    <Text style={styles.Setting_text_}>Privacy Policy</Text>
                    <Image
                                source={GLOBAL.Arrow_image}
                                style={styles.setting_Image}
                    />
                  </View>
                  <View style={styles.AddServices}>
              <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR._width} initHeight={GLOBAL.COLOR._height}/>
              </View>            
              </TouchableOpacity>
              
              <TouchableOpacity>
              <View style={styles.setting_Row}>
                    <Text style={styles.Setting_text_}>FAQ</Text>
                    <Image
                                source={GLOBAL.Arrow_image}
                                style={styles.setting_Image}
                    />
                  </View>
              </TouchableOpacity>     
          </View>
        </View>
      </ScrollView>
    );
  }
}

