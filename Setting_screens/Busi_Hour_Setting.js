import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  AppRegistry,
  Image,
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native";
import styles from '../Component/Style'
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import SwitchButton from 'switch-button-react-native';
import Switch from 'react-native-customisable-switch';
import ResponsiveImage from 'react-native-responsive-image'

const data_Services = [
    {
      value: '01',
    },
    {
      value: '02',
    },
    {
      value: '03',
    },
    {
      value: '04',
    }
  ];

export default class Business extends Component {
  constructor(props)
   {
    super(props);
    this.state = {
      username: "",
      password: '',hidePassword:"true",switchMonValue: true,
      switchTueValue: true,switchWedValue: true,switchThuValue: true,
      switchFriValue: true,switchSatValue: true,switchSunValue: true,
      Mon_time_on_min:0,Mon_time_on_hour:9,Mon_time_off_min:0,Mon_time_off_hour:1
    };  
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

time_Increase_mon=()=>{
  if(this.state.Mon_time_on_min <= 45)
  {
    this.setState({
      Mon_time_on_min : (this.state.Mon_time_on_min)+15
    })
  }
  else {
    this.setState({
      Mon_time_on_hour : (this.state.Mon_time_on_hour)+1 , Mon_time_on_min : 0
    })
  }
}

time_decrease_mon=()=>{
  if(this.state.Mon_time_on_min > 0)
  {
    this.setState({
      Mon_time_on_min : (this.state.Mon_time_on_min)-15
    })
  }
  else if(this.state.Mon_time_on_min == 0 && this.state.Mon_time_on_hour >=1) {
       
  
    this.setState({
      Mon_time_on_min : 45,
      Mon_time_on_hour : -1+(this.state.Mon_time_on_hour) 
    })
  }
  else if(this.state.Mon_time_on_hour <= 0 || this.state.Mon_time_on_min <= 0){
    Alert.alert("increase your time")
  }

}
   //////////////////
time_Increase=()=>{
  if(this.state.Mon_time_off_min <= 45)
  {
    this.setState({
      Mon_time_off_min : (this.state.Mon_time_off_min)+15
    })
  }
  else {
    this.setState({
      Mon_time_off_hour : (this.state.Mon_time_off_hour)+1 , Mon_time_off_min : 0
    })
  }
}

time_decrease=()=>{
  if(this.state.Mon_time_off_min > 0)
  {
    this.setState({
      Mon_time_off_min : (this.state.Mon_time_off_min)-15
    })
  }
  else if(this.state.Mon_time_off_min == 0 && this.state.Mon_time_off_hour >=1) {
       
  
    this.setState({
      Mon_time_off_min : 45,
      Mon_time_off_hour : -1+(this.state.Mon_time_off_hour) 
    })
  }
  else if(this.state.Mon_time_off_hour <= 0 || this.state.Mon_time_off_min <= 0){
    Alert.alert("increase your time")
  }

}
   
  render() {
    const {
  switchMonValue,switchTueValue,switchThuValue,switchWedValue,switchFriValue,switchSatValue,switchSunValue
    } = this.state;
    const { selectedHours, selectedMinutes } = this.state;
    return (
    <View  style={styles.container}>
            
        <View style={[styles.box,{marginBottom:"0%",height: hp('80%'),marginTop:hp("0%")}]}>     
        <Text style={[styles.text,{fontSize:RF(3.2),marginRight:wp("34%")}]}>Add Day and Time</Text>
        <View style={{flexDirection:"column"}}>
        <View style={styles.Business_hour}>
        <View style={styles.Business_hour_main}>
        <Switch
                          value={switchMonValue}
                          onChangeValue={() => this.setState({ switchMonValue: !switchMonValue })}
                          activeText={'Mon'}
                          inactiveText={'Mon'}
                          fontSize={10}
                          switchWidth={50}
                          switchHeight={17}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={24}
                          buttonHeight={24}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          inactiveTextColor="black"
                          // padding={true}
                          activeBackgroundColor	="rgb(255,164,0)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          // activeButtonBackgroundColor	="rgb(255,164,0)"
                          // inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={this.time_decrease_mon} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Mon_time_on_hour}:{this.state.Mon_time_on_min}</Text>
            <TouchableOpacity onPress={this.time_Increase_mon} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="1"/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={this.time_decrease} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Mon_time_off_hour}:{this.state.Mon_time_off_min}</Text>
            <TouchableOpacity onPress={this.time_Increase} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="1"/>
            </View>
            </View>     
        </View> 

        <View style={styles.Business_hour}>
        <View style={styles.Business_hour_main}>
        <Switch
                          value={switchMonValue}
                          onChangeValue={() => this.setState({ switchMonValue: !switchMonValue })}
                          activeText={'Mon'}
                          inactiveText={'Mon'}
                          fontSize={10}
                          switchWidth={50}
                          switchHeight={17}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={24}
                          buttonHeight={24}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          inactiveTextColor="black"
                          // padding={true}
                          activeBackgroundColor	="rgb(255,164,0)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          // activeButtonBackgroundColor	="rgb(255,164,0)"
                          // inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={this.time_decrease_mon} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Mon_time_on_hour}:{this.state.Mon_time_on_min}</Text>
            <TouchableOpacity onPress={this.time_Increase_mon} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="1"/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={this.time_decrease} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Mon_time_off_hour}:{this.state.Mon_time_off_min}</Text>
            <TouchableOpacity onPress={this.time_Increase} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="1"/>
            </View>
            </View>     
        </View> 

      <View style={styles.Business_hour}>
        <View style={styles.Business_hour_main}>
        <Switch
                          value={switchMonValue}
                          onChangeValue={() => this.setState({ switchMonValue: !switchMonValue })}
                          activeText={'Mon'}
                          inactiveText={'Mon'}
                          fontSize={10}
                          switchWidth={50}
                          switchHeight={17}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={24}
                          buttonHeight={24}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          inactiveTextColor="black"
                          // padding={true}
                          activeBackgroundColor	="rgb(255,164,0)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          // activeButtonBackgroundColor	="rgb(255,164,0)"
                          // inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={this.time_decrease_mon} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Mon_time_on_hour}:{this.state.Mon_time_on_min}</Text>
            <TouchableOpacity onPress={this.time_Increase_mon} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="1"/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={this.time_decrease} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Mon_time_off_hour}:{this.state.Mon_time_off_min}</Text>
            <TouchableOpacity onPress={this.time_Increase} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="1"/>
            </View>
            </View>     
        </View> 

      <View style={styles.Business_hour}>
        <View style={styles.Business_hour_main}>
        <Switch
                          value={switchMonValue}
                          onChangeValue={() => this.setState({ switchMonValue: !switchMonValue })}
                          activeText={'Mon'}
                          inactiveText={'Mon'}
                          fontSize={10}
                          switchWidth={50}
                          switchHeight={17}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={24}
                          buttonHeight={24}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          inactiveTextColor="black"
                          // padding={true}
                          activeBackgroundColor	="rgb(255,164,0)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          // activeButtonBackgroundColor	="rgb(255,164,0)"
                          // inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={this.time_decrease_mon} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Mon_time_on_hour}:{this.state.Mon_time_on_min}</Text>
            <TouchableOpacity onPress={this.time_Increase_mon} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="1"/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={this.time_decrease} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Mon_time_off_hour}:{this.state.Mon_time_off_min}</Text>
            <TouchableOpacity onPress={this.time_Increase} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="1"/>
            </View>
            </View>     
        </View> 

 <View style={styles.Business_hour}>
        <View style={styles.Business_hour_main}>
        <Switch
                          value={switchMonValue}
                          onChangeValue={() => this.setState({ switchMonValue: !switchMonValue })}
                          activeText={'Mon'}
                          inactiveText={'Mon'}
                          fontSize={10}
                          switchWidth={50}
                          switchHeight={17}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={24}
                          buttonHeight={24}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          inactiveTextColor="black"
                          // padding={true}
                          activeBackgroundColor	="rgb(255,164,0)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          // activeButtonBackgroundColor	="rgb(255,164,0)"
                          // inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={this.time_decrease_mon} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Mon_time_on_hour}:{this.state.Mon_time_on_min}</Text>
            <TouchableOpacity onPress={this.time_Increase_mon} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="1"/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={this.time_decrease} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Mon_time_off_hour}:{this.state.Mon_time_off_min}</Text>
            <TouchableOpacity onPress={this.time_Increase} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="1"/>
            </View>
            </View>     
        </View> 

 <View style={styles.Business_hour}>
        <View style={styles.Business_hour_main}>
        <Switch
                          value={switchFriValue}
                          onChangeValue={() => this.setState({ switchFriValue: !switchFriValue })}
                          activeText={'Fri'}
                          inactiveText={'Fri'}
                          fontSize={10}
                          switchWidth={50}
                          switchHeight={17}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={24}
                          buttonHeight={24}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          inactiveTextColor="black"
                          // padding={true}
                          activeBackgroundColor	="rgb(255,164,0)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          // activeButtonBackgroundColor	="rgb(255,164,0)"
                          // inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={this.time_decrease_mon} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Mon_time_on_hour}:{this.state.Mon_time_on_min}</Text>
            <TouchableOpacity onPress={this.time_Increase_mon} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="1"/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={this.time_decrease} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Mon_time_off_hour}:{this.state.Mon_time_off_min}</Text>
            <TouchableOpacity onPress={this.time_Increase} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="1"/>
            </View>
            </View>     
        </View> 

 <View style={styles.Business_hour}>
        <View style={styles.Business_hour_main}>
        <Switch
                          value={switchSunValue}
                          onChangeValue={() => this.setState({ switchSunValue: !switchSunValue })}
                          activeText={'Sun'}
                          inactiveText={'Sun'}
                          fontSize={10}
                          switchWidth={50}
                          switchHeight={17}
                          switchBorderRadius={12}
                          switchBorderWidth={0}
                          buttonWidth={24}
                          buttonHeight={24}
                          buttonBorderRadius={20}
                          buttonBorderWidth={0}
                          animationTime={150}
                          inactiveTextColor="black"
                          // padding={true}
                          activeBackgroundColor	="rgb(255,164,0)"
                          inactiveBackgroundColor	="rgb(238,238,238)"
                          // activeButtonBackgroundColor	="rgb(255,164,0)"
                          // inactiveButtonBackgroundColor={'rgb(153,153,153)'}
                        />
            </View>
            <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={this.time_decrease_mon} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Mon_time_on_hour}:{this.state.Mon_time_on_min}</Text>
            <TouchableOpacity onPress={this.time_Increase_mon} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="1"/>
            </View>
            </View>
             
             <Text style={styles.Business_to}>to</Text>
             
             <View style={{flexDirection:"column"}}>
            <View style={styles.Business_hour_time}>
            <TouchableOpacity onPress={this.time_decrease} style={styles.business_hour_image_Arrow}>
            <ResponsiveImage source={require('../Image/main/leftArrow3x.png')} initWidth="12" initHeight="10"/>           
            </TouchableOpacity>
            <Text style={styles.Business_hour_text}>{this.state.Mon_time_off_hour}:{this.state.Mon_time_off_min}</Text>
            <TouchableOpacity onPress={this.time_Increase} style={styles.business_line}>
            <ResponsiveImage source={require('../Image/main/rightArrow3x.png')} initWidth="10" initHeight="10"/>           
            </TouchableOpacity>
            </View>
            <View style={styles.Business_Arrow_right}>
            <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="1"/>
            </View>
            </View>     
        </View> 

          <TouchableOpacity style={[styles.button,{backgroundColor:"white",shadowColor: 'grey',marginHorizontal:wp("30%")}]} onPress={() => {this.props.navigation.navigate('Calendar')}} >
          <Text style={[styles.buttonText,{color:"rgb(255,164,0)", shadowColor: 'white',}]}>Set up holidays</Text>
          </TouchableOpacity>        
        </View> 
      </View>   
      
      <View style={{marginTop:"5%"}}>
          <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
      </View>    
</View>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
