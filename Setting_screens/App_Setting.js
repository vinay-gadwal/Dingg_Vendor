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

export default class App_Setting extends Component {
    state = {
        isOnDefaultToggleSwitch: true,
        isOnLargeToggleSwitch: false,
        isOnBlueToggleSwitch: false,
      };
      openDialog = (show) => {
        this.setState({ showDialog: show });
    }

    onToggle(isOn){
      // alert('Changed to ' + isOn)
    }
    
  render() {
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}} horizontal={false}>

        <View style={{paddingVertical:"5%"}}>
          <View style={styles.Profile_Container}>
          <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>Notification</Text>
                    <View style={{marginRight:wp("7%"),marginTop:hp("4%")}}>
                    <ToggleSwitch  
                      onColor="rgb(255,164,0)" 
                      width={"0%"}
                      size="small"
                      isOn={this.state.isOnDefaultToggleSwitch}
                      onToggle={isOnDefaultToggleSwitch => {
                        this.setState({ isOnDefaultToggleSwitch });
                        this.onToggle(isOnDefaultToggleSwitch);
                      }}
                    />
                    </View>
            </View>
            <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
            </View>
            
            <TouchableOpacity >   
             <View style={{justifyContent:"space-between"}}>
                   <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>Change Password</Text>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </View>
                    <View style={{marginHorizontal:"5%"}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>
             </View>  
             </TouchableOpacity>
            
             <TouchableOpacity>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>

                    <Text style={styles.setting_text}>Terms & Condition</Text>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </View>
                    <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View>
              </TouchableOpacity>
              
              <TouchableOpacity>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>Privacy Policy</Text>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                  </View>
                  <View style={{marginHorizontal:"5%"}}>
              <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
              </View>            
              </TouchableOpacity>
              
              <TouchableOpacity>
              <View style={[styles.setting_Row,{marginVertical:hp("1%")}]}>
                    <Text style={styles.setting_text}>FAQ</Text>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                  </View>
              </TouchableOpacity>
          
          </View>
        </View>
      </ScrollView>
    );
  }
}

