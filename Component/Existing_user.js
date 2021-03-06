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
const GLOBAL = require('../Component/Color');

const radioGroupList = [{
  label: '10 am',
  value: 'transport_car'
}, {
  label: '11 am',
  value: 'transport_bike',
}, {
  label: '12 pm',
  value: 'transport_bus'
},{
  label: '1 pm',
  value: 'transport_bike',
}, {
  label: '2 pm',
  value: 'transport_bus'
},{
  label: '3 pm',
  value: 'transport_bike',
}, {
  label: '5 pm',
  value: 'transport_bus'
},
{
  label: '6 pm',
  value: 'transport_bus'
}, {
  label: '7 pm',
  value: 'transport_bus'
},
{
  label: '8 pm',
  value: 'transport_bus'
}, {
  label: '9 pm',
  value: 'transport_bus'
}, {
  label: '10 pm',
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
            color: GLOBAL.COLOR.ORANGE,
            value:this.JoinNow(),
            size: 18,
        },
        {
            label: 'Join Later',
            color: GLOBAL.COLOR.ORANGE,
            value:this.JoinLatter(),
            size: 18,
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
     <View style={{height:hp("20%"),marginBottom:hp("3%")}}>
       <Text style={[styles.text,styles.padding_verticle,{color:GLOBAL.COLOR.GRAY,marginLeft:wp("10%")}]}>Select Time Slot</Text>
     <ScrollView horizontal="true">
     <View style={{marginHorizontal:wp("2%")}}>
      <RadioGroupS radioGroupList={radioGroupList} 
       buttonContainerActiveStyle = {{backgroundColor:GLOBAL.COLOR.ORANGE}}
       buttonTextActiveStyle = {{color: GLOBAL.COLOR.White_color}}
       buttonContainerInactiveStyle = {{backgroundColor: GLOBAL.COLOR.White_color}}
       buttonTextInactiveStyle = {{color: GLOBAL.COLOR.ORANGE}}
       buttonContainerStyle ={styles.Select_time_user}
     />
     </View>
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
            
        <View style={[styles.box,{marginTop:hp("4%")}]}>
         <View style={styles.Row_divider}>
              <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}>

              <Text style={styles.Mobile_number_divider}>+91     </Text>
              </TextInputLayout>
              <Text>   </Text>
          <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
          <TextInput
            value={this.state.Mob_no}
            onChangeText={Mob_no => this.setState({ Mob_no })}
            style={[styles.Mobile_nput]}
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
          <View style={styles.DropDown_view}>
                      <Dropdown
                          data={data_Services} itemColor={GLOBAL.COLOR.ORANGE} selectedItemColor="black"
                          value={'Select Services'}
                          dropdownPosition={0}
                          style={{ itemTextStyle: [styles.DropDownStyle]
                          }}
                      />
                  </View> 
            <View style={styles.DropDown_view}>
                      <Dropdown
                          data={data_Stylist} itemColor={GLOBAL.COLOR.ORANGE} selectedItemColor="black"
                          value={'Select Stylist'}
                          itemColor="black"
                          baseColor="rgb(204,204,204)"
                          dropdownPosition={0}
                          style={{ itemTextStyle: [styles.DropDownStyle]
                          }}
                      />
              </View>    
                  <Text></Text>
          <View style={[styles.radioButtons,{marginRight:wp("18%")}]}>
          <RadioGroup radioButtons={this.state.data} onPress={this.onPress} flexDirection='row' />
          </View>       
          {selectedButton}
      </View>     
          <TouchableOpacity style={[styles.button,{marginBottom:hp("32%")}]} >
          <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
</KeyboardAwareScrollView>
    );
  }
}
