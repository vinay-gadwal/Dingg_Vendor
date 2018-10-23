import React, { Component } from 'react';
import {
  Text,
  View,Image,
  ScrollView,TextInput,TouchableOpacity
} from 'react-native';
import styles from './Style'

export default class App extends Component {
    state = {
        avatarSource: null,avatarSource1:null,
        videoSource: null
      };
    
  render() {
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)",flex:1}} horizontal={false}>
         
         {/* Header */}
         <View style={{backgroundColor:"white",flexDirection:"row"}}>
                <Text style={{justifyContent:"center",fontSize:18,color:"black",paddingHorizontal:"35%",paddingVertical:"5%"}}>DASHBOARD</Text>
        </View>
        
        
        {/* body */}
        <View style={{flex:1,paddingVertical:"10%",justifyContent:"space-evenly",paddingHorizontal:"5%"}}>
        
        <View style={{flexDirection:"row" ,justifyContent:"space-between"}}>
          <View style={{width:"45%",height:"100%",
                        backgroundColor:"white",paddingVertical:"10%",
                        borderRadius:10,
                        }}>
                                                
                    <Text style={styles.setting_text}>Share</Text>
                    
          </View>
          <View style={{width:"45%",height:"100%",
                        backgroundColor:"white",
                        borderRadius:10,paddingVertical:"10%",
                        }}>
                                                
                    <Text style={styles.setting_text}>Share</Text>
                    
          </View>
          </View>

          <View style={{flexDirection:"row" ,justifyContent:"space-between"}}>
          <View style={{width:"45%",height:"80%",
                        backgroundColor:"white",
                        borderRadius:10,paddingVertical:"10%",marginTop:"10%"
                        }}>
                                                
                    <Text style={styles.setting_text}>Share</Text>
                    
          </View>
          <View style={{width:"45%",height:"80%",
                        backgroundColor:"white",
                        borderRadius:10,paddingVertical:"10%",marginTop:"10%"
                        }}>
                                                
                    <Text style={styles.setting_text}>Share</Text>
                    
          </View>
          </View>
          <Text></Text>
          <View style={{width:"45%",height:"100%",
                        backgroundColor:"white",paddingVertical:"10%",
                        borderRadius:10,marginTop:"10%"
                        }}>
                                                
                    <Text style={styles.setting_text}>Share</Text>
                    
          </View>
        </View>
      </ScrollView>
    );
  }
}

