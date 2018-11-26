import React, { Component } from 'react';
import { TouchableOpacity,StyleSheet, ScrollView, View, Animated, FlatList, Text, TextInput, Alert, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
import styles from '../Component/Style'
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
    this.array.push({name : this.state.textInput_HolderName});

    this.setState({ arrayHolder_name: [...this.array_name] })

    this.array.push({title : this.state.textInput_Holder,time:this.state.textInput_HolderTime});

    this.setState({ arrayHolder: [...this.array] })

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
    <View style={{  flex: 1,
        justifyContent: "space-between",
        backgroundColor: "rgb(243,242,242)",}}>
 <FlatList          
                    data={ this.state.arrayHolder_name }
                    // keyExtractor={(index) => index.toString()}
                    renderItem={({item}) => 
    <View style={{ 
          width: wp('90%'),marginLeft:"5%",
          backgroundColor:"white",
          marginVertical:hp('2%'),
          borderRadius:10,}}>
          <Text style={[styles.text,{fontSize:RF(3),marginLeft:wp("5%"),marginVertical:hp("2%")}]}> {item.name}</Text>
        <FlatList

        data={this.state.arrayHolder}

        // width='70%'
        marginHorizontal="5%"
        extraData={this.state.arrayHolder}

        keyExtractor={(index) => index.toString()}

        // ItemSeparatorComponent={this.FlatListItemSeparator}

        renderItem={({ item }) =>  
                 <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                 <View style={{flexDirection:"column"}}>
                <Text style={[styles.item,{}]} onPress={this.GetItem.bind(this, item.title)} > {item.title} </Text>
                <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="250" initHeight="2"/>
                </View>
                <View style={{flexDirection:"column"}}>
                <Text style={styles.item} onPress={this.GetItem.bind(this, item.time)} > {item.time}m</Text>
                <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="50" initHeight="2"/>
               </View>
                </View>}
        />
        <View style={{flexDirection:"row",marginVertical:hp("2%")}}> 
        <ResponsiveImage style={{marginTop:hp("1.5%"),marginLeft:wp("5%")}} source={require('../Image/main/plusIconbig3x2.png')} initWidth="15" initHeight="15"/>
        <TextInput
        placeholder="Add More "
        onChangeText={data => this.setState({ textInput_Holder: data })}
        style={[styles.textInput,{borderBottomWidth:0,height:hp("5%"),width:wp("40%"),marginHorizontal:wp("5%"),marginBottom:wp("3%"),fontSize:RF(2.5)}]}
        underlineColorAndroid='transparent'
        />
          <TextInput
        placeholder="Add Time "
        onChangeText={data => this.setState({ textInput_HolderTime: data })}
        style={[styles.textInput,{borderBottomWidth:0,height:hp("5%"),width:wp("20%"),marginHorizontal:wp("5%"),marginBottom:wp("3%"),fontSize:RF(2.5)}]}
        underlineColorAndroid='transparent'
        />
        </View>
</View>

                    }
                    />
 <View style={[styles.box_SignUp,{height:hp("8%"),flexDirection:"row",marginHorizontal:wp("5%")}]}> 
        <ResponsiveImage style={{marginBottom:hp(".7%"),marginLeft:wp("5%")}} source={require('../Image/main/plusIconbig3x2.png')} initWidth="12" initHeight="12"/>
        <TextInput
        placeholder="Add More Category"
        onChangeText={data => this.setState({ textInput_HolderName: data })}
        style={[styles.textInput,{borderBottomWidth:0,height:hp("5%"),width:wp("50%"),marginHorizontal:wp("5%"),marginBottom:wp("3%"),fontSize:RF(2.5)}]}
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
