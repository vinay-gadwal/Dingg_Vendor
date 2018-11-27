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
import RadioGroupS from 'react-native-custom-radio-group';
// import {radioGroupList} from './radioGroupList.js'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const radioGroupList = [{
  label: '4 pm',
  value: 'transport_car'
}, {
  label: '5 pm',
  value: 'transport_bike',
}, {
  label: '6 pm',
  value: 'transport_bus'
},{
  label: '5 pm',
  value: 'transport_bike',
}, {
  label: '6 pm',
  value: 'transport_bus'
},{
  label: '5 pm',
  value: 'transport_bike',
}, {
  label: '6 pm',
  value: 'transport_bus'
},
];
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
      Join_now:false,
      data: [ 
        {
            label: 'Join Now',
            color: 'rgb(255,164,0)',
            value:this.JoinNow(),
        },
        {
            label: 'Join Later',
            color: 'rgb(255,164,0)',
            value:this.JoinLatter(),
        }, 
          ],
    };  
  }
  onPress = data => this.setState({ data });

  JoinNow(){
    this.setState({Join_now:true})
   return (
     <View>
     </View>
   )
  }
  JoinLatter(){
    return(
     <View style={{height:hp("12%")}}>
       <Text style={[styles.text,{marginLeft:wp("10%"),color:"rgb(165,165,165)",marginVertical:hp("1%")}]}>Select Time Slot</Text>
     <ScrollView horizontal="true">
      <RadioGroupS radioGroupList={radioGroupList} 
       buttonContainerActiveStyle = {{backgroundColor: "rgb(255,164,0)"}}
       buttonTextActiveStyle = {{color: "white"}}
       buttonContainerInactiveStyle = {{backgroundColor: "white"}}
       buttonTextInactiveStyle = {{color: "rgb(255,164,0)"}}
       buttonContainerStyle ={{borderColor:"transparent",height:hp("6%"),marginRight:wp("1%"), shadowColor: 'rgb(222,222,222)',
       shadowOffset: { width: 0, height: hp("0.5%") },
       shadowOpacity: 0.8,
       shadowRadius: 4,}}
     />
     </ScrollView>
     </View>
    )
  }
  Time(){
    return(
      <View style={[styles.button,{height:hp("4%"),width:wp("20%")}]}>
      <Text style={[styles.buttonText,{fontSize:RF(1.8)}]}>04:00 pm</Text>
      </View>
    )
  }
  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.JoinNow()
    return (
      <KeyboardAwareScrollView  contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'>
            
        <View style={{marginTop:hp("5%"),  alignItems:"center",
                width: wp('90%'),
                backgroundColor:"white",
                paddingVertical:hp('3%'),
                borderRadius:10,}}>
         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <TextInputLayout focusColor="rgb(204,204,204)">

              <Text style={{marginTop:hp("1.5%"),fontSize: RF(2.2),fontFamily:'Muli-Bold',}}>+91     </Text>
              </TextInputLayout>
              <Text>   </Text>
          <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
          <TextInput
            value={this.state.Mob_no}
            onChangeText={Mob_no => this.setState({ Mob_no })}
            style={[styles.input,{width: wp('57'), height: hp('6%'),}]}
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
          <View style={{width:wp('75%'),height:hp("10%"),marginVertical:"0%"}}>
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
                  <View style={{width:wp('75%'),marginVertical:"0%"}}>
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
                  <View style={{flexDirection:"row",marginRight:wp("17%")}}>
          <RadioGroup style={color="red"} radioButtons={this.state.data} onPress={this.onPress} flexDirection='row' />
          </View>       
          {selectedButton}
         <Text></Text>   
      </View>     
          <TouchableOpacity style={[styles.button,{marginBottom:hp("5%")}]} >
          <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
</KeyboardAwareScrollView>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
