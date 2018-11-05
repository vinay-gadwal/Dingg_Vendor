import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import PopoverTooltip from 'react-native-popover-tooltip';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 1
    };
  }
  render() {
    return (
      <View style={{flex:1, alignSelf:'stretch', alignItems:'center', justifyContent:'flex-start', backgroundColor:'#fff'}}>
        <View style={{height: 40}} />
        <Text>Default Effect</Text>
        <PopoverTooltip
          ref='tooltip1'
          buttonComponent={
            <View style={{width:200, height:50, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
              <Text>
                Press Me
              </Text>
            </View>
          }
          items={[
            {
              label: 'Start Serving',
              onPress: () => {}
            },
            {
              label: 'Move Down',
              onPress: () => {}
            }
            ,
            {
              label: 'Drop',
              onPress: () => {}
            },
            {
              label: 'Alert',
              onPress: () => {}
            }
          ]}
          // animationType='timing'
          // using the default timing animation
          />

        </View>
    );
  }
}