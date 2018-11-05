import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,TextInput,TouchableOpacity,Image
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import styles from './Style'
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class App extends Component {
  
    state = {
        
      };
    
  render() {
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}}>
      {/* <Text style={styles.Header}>PROFILE</Text> */}

        <Text></Text>
        <Text></Text>
            <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("40%")}]}>
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
          <View style={styles.Profile_Container}>
            
                  <View >
                    <Text style={styles.profile_Small_text}>Address</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Address}</Text>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>

                  <View >
                    <Text style={styles.profile_Small_text}>Locality</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Locality}</Text>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>
                  
                  <View >
                    <Text style={styles.profile_Small_text}>City</Text>
                    <Text style={styles.setting_text}>{GLOBAL.City}</Text>
                  </View>

            </View>
            <Text></Text>
            <View style={styles.Profile_Container}>
            
                  <View >
                    <Text style={styles.profile_Small_text}>Website</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Website_url}</Text>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>
                  
                  <View >
                    <Text style={styles.profile_Small_text}>Email</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Email}</Text>
                  </View>

            </View>
            <Text></Text>
            <View style={styles.Profile_Container}>
            
                 <View >
                    <Text style={styles.profile_Small_text}>Conatct Name</Text>
                    <Text style={styles.setting_text}>{GLOBAL.Contact_Name}</Text>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>
                  
                  <View >
                    <Text style={styles.profile_Small_text}>Primary Number</Text>
                    <Text style={styles.setting_text}>+91-{GLOBAL.Primary_No}</Text>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>

                   <View style={{justifyContent:"center"}}>
                    <Text style={styles.profile_Small_text}>Secondry Number</Text>
                    <Text style={styles.setting_text}>+91-{GLOBAL.Secondry_no}</Text>
                    <TextInput style={styles.Setting_lineSetting}/>
                  </View>
                  
                  <View style={{justifyContent:"center"}}>
                  <Text style={styles.profile_Small_text}>Landline Number</Text>
                  <Text style={styles.setting_text}>+91-{GLOBAL.Landline_No}</Text>
                </View>

            </View>
            <Text></Text>
            <View style={styles.Profile_Container}>
            <View >
                  <Text style={styles.profile_Small_text}>Category</Text>
                  <Text style={styles.setting_text}>{GLOBAL.Category}</Text>
                  <TextInput style={styles.Setting_lineSetting}/>
                </View>

                 <View >
                  <Text style={styles.profile_Small_text}>Service Type</Text>
                  <Text style={styles.setting_text}>Unisex</Text>
                </View>
                  
            </View>
            <Text></Text>
            <View style={{  width:"90%",height:"4%",flexDirection:"row",
                          backgroundColor:"white",
                          borderRadius:10,
                          justifyContent: 'space-between',marginHorizontal:"5%"}}>
           
                  <Text style={styles.setting_text}>My Dingg Code</Text>
                  <TouchableOpacity>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image,{marginRight:wp("3%")}]}
                    />
                    </TouchableOpacity  >                  
            </View>
            <Text></Text>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:"5%"}}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
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
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
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
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
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
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
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
        <Text style={{marginBottom:hp("5%")}}></Text>
      </ScrollView>
    );
  }
}

