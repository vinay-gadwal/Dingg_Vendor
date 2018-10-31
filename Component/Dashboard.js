import React, { Component } from 'react';
import {
  Text,
  View,Image,Button,
  ScrollView,TextInput,TouchableOpacity,FlatList
} from 'react-native';
import styles from './Style'
import ToggleSwitch from 'toggle-switch-react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize"
import { Dialog } from "react-native-simple-dialogs";
import CountDown from 'react-native-countdown-component';
import ResponsiveImage from 'react-native-responsive-image'

export default class App extends Component {
    state = {
        avatarSource: null,avatarSource1:null,
        videoSource: null,isOnDefaultToggleSwitch: false,
        isOnLargeToggleSwitch_user: false,
        isOnBlueToggleSwitch: false,
        dataSource : [
          {
            name: "John Doe",served:"20",queue:"14",wait_time:2
          },
          {
            name: "rohan dell",served:"10",queue:"24",wait_time:5
          },
          {
            name: "john alexer",served:"10",queue:"24",wait_time:10
          }
        ]
    
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
          <Text style={styles.Header}>DASHBOARD</Text>
          <Text></Text>
         <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"5%",marginVertical:hp("3%")}}>
         <View style={styles.Dashboard_block}>
                    <View style={styles.Dashbosrd_image_top}>
                    <ResponsiveImage source={require('../Image/main/completetotalIcon3x.png')} initWidth="55" initHeight="55"/>                
                    </View>
                    <View style={{flexDirection:"column"}}>
                    <Text style={[styles.text,{fontSize: RF(3.2),marginLeft:wp("5%")}]}>100</Text>
                    <Text style={[styles.setting_text,{color:"rgb(168,168,168)",marginLeft:wp("4%")}]}>Total</Text>      
                    </View>
        </View>
        <View style={styles.Dashboard_block}>
                    
                    <View style={styles.Dashbosrd_image_top}>
                    <ResponsiveImage source={require('../Image/main/completecustomersHandledCopy3x.png')} initWidth="55" initHeight="55"/>                
                    </View>
                    <View style={{flexDirection:"column"}}>
                    <Text style={[styles.text,{fontSize: RF(3.2),marginLeft:wp("5%")}]}>100</Text>
                    <Text style={[styles.setting_text,{color:"rgb(168,168,168)",marginLeft:wp("4%")}]}>Served</Text>      
                    </View>
        </View>
        </View>
        <Text></Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"5%",marginBottom:wp("3%")}}>
         <View style={styles.Dashboard_block}>
             
                    <View style={styles.Dashbosrd_image_top}>
                      <ResponsiveImage source={require('../Image/main/completequeueCopy3x.png')} initWidth="55" initHeight="55"/>                
                    </View>
                    <View style={{flexDirection:"column"}}>
                    <Text style={[styles.text,{fontSize: RF(3.2),marginLeft:wp("5%")}]}>100</Text>
                    <Text style={[styles.setting_text,{color:"rgb(168,168,168)",marginLeft:wp("4%")}]}>Queue</Text>      
                    </View>       
       </View>
        <View style={styles.Dashboard_block}>
                    
                    <View style={styles.Dashbosrd_image_top}>
                      <ResponsiveImage source={require('../Image/main/completewaitTimeIcon3x.png')} initWidth="55" initHeight="55"/>                
                    </View>
                    <View style={{flexDirection:"column"}}>
                    <CountDown
                        until={5*60}
                        timeToShow	={['M']}
                        // size={18}
                        digitBgColor="false"
                        label="false"
                        style={marginTop=hp("2%")}
                        marginTop="2%"
                    /> 
                    <Text style={{color:"rgb(168,168,168)", fontSize: RF(2.5),
                            justifyContent:"flex-start",
                            fontFamily:"Muli-Bold"}}>Wait time</Text>      
                    </View>      
        </View>
        </View>
        <Text></Text>
        <View style={styles.Profile_Container}>
        
        <View style={[styles.setting_Row,{marginBottom:hp("3%")}]}>
                    <Text style={styles.setting_text}>Ready to accept booking</Text>
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
                  
                <View style={[styles.setting_Row,{marginBottom:hp("3%")}]}>
                    <Text style={styles.setting_text}>Add Customer</Text>
                    <TouchableOpacity onPress={ () => this.openDialog(true) }>
                      <Image
                                  source={require('../Image/icon/arrow_right.png')}
                                  style={[styles.setting_Image,{marginRight:wp("8%")}]}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{marginHorizontal:"5%"}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
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
                      <Text style={[styles.text,{fontSize: RF(2.5),}]}>Choose a Dinng User Type</Text>
                      <Text></Text>
                      <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('New_User');this.openDialog(false)}}>
                      <Text style={styles.buttonText}>New User</Text>
                      </TouchableOpacity>
                      <Text></Text>
                      <Text></Text>
                      <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Exist_User');this.openDialog(false)}}>
                      <Text style={styles.buttonText}>Existing User</Text>
                      </TouchableOpacity>
                      <Text></Text>
              </Dialog>


                  <View style={styles.setting_Row}>
                    <Text style={styles.setting_text}>View Offers</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddOffer')}}>
                    <Image
                                source={require('../Image/icon/arrow_right.png')}
                                style={[styles.setting_Image,{marginRight:wp("8%")}]}
                    />
                    </TouchableOpacity>
                  </View>

        </View>
        
        <View style={{paddingVertical:"10%"}}>
          <View style={styles.Profile_Container}>
              
              <View style={[styles.setting_Row,{marginBottom:hp("3%")}]}>
                          
                          <View style={[styles.Dashbosrd_image,{marginLeft:wp("4%")}]}>
                             <ResponsiveImage source={require('../Image/main/attendanceIcon3x.png')} initWidth="23" initHeight="23"/>                
                          </View>
                          
                      
                          <View style={[styles.Dashbosrd_image,{width:wp(.5),marginRight:hp("5%")}]}>
                             <ResponsiveImage source={require('../Image/main/iconDivider3x.png')} initWidth="3" initHeight="23"/>                
                          </View>
                          
                          <View style={[styles.Dashbosrd_image]}>
                             <ResponsiveImage source={require('../Image/main/employeeNameIcon3x.png')} initWidth="15" initHeight="23"/>                
                          </View>
                    
                           <View style={[styles.Dashbosrd_image,{width:wp(.5),marginLeft:wp("12%")}]}>
                             <ResponsiveImage source={require('../Image/main/iconDivider3x.png')} initWidth="3" initHeight="23"/>                
                          </View>
                        
                          <View style={[styles.Dashbosrd_image,]}>
                             <ResponsiveImage source={require('../Image/main/customersHandledCopy3x.png')} initWidth="23" initHeight="23"/>                
                          </View>
                          
                          <View style={[styles.Dashbosrd_image,{width:wp(.5)}]}>
                             <ResponsiveImage source={require('../Image/main/iconDivider3x.png')} initWidth="3" initHeight="23"/>                
                          </View>
                          
                          <View style={[styles.Dashbosrd_image,{width:wp("7%"),height:hp("2.5%")}]}>
                             <ResponsiveImage source={require('../Image/main/queueCopy3x.png')} initWidth="32" initHeight="23"/>                
                          </View>
                          
                           <View style={[styles.Dashbosrd_image,{width:wp(.5)}]}>
                             <ResponsiveImage source={require('../Image/main/iconDivider3x.png')} initWidth="3" initHeight="23"/>                
                          </View>
                          
                           <View style={[styles.Dashbosrd_image,{marginRight:wp("5%")}]}>
                             <ResponsiveImage source={require('../Image/main/waitTimeIcon3x.png')} initWidth="23" initHeight="23"/>                
                          </View>
                  </View>
                  <View style={{marginHorizontal:"5%"}}>
                   <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                   </View>  
                   <FlatList
       
                      data={ this.state.dataSource }
                      
                      // ItemSeparatorComponent = {this.FlatListItemSeparator}

                      renderItem={({item}) => 
                                  <View style={[styles.setting_Row,{marginBottom:"5%",height: hp('7%'),}]}>
                                  <ToggleSwitch  
                                      onColor="rgb(255,164,0)" 
                                      width={"0%"}
                                      size="small"
                                      isOn={this.state.isOnLargeToggleSwitch_user}
                                      onToggle={isOnLargeToggleSwitch_user => {
                                        this.setState({ isOnLargeToggleSwitch_user });
                                        this.onToggle(isOnLargeToggleSwitch_user);
                                      }}
                                    />
                    <Text style={[styles.setting_text,{marginRight:"5%",marginLeft:wp("0%")}]}>{item.name}</Text>
                   <Text style={[styles.setting_text,{marginRight:wp("0%"),marginLeft:wp("5%")}]}>{item.served}</Text>
                   <Text style={[styles.setting_text,{marginRight:wp("0%"),marginLeft:wp("5%")}]}>{item.queue}</Text>
                    <CountDown
                        until={item.wait_time*60}
                        timeToShow	={['M']}
                        // size={18}
                        digitBgColor="false"
                        label="false"
                        style={marginTop=hp("2%")}
                        marginTop="2%"
                    /> 
                  </View>
                   }

                   // keyExtractor={(item, index) => index.toString()}
                   
                   />
            
             </View>
          <Text></Text>
        </View>
      </ScrollView>
    );
  }
}

