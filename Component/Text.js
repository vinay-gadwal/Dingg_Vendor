import React from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity,
  Image,ListView
} from 'react-native';
import styles from './Style'
import { Dropdown } from 'react-native-material-dropdown';
import ImagePicker from 'react-native-image-picker';
import {
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete'; // 1.2.12


const data = [
  {
    value: 'Salon',
  },
  {
    value: 'Doctor',
  },
  {
    value: 'Food',
  },
  {
    value: 'Plumber',
  }
];
export default class App extends React.Component {

  state = {
    avatarSource: null,avatarSource1:null,
    videoSource: null
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
        this.setState({
          avatarSource1:source
        })
      }
    });
  }

  selectVideoTapped() {
    const options = {
      title: 'Video Picker',
      takePhotoButtonTitle: 'Take Video...',
      mediaType: 'video',
      videoQuality: 'medium'
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled video picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        this.setState({
          videoSource: response.uri
        });
      }
    });
  }

  render() {
    return (
    <ScrollView style={{backgroundColor: "rgb(243,242,242)",height:300}}>
    <View style={styles.container}>
    <View style={{backgroundColor:"white",height:"10%",width:"100%",marginBottom:"4%",flexDirection:"row"}}>
          <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('SignUp')}}>
                    <Image
                                source={require('../Image/icon/back.png')}
                                style={{ marginTop:"35%",
                                width: 20,
                                height: 20,
                                alignItems:"flex-start",marginLeft:"10%"
                        }}
                    />
                    </TouchableOpacity>
               <Text style={{justifyContent:"center",fontSize:18,color:"black",paddingHorizontal:"20%",paddingVertical:"5%"}}>RATE US</Text>
          </View>
           <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={[styles.avatar, styles.avatarContainer,marginBottom=2]}>
                  { this.state.avatarSource === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatar} source={this.state.avatarSource} />
                  }
            </View>
          </TouchableOpacity>
          
              <Text style={{fontSize:18,paddingVertical:"5%"}}>Add Your Logo</Text>
         <View>
         <View style={styles.boxDetails}>
         <View style={{width:240}}>
              <Dropdown
                  data={data}
                  value={'Select Category'}
                  dropdownPosition={0}
                  style={{
                    width: "400%",
                    // position: 'absolute',
                    top: 0,marginBottom:20,borderColor:"rgb(255,163,0)",placeholderTextColor:"rgb(255,163,0)"
                }}
              />
        </View>
          <TextInput
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.inputSignUp}
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            // ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Address"
          />
          <TextInput
            // value={this.state.password}
            // onChangeText={password => this.setState({ password })}
            // ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.inputSignUp}
            placeholder="Locality"
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="go"
             secureTextEntry
          />
          <TextInput
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.inputSignUp}
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            // ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="City"
          />
          <TextInput
            // value={this.state.password}
            // onChangeText={password => this.setState({ password })}
            // ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.inputSignUp}
            placeholder="Website URL"
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="go"
             secureTextEntry
          />
          <TextInput
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.inputSignUp}
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            // ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            // keyboardType="Email ID"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Mobile Number"
          />
          <TextInput
            // value={this.state.password}
            // onChangeText={password => this.setState({ password })}
            // ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.inputSignUp}
            placeholder="Contact Name"
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="go"
             secureTextEntry
          />
          <TextInput
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.inputSignUp}
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            // ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Primary Number"
          />
          <TextInput
            // value={this.state.password}
            // onChangeText={password => this.setState({ password })}
            // ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.inputSignUp}
            placeholder="Secondry Number"
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="go"
             secureTextEntry
          />
          <TextInput
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.inputSignUp}
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            // ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Landline Number"
          />
          <TextInput
            // value={this.state.password}
            // onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.inputSignUp}
            placeholder="Master Vendor ID"
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="go"
             secureTextEntry
          />
    </View>
    <Text style={{fontSize:18,fontWeight:"bold",paddingTop:"4%",justifyContent:"center"}}>Add Images</Text>
    <View style={{paddingVertical:"3%",flexDirection:"row"}}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer,marginBottom=2]}>
          { this.state.avatarSource1 === null 
                        ? 
                    <Image
                        source={require('../Image/icon/plus.png')}
                        style={{width: 16,height: 16,}}
                      /> 
                        :
                    <Image style={styles.avatarMultiple} source={this.state.avatarSource1} />
          }
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer,marginBottom=2]}>
          { this.state.avatarSource1 === null 
                        ? 
                    <Image
                        source={require('../Image/icon/plus.png')}
                        style={{width: 16,height: 16,}}
                      /> 
                        :
                    <Image style={styles.avatarMultiple} source={this.state.avatarSource1} />
          }
          </View>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.button,paddingHorizontal="20%"]} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('AuthStack')}}>
        <Text style={{fontSize: 20,
                  alignSelf: "center",
                  textAlign: "center",
                  color: "white",
                  fontWeight: "700",marginHorizontal:"20%"}}>Submit</Text>
        </TouchableOpacity>
        </View>
</View>
</ScrollView>
    );
  }

}

