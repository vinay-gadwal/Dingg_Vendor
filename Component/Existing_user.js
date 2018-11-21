import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  AppRegistry,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from '../Component/Style'
import RF from "react-native-responsive-fontsize"
import {TextInputLayout} from 'rn-textinputlayout';
import { Dropdown } from 'react-native-material-dropdown';
import RadioGroup from 'react-native-radio-buttons-group';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const data_Services = [
  {
    value: 'Face Cleanup',
  },
  {
    value: 'Hair Cut',
  },
  {
    value: 'Shaving',
  },
  {
    value: 'Shampoo',
  }
];

const data_Stylist = [
  {
    value: 'John',
  },
  {
    value: 'Harry',
  },
  {
    value: 'Mith',
  },
  {
    value: 'Jack',
  }
];

export default class Login extends Component {
  constructor(props)
   {
    super(props);
    this.state = {
      Mob_no: "",
      password: '',hidePassword:"true",
      data: [ 
        {
            label: 'Join Now',
            color: 'rgb(255,164,0)'
        },
        {
            label: 'Join Later',
            color: 'rgb(255,164,0)'
        }, 
          ],
    };  
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    return (
      <KeyboardAwareScrollView  contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'>
            
        <View style={[styles.box,{marginBottom:"0%",height: hp('45%'),marginTop:hp("5%")}]}>
        
         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <TextInputLayout focusColor="rgb(204,204,204)">

              <Text style={{marginTop:"17%",fontSize: RF(2.2),fontFamily:'Muli-Bold',}}>+91     </Text>
              </TextInputLayout>
              <Text>   </Text>
          <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
          <TextInput
            value={this.state.Mob_no}
            onChangeText={Mob_no => this.setState({ Mob_no })}
            style={[styles.input,{width: wp('52'), height: hp('6%'),}]}
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="done"
            underlineColorAndroid='transparent'
            ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Enter Mobile Number"
          />
         </TextInputLayout>
          </View>   
          <View style={{width:wp('70%'),height:hp("10%"),marginVertical:"0%"}}>
                      <Dropdown
                          data={data_Services} itemColor="rgb(255,163,0)"  selectedItemColor="black"
                          value={'Select Services'}
                          dropdownPosition={0}
                          textColor="rgb(204,204,204)"
                          style={{ itemTextStyle:{ fontFamily:'Muli-Bold',},
                            width: wp('200%'),fontSize: RF(2.),marginBottom:"10%",
                            // position: 'absolute',
                            top: 0,borderColor:"rgb(255,163,0)",placeholderTextColor:"rgb(222,222,222)"
                        }}
                      />
                  </View> 
                  <View style={{width:wp('70%'),marginVertical:"0%"}}>
                      <Dropdown
                          data={data_Stylist} itemColor="rgb(255,163,0)"  selectedItemColor="black"
                          value={'Select Stylist'}
                          itemColor="black"
                          baseColor="rgb(204,204,204)"
                          dropdownPosition={0}
                          textColor="rgb(204,204,204)"
                          style={{ itemTextStyle:{ fontFamily:'Muli-Bold',color:"black"},
                            width: wp('200%'),fontSize: RF(2.2),marginBottom:"10%",
                            // position: 'absolute',
                            top: 0,borderColor:"rgb(255,163,0)",placeholderTextColor:"rgb(222,222,222)"
                        }}
                      />
                  </View>    
                  <Text></Text>
                  <View style={{flexDirection:"row"}}>
          <RadioGroup style={color="red"} radioButtons={this.state.data} onPress={this.onPress}  flexDirection='row' />
          <Text style={{color:"white"}}>mdnds,</Text>
          </View>       
            {/* {selectedButton}       */}
         <Text></Text>   
      </View>     
      <View style={{marginBottom:"5%"}}>
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
      </View>    
</KeyboardAwareScrollView>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
