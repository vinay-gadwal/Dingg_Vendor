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
import RadioGroup from 'react-native-radio-buttons-group';
import styles from '../Component/Style'
import RF from "react-native-responsive-fontsize"
import {TextInputLayout} from 'rn-textinputlayout';
import { Dropdown } from 'react-native-material-dropdown';
import MultiSelect from 'react-native-multiple-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const data_Services = [
  {
    id: '1',
    value: 'face massage',
  }, {
    id: '2',
    value: 'hair cut',
  }, {
    id: '3',
    value: 'cleaning',
  }, {
    id: '4',
    value: 'shaving',
  },
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
      First_name: "",
      Last_name: '',
      mob_no:'',
      hidePassword:"true",
      data: [ 
        {
            label: 'Join Now',
            value:this.phone(),
            color: 'rgb(255,164,0)'
        },
        {
            label: 'Join Later',
            value:this.email(),
            color: 'rgb(255,164,0)'
        }, 
          ],
          selectedItems :[],
    }
    items = [{
      id: '1',
      name: 'face massage',
    }, {
      id: '2',
      name: 'hair cut',
    }, {
      id: '3',
      name: 'cleaning',
    }, {
      id: '4',
      name: 'shaving',
    },];
  }
  
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  phone(){
    return(
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <TextInputLayout focusColor="rgb(255,164,0)">

      <Text style={{marginTop:"17%",fontSize: RF(2.2),fontFamily:'Muli-Bold',}}>+91     </Text>
      </TextInputLayout>
       <Text>   </Text>
       <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
       <TextInput
        //  value={this.state.username}
         onChangeText={username => this.setState({ username })}
         style={[styles.input,{width: wp('52')}]}
         placeholderTextColor="rgb(204,204,204)"
         returnKeyType='done'
         underlineColorAndroid='transparent'
         ref={input => (this.emailInput = input)}
         // onSubmitEditing={() => this.passwordCInput.focus()}
         keyboardType="numeric"
         autoCapitalize="none"
         autoCorrect={false}
         placeholder="Mobile Number"
       />
      </TextInputLayout>
      </View>
    )
  }
  email(){
    return(
      <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
       <TextInput
        //  value={this.state.username}
         onChangeText={username => this.setState({ username })}
         style={[styles.input]}
         placeholderTextColor="rgb(204,204,204)"
         returnKeyType='next'
         underlineColorAndroid='transparent'
         ref={input => (this.emailInput = input)}
         // onSubmitEditing={() => this.passwordCInput.focus()}
         keyboardType="email-address"
         autoCapitalize="none"
         autoCorrect={false}
         placeholder="Email"
       />
      </TextInputLayout>
    )
  }

  onPress = data => this.setState({ data });

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.phone()

        const { selectedItems } = this.state;
    return (
   <KeyboardAwareScrollView  contentContainerStyle={styles.container}
                 keyboardShouldPersistTaps='handled'>      
        <View style={[styles.box,{height: hp('55%'),marginVertical:hp("1%"),paddingVertical:hp('1'),}]}>
        <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
        <TextInput
            value={this.state.First_name}
            onChangeText={First_name => this.setState({ First_name })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input,{height:hp("7"),width: wp('75%')}]}
            placeholder="First Name"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
          />
          </TextInputLayout>
          <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
        <TextInput
            value={this.state.Last_name}
            onChangeText={Last_name => this.setState({ Last_name })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={[styles.input,{height:hp("7"),width: wp('75%')}]}
            placeholder="Last Name"
            placeholderTextColor="rgb(204,204,204)"
            returnKeyType="next"
            //  secureTextEntry
          />
          </TextInputLayout>
          {/* <View style={{width:wp('70%'),height:hp("22%"),marginVertical:"0%"}}>
          <MultiSelect
                      hideTags
                      items={items}
                      uniqueKey="id"
                      ref={(component) => { this.multiSelect = component }}
                      ref={c => this._multiSelect = c}
                      onSelectedItemsChange={this.onSelectedItemsChange}
                      selectedItems={selectedItems}
                      selectText="Pick Items"
                      searchInputPlaceholderText="Search Items..."
                      onChangeInput={ (text)=> console.log(text)}
                      // altFontFamily="ProximaNova-Light"
                      tagRemoveIconColor="#CCC"
                      tagBorderColor="#CCC"
                      tagTextColor="#CCC"
                      selectedItemTextColor="#CCC"
                      selectedItemIconColor="green"
                      itemTextColor="#000"
                      displayKey="name"
                      searchInputStyle={{ color: '#CCC' }}
                      submitButtonColor="#CCC"
                      submitButtonText="Submit"
                    />
            </View>  */}
             <View style={{width:wp('75%'),marginVertical:"0%"}}>
                      <Dropdown
                          data={data_Stylist} 
                          itemColor="rgb(255,163,0)"  
                          selectedItemColor="black"
                          value={'Select Services'}
                          baseColor	="rgb(222,222,222)"
                          dropdownPosition={0}
                          textColor="rgb(204,204,204)"
                          style={{ 
                                width: wp('200%'),fontSize: RF(2.2),
                                marginBottom:"10%",
                                top: 0,borderColor:"rgb(255,163,0)",
                                placeholderTextColor:"rgb(222,222,222)"
                                  }}
                      />
              </View>   
            <View style={{width:wp('75%'),marginVertical:"0%"}}>
                      <Dropdown
                          data={data_Stylist} itemColor="rgb(255,163,0)"  selectedItemColor="grey"
                          value={'Select Stylist'}
                          textColor="red"
                          dropdownPosition={0}
                          textColor="rgb(204,204,204)"
                          style={{ itemTextStyle:{ fontFamily:'Muli-Bold',},
                            width: wp('200%'),fontSize: RF(2.2),marginBottom:"10%",
                            // position: 'absolute',
                            top: 0,borderColor:"rgb(255,163,0)",placeholderTextColor:"rgb(222,222,222)"
                        }}
                      />
              </View>   
              <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <TextInputLayout focusColor="rgb(255,164,0)">

              <Text style={{marginTop:hp("1.5%"),fontSize: RF(2.2),fontFamily:'Muli-Bold',}}>+91     </Text>
              </TextInputLayout>
              <Text>   </Text>
          <TextInputLayout focusColor="rgb(255,164,0)" labelFontSize={0.1}>
          <TextInput
            value={this.state.mob_no}
            onChangeText={mob_no => this.setState({ mob_no })}
            style={[styles.input,{width: wp('57')}]}
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
          <Text></Text>
          <View style={{flexDirection:"row",marginRight:wp("17%")}}>
          <RadioGroup style={color="red"} radioButtons={this.state.data} onPress={this.onPress}  flexDirection='row' />
          {/* <Text style={{color:"white"}}>mdnds,</Text> */}
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
