import React, { Component } from 'react';
import { TouchableOpacity,StyleSheet, ScrollView, View, Animated, FlatList, Text, TextInput, Alert, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
import styles from '../Component/Style'
const GLOBAL = require('../Component/Color');

export default class Stylist extends Component {
 
 constructor(props) {
   super(props);
   this.array = [{
    title: 'Blow Dry',
    time:"20"
  },
  {
    title: 'Hair Styling for Short Hair',
    time:"30"
  },
  {
    title: 'Blow Dry',
    time:"40"
  },
  {
    title: 'Hair Styling for Short HAir',
    time:"50"
  },
  
  ],
  this.array_name = [{
    name: 'Hair'
  },
  {
    name: 'Make Up'
  },
  
  ],
   this.state = {
                arrayHolder: [],arrayHolder_name:[],
                textInput_Holder: '',textInput_HolderName:'',textInput_HolderTime:''
       }
     this.index = 0;
     this.animatedValue = new Animated.Value(0);
 }
 
 componentDidMount() {

    this.setState({ arrayHolder: [...this.array] })
    this.setState({ arrayHolder_name: [...this.array_name] })
  }


  joinData = () => {
    this.array_name.push({name : this.state.textInput_HolderName});

    this.setState({ arrayHolder_name: [...this.array_name] })

    // this.array.push({title : this.state.textInput_Holder,time:this.state.textInput_HolderTime});

    // this.setState({ arrayHolder: [...this.array] })

  }
  
 FlatListItemSeparator = () => {
   return (
    <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "rgb(179,179,179)",
        }}
      />
   );
 }
 GetItem(item) {

    Alert.alert(item);

  }
  
 render() {
return (
    <ScrollView>
    <View style={styles.container}>
 <FlatList          
                    data={ this.state.arrayHolder_name }
                    extraData={this.state.arrayHolder_name}
                    renderItem={({item}) => 
    <View style={styles.Flat_box}>
          <Text style={styles.Big_text}> {item.name}</Text>
        <FlatList
        data={this.state.arrayHolder}
        marginHorizontal="5%"
        extraData={this.state.arrayHolder}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) =>  
                 <View style={styles.Row_divider}>
                 <View style={styles.Only_Column}>
                <Text style={[styles.item,{}]} onPress={this.GetItem.bind(this, item.title)} > {item.title} </Text>
                <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Size_250} initHeight={GLOBAL.COLOR._height}/>
                </View>
                <View style={styles.Only_Column}>
                <Text style={styles.item} onPress={this.GetItem.bind(this, item.time)} > {item.time}m</Text>
                <ResponsiveImage source={GLOBAL.TableDivider} initWidth={GLOBAL.COLOR.Yellow_50} initHeight={GLOBAL.COLOR._height}/>
               </View>
                </View>}
        />
        <View style={styles.Row_divider}> 
        <ResponsiveImage style={{marginTop:hp("1.5%"),marginLeft:wp("5%")}} source={GLOBAL.Plus_icon_stylist} initWidth={GLOBAL.Icon_width} initHeight={GLOBAL.Icon_height}/>
        <TextInput
        placeholder="Add More Service "
        onChangeText={data => this.setState({ textInput_Holder: data })}
        style={[styles.Add_sty_text]}
        underlineColorAndroid='transparent'
        />
        </View>
   </View>
             }
         />
  <View style={[styles.Add_sty]}> 
        <ResponsiveImage style={{marginTop:hp("1.5%"),marginLeft:wp("5%")}} source={GLOBAL.Plus_icon_stylist} initWidth={GLOBAL.Icon_width} initHeight={GLOBAL.Icon_height}/>
        <TextInput
        placeholder="Add More Service "
        onChangeText={data => this.setState({ textInput_HolderName: data })}
        style={[styles.Add_sty_text]}
        underlineColorAndroid='transparent'
        />
  </View>
   <TouchableOpacity onPress={this.joinData}  activeOpacity={0.7} style={[styles.button,{marginHorizontal:wp("30%")}]} >
      <Text  style={styles.buttonText}>Save</Text>
    </TouchableOpacity>
  </View>
  </ScrollView>
   );
 }
}
