import React, { Component } from 'react';
import {
  Text,
  View,Image,
  ScrollView,TextInput,TouchableOpacity
} from 'react-native';
import styles from './Style'
import ToggleSwitch from 'toggle-switch-react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
export default class App extends Component {
    state = {
        avatarSource: null,avatarSource1:null,
        videoSource: null,
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

        <View style={{paddingVertical:"10%"}}>
          <View style={styles.Profile_Container}>
                
                <View >
                  <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>App Setting</Text>
                    <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
                  <TextInput style={styles.Setting_lineSetting}/>
                </View>
              
                <View >
                <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Business Hour Setting</Text>
                    <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
                  <TextInput style={styles.Setting_lineSetting}/>
              </View>
            
              <View >
              <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Set Up Services</Text>
                    <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
                <TextInput style={styles.Setting_lineSetting}/>
              </View>             
            
              <View >
              <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Review & rating</Text>
                    <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
                <TextInput style={styles.Setting_lineSetting}/>
              </View>             
            
              <View >
              <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Add Stylist</Text>
                    <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
                <TextInput style={styles.Setting_lineSetting}/>
              </View>             
            
              <View >
              <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Auto Accept</Text>
                    <View style={{marginRight:wp("7%"),marginTop:hp("4%")}}>
                    <ToggleSwitch  
                      onColor="rgb(255,164,0)" 
                      width={"1%"}
                      size="small"
                      isOn={this.state.isOnDefaultToggleSwitch}
                      onToggle={isOnDefaultToggleSwitch => {
                        this.setState({ isOnDefaultToggleSwitch });
                        this.onToggle(isOnDefaultToggleSwitch);
                      }}
                    />
                    </View>
                  </View>
                <TextInput style={styles.Setting_lineSetting}/>
              </View>             
            
              <View >
              <View style={styles.setting_Row}>
                  <Text style={styles.setting_text}>Manage Users</Text>
                  <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                </View>
                <TextInput style={styles.Setting_lineSetting}/>
              </View>              
            
              <View >
              <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Set Queue Limit</Text>
                    <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image]}
                    />
                    </TouchableOpacity>
                  </View>
              </View>             
            
        
          </View>
              <TouchableOpacity style={[styles.button,{marginTop:hp("5"),marginHorizontal:wp("30%")}]} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('AuthStack')}}>
                  <Text style={styles.buttonText}>Log Out</Text>
              </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

