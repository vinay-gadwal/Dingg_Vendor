import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,TextInput,TouchableOpacity,Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Dropdown } from 'react-native-material-dropdown';
import styles from './Style'
import {
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete'; // 1.2.12

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};
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
export default class App extends Component {
    state = {
        avatarSource: null,avatarSource1:null,
        videoSource: null,Address:"",Add_Data:""
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
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}}>
         <View style={{backgroundColor:"white",flexDirection:"row"}}>
          <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('SignUp')}}>
                    <Image
                                source={require('../Image/icon/back.png')}
                                style={{ marginTop:"25%",
                                width: 40,
                                height: 40,
                                alignItems:"flex-start",marginLeft:"10%"
                        }}
                    />
                    </TouchableOpacity>
               <Text style={{fontSize:18,color:"black",paddingHorizontal:"10%",paddingVertical:"5%"}}>ADD DETAILS</Text>
          </View>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={[styles.avatar, styles.avatarContainer,{marginLeft:"30%"}]}>
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
          <Text style={{fontSize:18,paddingVertical:"5%",paddingHorizontal:"28%"}}>Add Your Logo</Text>
          <View style={styles.boxDetails}>
          <View style={{width:"80%"}}>
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
            style={styles.welcome1}
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            // ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Add Business Name"
          />
          <TextInput
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.welcome1}
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
          <GooglePlacesAutocomplete
          placeholder="Search"
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed="auto" // true/false/undefined
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          onPress={(data = null) => {
            console.log(data);
            // console.log(details);
          }}
          getDefaultValue={() => {
            return ''; // text input default value
          }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyAGF8cAOPFPIKCZYqxuibF9xx5XD4JBb84',
            language: 'en', // language of the results
            types: '(cities)', // default: 'geocode'
          }}
          styles={{
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={{
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }}
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance',
            types: 'food',
          }}
          filterReverseGeocodingByTypes={[
            'locality',
            'administrative_area_level_3',
          ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          predefinedPlaces={[homePlace, workPlace]}
          debounce={200}
        />
          <TextInput
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.welcome1}
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            // ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Locality"
          />
          <Text>{this.state.Address}</Text>
          <TextInput
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.welcome1}
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
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.welcome1}
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            // ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Website URL"
          />
          <TextInput
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.welcome1}
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            // ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email ID"
          />
       <TextInput
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.welcome1}
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            // ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Conatact Name"
          />
          <TextInput
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.welcome1}
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
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.welcome1}
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            // ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Secondry Number"
          />
          <TextInput
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.welcome1}
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
            // value={this.state.username}
            // onChangeText={username => this.setState({ username })}
            style={styles.welcome1}
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="next"
            underlineColorAndroid='transparent'
            // ref={input => (this.emailInput = input)}
            // onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Master Vendor ID"
          />
          </View>
          <Text style={{fontSize:18,paddingVertical:"5%",paddingHorizontal:"5%"}}>Add Images</Text>
    <View style={{paddingVertical:"3%",flexDirection:"row",alignItems:"center"}}>
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
        <TouchableOpacity style={{ width: "40%",marginLeft:"30%",height:"4%",
                                backgroundColor: "rgb(255,163,0)",
                                justifyContent: "center",
                                paddingVertical: 10,
                                borderRadius:10}} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('AuthStack')}}>
                  <Text style={{fontSize: 20,
                            alignSelf: "center",
                            textAlign: "center",
                            color: "white",
                            fontWeight: "700"}}>Submit</Text>
              </TouchableOpacity>
      </ScrollView>
    );
  }
}

