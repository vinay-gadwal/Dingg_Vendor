import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
 
export default class App extends Component{

  constructor(){

    super();

    this.state={

      imageURL : 1

    }

  }

  Load_New_Image=()=>{

    this.setState({

      imageURL : (this.state.imageURL)+1

    })
  }
    
    render() {
 
      return (
    
          <View style={styles.MainContainer}>

            <Text 
              
 
              style = {styles.imageStyle} >{this.state.imageURL}</Text>

              <Button title="Click Here To Load Image From Different Source" onPress={this.Load_New_Image} />
                
          </View>
              
      );
    }
   }
    
   const styles = StyleSheet.create({
    
   MainContainer :{
 
   justifyContent: 'center',
   alignItems: 'center',
   flex:1,
   paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
   margin: 10
    
   },

   imageStyle:{

    width: 200, 
    height: 300, 
    resizeMode: 'center'

   }
    
   });