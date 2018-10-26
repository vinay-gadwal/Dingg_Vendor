import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from '../Component/Style'
import RF from "react-native-responsive-fontsize"
import {TextInputLayout} from 'rn-textinputlayout';
import { Dropdown } from 'react-native-material-dropdown';
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
      username: "",
      password: '',hidePassword:"true"
    };  
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    return (
    <View  style={styles.container}>
            
        <View style={[styles.box,{marginBottom:"0%",height: hp('38%'),marginTop:hp("12%")}]}>
        
         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <TextInputLayout focusColor="rgb(204,204,204)">

              <Text style={{marginTop:"17%",fontSize: RF(2.2),fontFamily:'Muli-Bold',}}>+91     </Text>
              </TextInputLayout>
              <Text>   </Text>
          <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
          <TextInput
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            style={[styles.input,{width: wp('52')}]}
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Mobile Number"
          />
         </TextInputLayout>
          </View>   
          <View style={{width:wp('70%'),height:hp("10%"),marginVertical:"0%"}}>
                      <Dropdown
                          data={data_Services} itemColor="rgb(255,163,0)"  selectedItemColor="grey"
                          value={'Select Services'}
                          dropdownPosition={0}
                          style={{ itemTextStyle:{ fontFamily:'Muli-Bold',},
                            width: wp('200%'),fontSize: RF(2.5),marginBottom:"10%",
                            // position: 'absolute',
                            top: 0,borderColor:"rgb(255,163,0)",placeholderTextColor:"rgb(222,222,222)"
                        }}
                      />
                  </View> 
                  <View style={{width:wp('70%'),marginVertical:"0%"}}>
                      <Dropdown
                          data={data_Stylist} itemColor="rgb(255,163,0)"  selectedItemColor="grey"
                          value={'Select Stylist'}
                          dropdownPosition={0}
                          style={{ itemTextStyle:{ fontFamily:'Muli-Bold',},
                            width: wp('200%'),fontSize: RF(2.5),marginBottom:"10%",
                            // position: 'absolute',
                            top: 0,borderColor:"rgb(255,163,0)",placeholderTextColor:"rgb(222,222,222)"
                        }}
                      />
                  </View>       
      </View>     
      <View style={{marginBottom:"20%"}}>
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
      </View>    
</View>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
