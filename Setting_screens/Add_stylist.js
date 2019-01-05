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
    title: 'Blow Dry'
  },
  {
    title: 'Hair Styling for Short HAir'
  },
  {
    title: 'Blow Dry'
  },
  {
    title: 'Hair Styling for Short HAir'
  },
  
  ],
  this.array_name = [{
    name: 'John Doe'
  },
  {
    name: 'Kenny Dukes'
  },
  
  ],
   this.state = {
                arrayHolder: [],arrayHolder_name:[],
                textInput_Holder: '',textInput_HolderName:''
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
    this.array.push({title : this.state.textInput_Holder});

    this.setState({ arrayHolder: [...this.array] })
    this.setState({textInput_Holder:""})
    this.setState({textInput_HolderName:""})

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
  clean_data(){
    this.setState({textInput_Holder:""})
    this.setState({textInput_HolderName:""})
  }
 render() {
return (
  <ScrollView>
    <View style={styles.Component}>
 <FlatList          
                    data={ this.state.arrayHolder_name }
                    // keyExtractor={(index) => index.toString()}
                    extraData={this.state.arrayHolder_name}
                    
                    renderItem={({item}) => 
    <View style={styles.Flat_box}>
          <Text style={[styles.Big_text,{fontSize: RF(2.5),marginLeft:wp("4%") }]}> {item.name}</Text>
        <FlatList
        data={this.state.arrayHolder}
        width='90%'
        marginHorizontal="5%"
        extraData={this.state.arrayHolder}
        // keyExtractor={(index) => index.toString()}

        ItemSeparatorComponent={this.FlatListItemSeparator}

        renderItem={({ item }) => 
        <Text style={[styles.item]} onPress={this.GetItem.bind(this, item.title)} > {item.title} </Text>}
        />
        <View style={styles.Row_divider}> 
        <ResponsiveImage style={{marginTop:hp("2%"),marginLeft:wp("5%")}} source={GLOBAL.Plus_icon_stylist} initWidth={GLOBAL.Icon_width} initHeight={GLOBAL.Icon_height}/>
        <TextInput
        placeholder="Add More Service "
        onChangeText={data => this.setState({ textInput_Holder: data })}
        style={[styles.Add_sty_text]}
        underlineColorAndroid='transparent'
        />
        </View>
</View>

    }/>

  <View style={[styles.Add_sty]}> 
        <ResponsiveImage style={{marginTop:hp("2%"),marginLeft:wp("5%")}} source={GLOBAL.Plus_icon_stylist} initWidth={GLOBAL.Icon_width} initHeight={GLOBAL.Icon_height}/>
        <TextInput
        placeholder="Add More Service "
        onChangeText={data => this.setState({ textInput_HolderName: data })}
        style={[styles.Add_sty_text]}
        underlineColorAndroid='transparent'
        />
        </View>
<TouchableOpacity onPress={this.joinData}  activeOpacity={0.7} style={[styles.button,{marginVertical:hp("2%"),marginHorizontal:wp("30%")}]} >

<Text  style={styles.buttonText}>Save</Text>

</TouchableOpacity>
  </View>
  </ScrollView>
   );
 }
}
