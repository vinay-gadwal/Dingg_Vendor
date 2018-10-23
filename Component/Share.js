import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,TouchableOpacity,Image
} from 'react-native';
import Share from 'react-native-share';
import images from '../image_src/imageBase64';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  onShare() {
    const shareOptions = {
      title: 'Share file',
      urls: [images.image1, images.image2],
    };
    return Share.open(shareOptions);
  }

  onShare2() {
    const shareOptions = {
      title: 'Share file',
      url: images.image1,
    };
    return Share.open(shareOptions);
  }

  render() {
    return (
      <View style={{flex:1}}>
        {/* <View style={{backgroundColor:"white",height:"10%",width:"100%",marginBottom:"4%",flexDirection:"row"}}>
          <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('AuthStack')}}>
                    <Image
                                source={require('../Image/icon/back.png')}
                                style={{ marginTop:"20%",
                                width: "80%",
                                height: "80%",
                                alignItems:"flex-start",marginLeft:"15%"}}
                    />
                    </TouchableOpacity>
               <Text style={{justifyContent:"center",fontSize:18,color:"black",paddingHorizontal:"20%",paddingVertical:"5%"}}>SHARE</Text>
          </View> */}
        <Button title="Share 2 images" onPress={() => this.onShare()}/>
        <Button title="Share single image" onPress={() => this.onShare2()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});