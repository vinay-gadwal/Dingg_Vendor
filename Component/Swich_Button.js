import React, { Component } from 'react'
import { View, Switch, StyleSheet }

from 'react-native'

export default SwitchExample = (props) => {
   return (
      <View style = {styles.container}>
         <Switch style={{height:2,width:4}}
         onValueChange = {props.toggleSwitch1}
         value = {props.switch1Value}/>
      </View>
   )
}
const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      marginTop: "5%",marginRight:"30%"
   }
})