import React, { Component } from 'react';
 import styles from '../Component/Style'
import { TouchableOpacity, ScrollView, View, Animated, FlatList, Text, TextInput, Alert, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'

export default class Stylist extends Component {
 
 constructor(props) {
   super(props);
   this.state = {
                valueArray: [], disabled: false ,hair_data:"",hair_data_time:"",
                isLoading: true,MakeUp_data:"",makeup_data_time:"",
                    dataSource : [ 
                        {
                            sty_name:"rahul"
                        },
                        {
                            name: "hair dry",
                        },
                        {
                        name: "Design in short hair",
                        },  
                ],
       }
     this.index = 0;
     this.animatedValue = new Animated.Value(0);
 }
 
 FlatListItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }
 componentDidMount(){
    this.addMore();
 }
 
      addMore = () =>
      {
          this.animatedValue.setValue(0);
  
          let newlyAddedValue = { index: this.index }
  
          this.setState({ disabled: true, valueArray: [ ...this.state.valueArray, newlyAddedValue ] }, () =>
          {
              Animated.timing(
                  this.animatedValue,
                  {
                      toValue: 1,
                      duration: 500,
                      useNativeDriver: true
                  }
              ).start(() =>
              {
                  this.index = this.index + 1;
                  this.setState({ disabled: false });
              }); 
          });              
      }
  
 render() {
  const animationValue = this.animatedValue.interpolate(
    {
        inputRange: [ 0, 1 ],
        outputRange: [ -59, 0 ]
    });

    let newArray = this.state.valueArray.map(( item, key ) =>
    {
        if(( key ) == this.index)
        {
            return(
                <View key = { key } style = {[ styles.viewHolder,]}>
                    <TextInput
                        value={this.state.hair_data}
                        onChangeText={hair_data => this.setState({ hair_data })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input]}
                        placeholder="Add More"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        //  secureTextEntry
                    />
                </View>
            );
        }
        else
        {
            return(
                <View key = { key } style = { styles.viewHolder }>
                   <TextInput
                    value={this.state.hair_data_time}
                    onChangeText={hair_data_time => this.setState({ hair_data_time })}
                    ref={input => (this.passwordCInput = input)}
                    // onSubmitEditing={() => this.passwordInput.focus()}
                    style={[styles.input]}
                    placeholder="Add More"
                    placeholderTextColor="rgb(204,204,204)"
                    returnKeyType="next"
                    //  secureTextEntry
                  />
                </View>
            );
        }
    });
return (
 <ScrollView>
<View style={{  flex: 1,
      justifyContent: "space-between",
      backgroundColor: "rgb(243,242,242)",
      paddingVertical:"0%"}}>
        
    <View style={{ 
          width: wp('90%'),marginLeft:"5%",
          height: hp('45%'),
          backgroundColor:"white",
          marginVertical:hp('5%'),
          borderRadius:10,}}>
          
     <View style={{flexDirection:"row"}}>
              <FlatList          
                    data={ this.state.dataSource }
                    renderItem={({item}) => 
                    <ScrollView>
                                        <Text style={[styles.text,{fontSize:28,marginLeft:wp("5%")}]}>{item.sty_name}</Text>                            
                                        <View style={{flexDirection:"row"}}> 
                                        <View style={{flexDirection:"column",marginVertical:hp("2%")}}>
                                        <Text style={[styles.text,{marginHorizontal:wp("5%")}]}>{item.name}</Text>
                                        
                                        <View style={{marginHorizontal:"5%"}}>
                                        <ResponsiveImage source={require('../Image/main/tableDivider2x.png')} initWidth="330" initHeight="2"/>
                                        </View>
                                        </View>          
                             </View>   
                    </ScrollView>   }                       
                    />
           </View>
            <View style={[styles.text,{marginHorizontal:wp("5%")}]}>
                                <View style = {{ flex: 1, padding: 4 }}>
                                {
                                    newArray
                                }
                                </View>
            </View>
</View>
        
<View style={{ 
          width: wp('90%'),marginLeft:"5%",
          height: hp('10%'),
          backgroundColor:"white",
          marginBottom:hp('5%'),
          borderRadius:10,}}>
            <View style={[styles.text,{marginHorizontal:wp("5%")}]}>
                                <View style = {{ flex: 1, padding: 4 }}>
                                {
                                    newArray
                                }
                                </View>
            </View>
</View>
        <TouchableOpacity >
        <View style={[styles.button,{marginBottom:hp("3%"),marginHorizontal:wp("30%")}]} >
        <Text style={styles.buttonText}>Save</Text>
       </View>
       </TouchableOpacity>
     </View>
</ScrollView>
   );
 }
}
 
