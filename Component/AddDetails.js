import React, { Component } from 'react';
import { Text,View,ScrollView,TextInput,TouchableOpacity,Image,Alert
        } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Dropdown } from 'react-native-material-dropdown';
import styles from './Style'
import {GooglePlacesAutocomplete,} from 'react-native-google-places-autocomplete'; // 1.2.12
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
        Image_Source_2:null,Image_Source_2_1:null,Image_Source_3:null,Image_Source_3_1:null,
        Address:"",Add_Data:"",Add_Bus_Details:"",Locality:"",City:"",
        Website_url:"",Email:"",Contact_Name:"",Primary_No:"",Secondry_no:"",
        Landline_No:"",Master_Ven_ID:"",Category:"",
      }
    }
    Fun_Phot_save(){
        // GLOBAL.Category=this.state.Category
        GLOBAL.Buss_name=this.state.Add_Bus_Details;
        GLOBAL.Address=this.state.Address;
        GLOBAL.Locality=this.state.Locality;
        GLOBAL.City=this.state.City;
        GLOBAL.Website_url=this.state.Website_url;
        GLOBAL.Email=this.state.Email;
        GLOBAL.Contact_Name=this.state.Contact_Name;
        GLOBAL.Primary_No=this.state.Primary_No;
        GLOBAL.Secondry_no=this.state.Secondry_no;
        GLOBAL.Landline_No=this.state.Landline_No;
        GLOBAL.Master_Ven_ID=this.state.Master_Ven_ID
    }
    
      selectPhotoTapped1() 
      {
                        const options = 
                        {
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
    
      selectPhotoTapped2() 
      {
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

      selectPhotoTapped3() 
      {
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

      selectPhotoTapped4() 
      {
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
    
      selectPhotoTapped5() 
      {
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
            GLOBAL.Image4=source;
             this.setState({
              Image_Source_3: source
            });
            this.setState({
              Image_Source_3_1:source
            })
          }
        });
      }

      delete_photo_1(){
        this.setState({avatarSource1:null})
      }
      delete_photo_2(){
        this.setState({Image_Source:null})
      }
      delete_photo_3(){
        this.setState({Image_Source_1_1:null})
      }
      delete_photo_4(){
        this.setState({Image_Source_2_1:null})
      }
      delete_photo_5(){
        this.setState({Image_Source_3_1:null})
      }

  render() {
    var SampleNameArray = [ "Pankaj", "Rita", "Mohan", "Amit", "Babulal", "Sakshi" ];

    return (
      <KeyboardAwareScrollView style={{backgroundColor:"rgb(243,242,242)"}}>
          <View style={{paddingVertical:"5%"}}>

        <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("40%")}]}>
                      { this.state.avatarSource === null ? <Image
                                          source={require('../Image/icon/plus.png')}
                                          style={{
                                            width: wp('3%'),
                                            height: hp('2%'),
                                            // left: 20
                      }}
                      /> :
                        <Image style={styles.avatarMultiple} source={this.state.avatarSource} />
                      }
                </View>
          </TouchableOpacity>
        
          <Text style={{fontSize: RF("18%"),paddingVertical:"5%",paddingHorizontal:wp("36%"),fontFamily:'Muli-Bold'}}>Add Your Logo</Text>
          
          <View style={styles.boxDetails}>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Add_Bus_Details}
                        onChangeText={Add_Bus_Details => this.setState({ Add_Bus_Details })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={[styles.input,{marginBottom:"0%"}]}
                        placeholder="Add Business Name"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"                
                      />
                  </TextInputLayout>
                  <View style={{width:wp('70%'),marginVertical:"0%"}}>
                      <Dropdown
                          data={data} itemColor="rgb(255,163,0)"  selectedItemColor="grey"
                          value={'Select Category'}
                          onChangeText={() => this.setState({Category:data.indexOf[0]})}
                          dropdownPosition={0}
                          textColor="rgb(204,204,204)"
                          style={{ itemTextStyle:{ fontFamily:'Muli-Bold',},
                            width: wp('200%'),fontSize: RF(2.5),marginBottom:"10%",
                            // position: 'absolute',
                            top: 0,borderColor:"rgb(255,163,0)",placeholderTextColor:"rgb(222,222,222)"
                        }}
                      />
                  </View>
        {/* <Text>{this.state.Category}</Text> */}
                  <View style={{flexDirection:"row",marginTop:hp("1.5%")}}>
                  <Text style={{color:"white"}}>bjjaaa</Text>
                  <GooglePlacesAutocomplete
                         value={this.state.Address}
                         onChangeText={Address => this.setState({ Address })}
                        placeholder="Address"
                        minLength={2} // minimum length of text to search
                        autoFocus={false}
                        returnKeyType={'next'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                        listViewDisplayed={false} // true/false/undefined
                        fetchDetails={true}
                        renderDescription={row => row.description} // custom description render
                        // onPress={(data = null) => {
                        //   console.log(data);
                        //   // console.log(details);
                        // }}
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
                            fontFamily:'Muli-Bold'
                                },
                          predefinedPlacesDescription: {
                                color: '#1faadb',
                              },
                          textInputContainer: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderTopWidth: 0,
                                borderBottomWidth:1,
                                borderColor:"rgb(201,201,201)",width:wp("70%")
                              },
                          textInput: {
                                marginLeft: 0,
                                // marginRight: 100,
                                color: '#5d5d5d',
                                fontSize:hp('2.2%')
                              },
                        }}
                        currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
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
                        // predefinedPlaces={[homePlace, workPlace]}
                        debounce={200}
                />
                <Text style={{color:"white"}}>bjjase</Text>
                </View>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Locality}
                        onChangeText={Locality => this.setState({ Locality })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="Locality"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        
                      />
                  </TextInputLayout>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.City}
                        onChangeText={City => this.setState({ City })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="City"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        
                      />
                  </TextInputLayout>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Website_url}
                        onChangeText={Website_url => this.setState({ Website_url })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="Website URL"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        keyboardType="email-address"
                      />
                  </TextInputLayout>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                        <TextInput
                          value={this.state.Email}
                          onChangeText={Email => this.setState({ Email })}
                          ref={input => (this.passwordCInput = input)}
                          // onSubmitEditing={() => this.passwordInput.focus()}
                          style={styles.input}
                          placeholder="Email ID"
                          placeholderTextColor="rgb(204,204,204)"
                          returnKeyType="next"
                          keyboardType="email-address"
                        />
                  </TextInputLayout>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                          <TextInput
                            value={this.state.Contact_Name}
                            onChangeText={Contact_Name => this.setState({ Contact_Name })}
                            ref={input => (this.passwordCInput = input)}
                            // onSubmitEditing={() => this.passwordInput.focus()}
                            style={styles.input}
                            placeholder="Contact Name"
                            placeholderTextColor="rgb(204,204,204)"
                            returnKeyType="next"
                          />
                  </TextInputLayout>
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                  <TextInputLayout focusColor="rgb(204,204,204)">

                      <Text style={{marginTop:"20%",fontSize: RF(2.2)}}>+91     </Text>
                  </TextInputLayout>
                          <Text>   </Text>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                        <TextInput
                          value={this.state.Primary_No}
                          onChangeText={Primary_No => this.setState({ Primary_No })}
                          style={[styles.input,{width: wp('52'), height: hp('4%')}]}
                          placeholderTextColor="rgb(204,204,204)"
                          returnKeyType="done"
                          underlineColorAndroid='transparent'
                          ref={input => (this.emailInput = input)}
                          // onSubmitEditing={() => this.passwordCInput.focus()}
                          keyboardType="numeric"
                          autoCapitalize="none"
                          autoCorrect={false}
                          placeholder="Primary Number"
                          fontFamily='Muli-Bold'
                        />
                </TextInputLayout>
                  </View>
                  <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                      <TextInputLayout focusColor="rgb(204,204,204)">

                      <Text style={{marginTop:"17%",fontSize: RF(2.2)}}>+91     </Text>
                      </TextInputLayout>
                      <Text>   </Text>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                          <TextInput
                            value={this.state.Secondry_no}
                            onChangeText={Secondry_no => this.setState({ Secondry_no })}
                            style={[styles.input,{width: wp('52'), height: hp('4%')}]}
                            placeholderTextColor="rgb(204,204,204)"
                            returnKeyType="done"
                            underlineColorAndroid='transparent'
                            ref={input => (this.emailInput = input)}
                            // onSubmitEditing={() => this.passwordCInput.focus()}
                            keyboardType="numeric"
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="Secondary Number"
                          />
                </TextInputLayout>
                  </View>
                
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                        <TextInput
                          value={this.state.Landline_No}
                          onChangeText={Landline_No => this.setState({ Landline_No })}
                          style={[styles.input,{width: wp('70'), height: hp('4%')}]}
                          placeholderTextColor="rgb(204,204,204)"
                          returnKeyType="done"
                          underlineColorAndroid='transparent'
                          ref={input => (this.emailInput = input)}
                          // onSubmitEditing={() => this.passwordCInput.focus()}
                          keyboardType="numeric"
                          autoCapitalize="none"
                          autoCorrect={false}
                          placeholder="Landline Number"
                        />
                </TextInputLayout>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                          <TextInput
                            value={this.state.Master_Ven_ID}
                            onChangeText={Master_Ven_ID => this.setState({ Master_Ven_ID })}
                            ref={input => (this.passwordCInput = input)}
                            // onSubmitEditing={() => this.passwordInput.focus()}
                            style={styles.input}
                            placeholder="Master vendor ID"
                            placeholderTextColor="rgb(204,204,204)"
                            returnKeyType="next"
                          />
                  </TextInputLayout>
          </View>
          <Text style={{fontSize: RF(2.2),paddingVertical:"3%",paddingHorizontal:"5%",fontFamily:'Muli-Bold'}}>Add Images</Text>
    <View style={{paddingVertical:"2%",flexDirection:"row",marginHorizontal:"5%",justifyContent:"space-between"}}>
    <TouchableOpacity onPress={this.selectPhotoTapped2.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source_2_1 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={this.state.Image_Source_2_1} />
                  }
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.selectPhotoTapped3.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source1 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={this.state.Image_Source1} />
                  }
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.selectPhotoTapped4.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source_1_1 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={this.state.Image_Source_1_1} />
                  }
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.selectPhotoTapped5.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source_3_1 === null ? <Image
                                      source={require('../Image/icon/plus.png')}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <Image style={styles.avatarMultiple} source={this.state.Image_Source_3_1} />
                  }
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.button,{marginLeft:wp("30.5%"),marginTop:hp("3%")}]} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('Welcome')}}>
                  <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

