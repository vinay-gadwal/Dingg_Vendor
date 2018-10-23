import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,TextInput,TouchableOpacity,Image
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import styles from './Style'



const data = [
    {
      value: 'Salon',
    },
    {
      value: 'Doctor',
    },
    {
      value: 'Food',
    },
    {
      value: 'Plumber',
    }
  ];
export default class App extends Component {
  
    state = {
        
      };
    
  render() {
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}}>
    
            <View style={[styles.avatar, styles.avatarContainer,{marginLeft:"30%"}]}>
                  { GLOBAL.Image === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatar} source={GLOBAL.Image} />
                  }
            </View>
          <Text style={{fontSize:18,paddingVertical:"5%",paddingHorizontal:"28%"}}>{GLOBAL.Buss_name}</Text>
          <View style={{  width:"90%",
                          backgroundColor:"white",
                          borderRadius:10,
                          justifyContent: 'space-between',marginHorizontal:"5%"}}>
            
                  <View >
                    <Text style={styles.setting_text}>Address</Text>
                    <Text style={styles.setting_text}>{GLOBAL.code}</Text>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>

                  <View >
                    <Text style={styles.setting_text}>Locality</Text>
                    <Text style={styles.setting_text}>Tilak Nagar</Text>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>
                  
                  <View >
                    <Text style={styles.setting_text}>City</Text>
                    <Text style={styles.setting_text}>Mumbai</Text>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>

            </View>
            <Text></Text>
            <View style={{  width:"90%",
                          backgroundColor:"white",
                          borderRadius:10,
                          justifyContent: 'space-between',marginHorizontal:"5%"}}>
            
                  <View >
                    <Text style={styles.setting_text}>Website</Text>
                    <Text style={styles.setting_text}>www.biancabeauty.com</Text>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>
                  
                  <View >
                    <Text style={styles.setting_text}>Email</Text>
                    <Text style={styles.setting_text}>contact@biancabeauty.com</Text>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>

            </View>
            <Text></Text>
            <View style={{  width:"90%",
                          backgroundColor:"white",
                          borderRadius:10,
                          justifyContent: 'space-between',marginHorizontal:"5%"}}>
            
                 <View >
                    <Text style={styles.setting_text}>Conatct Name</Text>
                    <Text style={styles.setting_text}>Cecilia Andrews</Text>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>
                  
                  <View >
                    <Text style={styles.setting_text}>Primary Number</Text>
                    <Text style={styles.setting_text}>+91-9876543210</Text>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>

                   <View >
                    <Text style={styles.setting_text}>Secondry Number</Text>
                    <Text style={styles.setting_text}>+91-9876543210</Text>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>
                  
                  <View >
                  <Text style={styles.setting_text}>Landline Number</Text>
                  <Text style={styles.setting_text}>+91-9876543210</Text>
                  <TextInput style={styles.Setting_lineSetting}/>
                </View>

            </View>
            <Text></Text>
            <View style={{  width:"90%",
                          backgroundColor:"white",
                          borderRadius:10,
                          justifyContent: 'space-between',marginHorizontal:"5%"}}>
            <View >
                  <Text style={styles.setting_text}>Category</Text>
                  <Text style={styles.setting_text}>salon</Text>
                  <TextInput style={styles.Setting_lineSetting}/>
                </View>

                 <View >
                  <Text style={styles.setting_text}>Service Type</Text>
                  <Text style={styles.setting_text}>Unisex</Text>
                  <TextInput style={styles.Setting_lineSetting}/>
                </View>
                  
            </View>
            <Text></Text>
            <View style={{  width:"90%",
                          backgroundColor:"white",
                          borderRadius:10,
                          justifyContent: 'space-between',marginHorizontal:"5%"}}>
           
                 <View >
                  <Text style={styles.setting_text}>My Dingg Code</Text>
                  <TextInput style={styles.Setting_lineSetting}/>
                </View>
                  
            </View>
            <View style={{paddingVertical:"3%",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:"5%"}}>
            <View style={[styles.avatar, styles.avatarContainer]}>
                  { GLOBAL.Image1 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatar} source={GLOBAL.Image1} />
                  }
            </View>
            <View style={[styles.avatar, styles.avatarContainer]}>
                  {GLOBAL.Image2 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatar} source={GLOBAL.Image2} />
                  }
            </View>
            <View style={[styles.avatar, styles.avatarContainer]}>
                  { GLOBAL.Image3 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatar} source={GLOBAL.Image3} />
                  }
            </View>
        </View>
        <TouchableOpacity style={{ width: "40%",marginLeft:"30%",height:"4%",
                                backgroundColor: "rgb(255,163,0)",
                                justifyContent: "center",
                                paddingVertical: 10,
                                borderRadius:10}} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('AuthStack')}}>
                  <Text style={{fontSize: 20,
                            alignSelf: "center",
                            textAlign: "center",
                            color: "white",
                            fontWeight: "700"}}>Submit</Text>
              </TouchableOpacity>
      </ScrollView>
    );
  }
}

