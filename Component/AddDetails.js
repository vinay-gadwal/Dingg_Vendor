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
  constructor(){
    super()
  
    this.state = {
        avatarSource: null,avatarSource1:null,
        Image_Source:null,Image_Source1:null,
        Image_Source_1:null,Image_Source_1_1:null,
        Image_Source_2:null,Image_Source_2_1:null,
       Address:"",Add_Data:"",Add_Bus_Details:"",Locality:"",City:"",
       Website_url:"",Email:"",Contact_Name:"",Primary_No:"",Secondry_no:"",
       Landline_No:"",Master_Ven_ID:""
      }
    }
    Fun_save(){
        GLOBAL.Buss_name=this.state.Add_Bus_Details;
        GLOBAL.Address=this.state.Address;
    }
    
      selectPhotoTapped1() {
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
              GLOBAL.Image=source;
              this.setState({ avatarSource: source });
              this.setState({ avatarSource1:source });
          }
        });
      }
    
      selectPhotoTapped2() {
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
             GLOBAL.Image1=source;
            this.setState({ Image_Source_2: source });
            this.setState({ Image_Source_2_1:source})
          }
        });
      }

      selectPhotoTapped3() {
        debugger
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
            GLOBAL.Image2=source;
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
            this.setState({
              Image_Source: source
            });
            this.setState({
              Image_Source1:source
            })
          }
        });
      }

      selectPhotoTapped4() {
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
            GLOBAL.Image3=source;
             this.setState({
              Image_Source_1: source
            });
            this.setState({
              Image_Source_1_1:source
            })
          }
        });
      }
    
      address_google(){
        
      }
  render() {
    return (
      <ScrollView style={{backgroundColor:"rgb(243,242,242)"}}>
          <View style={{paddingVertical:"5%"}}>

        <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
            <View style={[styles.avatar, styles.avatarContainer,{marginLeft:"35%"}]}>
                  { this.state.avatarSource === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 18,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatar} source={this.state.avatarSource} />
                  }
            </View>
          </TouchableOpacity>
          <Text style={{fontSize:18,paddingVertical:"5%",paddingHorizontal:"32%"}}>Add Your Logo</Text>
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
            value={this.state.Add_Bus_Details}
            onChangeText={Add_Bus_Details => this.setState({ Add_Bus_Details })}
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
            value={this.state.Address}
            onChangeText={Address => this.setState({ Address })}
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
          styles={{paddingHorizontal:"10%", textInputContainer: {
            width: '80%'
          },
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
            value={this.state.Locality}
            onChangeText={Locality => this.setState({ Locality })}
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
          <TextInput
            value={this.state.City}
            onChangeText={City => this.setState({ City })}
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
            value={this.state.Website_url}
            onChangeText={Website_url => this.setState({ Website_url })}
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
            value={this.state.Email}
            onChangeText={Email => this.setState({ Email })}
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
            value={this.state.Contact_Name}
            onChangeText={Contact_Name => this.setState({ Contact_Name })}
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
            value={this.state.Primary_No}
            onChangeText={Primary_No => this.setState({ Primary_No })}
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
            value={this.state.Secondry_no}
            onChangeText={Secondry_no => this.setState({ Secondry_no })}
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
            value={this.state.Landline_No}
            onChangeText={Landline_No => this.setState({ Landline_No })}
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
            value={this.state.Master_Ven_ID}
            onChangeText={Master_Ven_ID => this.setState({ Master_Ven_ID })}
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
    <View style={{paddingVertical:"3%",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:"5%"}}>
    <TouchableOpacity onPress={this.selectPhotoTapped2.bind(this)}>
            <View style={[styles.avatar, styles.avatarContainer]}>
                  { this.state.Image_Source_2_1 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatar} source={this.state.Image_Source_2_1} />
                  }
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.selectPhotoTapped3.bind(this)}>
            <View style={[styles.avatar, styles.avatarContainer]}>
                  { this.state.Image_Source1 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatar} source={this.state.Image_Source1} />
                  }
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.selectPhotoTapped4.bind(this)}>
            <View style={[styles.avatar, styles.avatarContainer]}>
                  { this.state.Image_Source_1_1 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatar} source={this.state.Image_Source_1_1} />
                  }
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ width: "40%",marginLeft:"30%",height:"4%",
                                backgroundColor: "rgb(255,163,0)",
                                justifyContent: "center",
                                paddingVertical: 10,
                                borderRadius:10}} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('AuthStack'),this.Fun_save()}}>
                  <Text style={{fontSize: 20,
                            alignSelf: "center",
                            textAlign: "center",
                            color: "white",
                            fontWeight: "700"}}>Submit</Text>
              </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

