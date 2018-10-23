import React, { Component } from 'react';
import {
  Text,
  View,Image,
  ScrollView,TextInput,TouchableOpacity,SafeAreaView
} from 'react-native';
import styles from './Style'
import Switch from './Swich_Button'
export default class App extends Component {
    state = {
        avatarSource: null,avatarSource1:null,
        videoSource: null
      };
    
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}  forceInset={{top: 'always'}}>

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
      
                    <TextInput style={styles.Setting_lineSetting}/>
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
                  
                    <TextInput style={styles.Setting_lineSetting}/>
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
                
                    <TextInput style={styles.Setting_lineSetting}/>
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
                    <TextInput style={styles.Setting_lineSetting}/>
        </View>
        </View>
        <Text></Text>
        <View style={{  width:"90%",
                          backgroundColor:"white",
                          borderRadius:10,
                          justifyContent: 'space-between',marginHorizontal:"5%"}}>
                  <View>

                  </View>
                 
                  <View >
                  <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Ready to Accept Booking</Text>
                    <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('Share')}}>
                    <Switch />

                    </TouchableOpacity  >
                  </View>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>
                  
                  <View >
                  <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Add Customer</Text>
                    <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('Rating')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={styles.setting_Image}
                    />
                    </TouchableOpacity>
                  </View>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>

                  <View >
                  <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>View Offers</Text>
                    <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('Rating')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={styles.setting_Image}
                    />
                    </TouchableOpacity>
                  </View>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>

            </View>
        <View style={{paddingVertical:"10%"}}>
          <View style={styles.setting_compo}>
                
                <View >
                  <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>App Setting</Text>
                    <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={styles.setting_Image}
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
                                style={styles.setting_Image}
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
                                style={styles.setting_Image}
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
                                style={styles.setting_Image}
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
                                style={styles.setting_Image}
                    />
                    </TouchableOpacity>
                  </View>
                <TextInput style={styles.Setting_lineSetting}/>
              </View>             
            
              <View >
              <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>Auto Accept</Text>
                    <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={styles.setting_Image}
                    />
                    </TouchableOpacity>
                  </View>
                <TextInput style={styles.Setting_lineSetting}/>
              </View>             
            
              <View >
              <View style={styles.setting_Row}>
                  <Text style={styles.setting_text}>Manage Users</Text>
                  <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={styles.setting_Image}
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
                                style={styles.setting_Image}
                    />
                    </TouchableOpacity>
                  </View>
                <TextInput style={styles.Setting_lineSetting}/>
              </View>             
            
        
          </View>
          <Text></Text>
              <TouchableOpacity style={{ width: "40%",marginLeft:"30%",height:"8%",
                                backgroundColor: "rgb(255,163,0)",
                                marginTop: "5%",
                                justifyContent: "center",
                                paddingVertical: 10,
                                borderRadius:10}} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('AuthStack')}}>
                  <Text style={{fontSize: 20,
                            alignSelf: "center",
                            textAlign: "center",
                            color: "white",
                            fontWeight: "700"}}>Submit</Text>
              </TouchableOpacity>
        </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

