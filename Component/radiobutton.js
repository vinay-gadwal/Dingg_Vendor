import React, { Component } from 'react';
import { View, TextInput, Platform, StyleSheet, TouchableOpacity, Animated, ScrollView, Image } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  
export default class App extends Component
{
    constructor()
    {
        super();

        this.state = { valueArray: [], disabled: false ,Last_name:"",Last_name1:""}

        this.index = 0;

        this.animatedValue = new Animated.Value(0);
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

    render()
    {
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
                        value={this.state.Last_name}
                        onChangeText={Last_name => this.setState({ Last_name })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input]}
                        placeholder="Last Name"
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
                        value={this.state.Last_name1}
                        onChangeText={Last_name1 => this.setState({ Last_name1 })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input]}
                        placeholder="Last Name"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        //  secureTextEntry
                      />
                    </View>
                );
            }
        });

        return(
            <View style = { styles.container }>
                <ScrollView>
                    <View style = {{ flex: 1, padding: 4 }}>
                    {
                        newArray
                    }
                    </View>
                </ScrollView>

                {/* <TouchableOpacity activeOpacity = { 0.8 } style = { styles.btn } disabled = { this.state.disabled } onPress = { this.addMore }>
                    <Image source = { require('../Image/main/completewaitTimeIcon3x.png') } style = { styles.btnImage }/>
                </TouchableOpacity> */}
            </View>
        );
    }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center',
        paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },

    viewHolder:
    {
      width: wp('70%'),
      height: hp('5%'),
      marginBottom: hp('0%'),
      fontSize: RF(2.2),
      marginTop:"4%",
      textAlign:'left',  
      fontFamily:'Muli-Bold'
    },

    text:
    {
        color: 'white',
        fontSize: 25
    },

    btn:
    {
        position: 'absolute',
        right: 25,
        bottom: 25,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 15
    },

    btnImage:
    {
        resizeMode: 'contain',
        width: '100%',
        tintColor: 'white'
    }
});