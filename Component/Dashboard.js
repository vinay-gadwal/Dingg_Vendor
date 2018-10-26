import React, { Component } from 'react';
import {
  Text,
  View,Image,Button,
  ScrollView,TextInput,TouchableOpacity,SafeAreaView
} from 'react-native';
import styles from './Style'
import ToggleSwitch from 'toggle-switch-react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import { Dialog } from "react-native-simple-dialogs";

export default class App extends Component {
    state = {
        avatarSource: null,avatarSource1:null,
        videoSource: null,isOnDefaultToggleSwitch: true,
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
          <Text></Text>
         <View style={{flexDirection:"row",}}>
         <View style={{  width:"40%",
                          backgroundColor:"white",
                          borderRadius:10,
                          justifyContent: 'space-between',marginHorizontal:"5%"}}>
            
                
                    <Text style={styles.setting_text}>Share</Text>
                    <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('Share')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={styles.setting_Image}
                    />
                    </TouchableOpacity>
      
        </View>
        <View style={{  width:"40%",
                          backgroundColor:"white",
                          borderRadius:10,
                          justifyContent: 'space-between',marginHorizontal:"5%"}}>
            
                 
                    <Text style={styles.setting_text}>Share</Text>
                    <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('Share')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={styles.setting_Image}
                    />
                    </TouchableOpacity  >
                  
        </View>
        </View>
        <Text></Text>
        <View style={{flexDirection:"row",}}>
         <View style={{  width:"40%",
                          backgroundColor:"white",
                          borderRadius:10,
                          justifyContent: 'space-between',marginHorizontal:"5%"}}>
            
                  
                    <Text style={styles.setting_text}>Share</Text>
                    <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('Share')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={styles.setting_Image}
                    />
                    </TouchableOpacity>
                
        </View>
        <View style={{  width:"40%",
                          backgroundColor:"white",
                          borderRadius:10,
                          justifyContent: 'space-between',marginHorizontal:"5%"}}>
            
                  
                    <Text style={styles.setting_text}>Share</Text>
                    <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('Share')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={styles.setting_Image}
                    />
                    </TouchableOpacity  >
        </View>
        </View>
        <Text></Text>
        <View style={styles.Profile_Container}>
                  <View>

                  </View>
                 
                  <View >
                  <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Ready to Accept Booking</Text>
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
                    <Text style={styles.setting_text}>Add Customer</Text>
                    <TouchableOpacity onPress={ () => this.openDialog(true) }>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image,{marginRight:wp("8%")}]}
                    />
                    </TouchableOpacity>
                  </View>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>
                <Dialog
                    // title="Choose a Dingg User Type"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialog(false) }
                    onTouchInside={ () => this.openDialog(false) }
                    visible={ this.state.showDialog }
                >   
                    <TouchableOpacity onPress={() => this.openDialog(false)}>
                     <Image
                                source={require('../Image/icon/cancel1.png')}
                                style={[styles.setting_Image,{marginLeft:wp("75%"),marginBottom:hp("2%"),marginTop:hp("0%")}]}
                    />
                    </TouchableOpacity>
                      <Text style={[styles.text,{fontSize: RF(3),}]}>Choose a Dinng User Type</Text>
                      <Text></Text>
                      <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('New_User')}}>
                      <Text style={styles.buttonText}>New User</Text>
                      </TouchableOpacity>
                      <Text></Text>
                      <Text></Text>
                      <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Exist_User')}}>
                      <Text style={styles.buttonText}>Existing User</Text>
                      </TouchableOpacity>
                      <Text></Text>
              </Dialog>


                  <View >
                  <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>View Offers</Text>
                    <TouchableOpacity >
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image,{marginRight:wp("8%")}]}
                    />
                    </TouchableOpacity>
                  </View>
                  </View>

            </View>
        <View style={{paddingVertical:"10%"}}>
          <View style={styles.Profile_Container}>
                
                <View >
                  <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>App Setting</Text>
                   
                  </View>
                  <TextInput style={styles.Setting_lineSetting}/>
                </View>
              
                <View >
                <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Business Hour Setting</Text>
                   
                  </View>
                  <TextInput style={styles.Setting_lineSetting}/>
              </View>
            
              <View >
              <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Set Up Services</Text>
                    
                  </View>
                <TextInput style={styles.Setting_lineSetting}/>
              </View>             
            
              <View >
              <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Review & rating</Text>
                   
                  </View>
                <TextInput style={styles.Setting_lineSetting}/>
              </View>             
            
              <View >
              <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Add Stylist</Text>
                   
                  </View>
                <TextInput style={styles.Setting_lineSetting}/>
              </View>             
            
              <View >
              <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Auto Accept</Text>
                    
                  </View>
                <TextInput style={styles.Setting_lineSetting}/>
              </View>             
            
              <View >
              <View style={styles.setting_Row}>
                  <Text style={styles.setting_text}>Manage Users</Text>
                  
                </View>
                <TextInput style={styles.Setting_lineSetting}/>
              </View>              
            
              <View >
              <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Set Queue Limit</Text>
                   
                  </View>
              </View>             
             </View>
          <Text></Text>
        </View>
      </ScrollView>
    );
  }
}

