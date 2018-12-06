import React, { Component } from 'react';
import { Text,View,ScrollView,TextInput,TouchableOpacity,Image,Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Dropdown } from 'react-native-material-dropdown';
import styles from './Style'
import {GooglePlacesAutocomplete,} from 'react-native-google-places-autocomplete'; // 1.2.12
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TextInputLayout} from 'rn-textinputlayout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ResponsiveImage from 'react-native-responsive-image'

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};
var data_1 = [];
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
        Landline_No:"",Master_Ven_ID:"",Category:"",service:"",City_Name:[],
        data : [],service_type:[],dataObject:""
      }
    }
    componentDidMount(){
      this.Get_Category()
      this.Get_City()
      this.Get_Service()
     }
    
   Get_Category = async () =>{
      fetch('http://18.217.123.119:3000/api/category', {
        method: 'GET',
        headers: {
          "content-type": "application/json",
          "cache-control": "no-cache",
          "postman-token": "0840d926-ef53-710f-e40b-d8a4690cde36"
        },
    })
      .then((response) => response.json())
      .then((responseJson) => {
       console.log(responseJson)
      //  Alert.alert(responseJson.data)
      this.setState({data:responseJson.data})
      console.log(this.state.data)
      })
      .catch((error) => {
        console.error(error)
        Alert.alert(error)
      });
    }

  Get_City = async () =>{
      fetch('http://18.217.123.119:3000/api/city', {
        method: 'GET',
        headers: {
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE1NDI2MTI2MTR9.RlWRzLFfJUA7k1_UIBocncGYgrKSznWZ-3bCwGmKWns",
          "content-type": "application/json",
          "cache-control": "no-cache",
          "postman-token": "a3d8f4a6-b009-2e09-8f80-9055092b360e"
        },
    })
      .then((response) => response.json())
      .then((responseJson) => {
       console.log(responseJson)
      for (let i = 0; i <= responseJson.data.length-1; i++) 
          {
            this.setState({City_Name:responseJson.data[i].city})
            data_1.push(this.state.City_Name);
            console.log(data_1)
          }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(error)
      });
    }

    Get_Service = async () =>{
      fetch('http://18.217.123.119:3000/api/getsubcategory', {
        method: 'POST',
        headers: {
          "content-type": "application/json",
          "cache-control": "no-cache",
          "postman-token": "52d111cc-bc3d-02da-6560-1f1e7a0ab1bf"
        },
    })
      .then((response) => response.json())
      .then((responseJson) => {
       console.log(responseJson)
      //  Alert.alert(responseJson.data)
      this.setState({service_type:responseJson.data})
      console.log(this.state.service_type)
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(error)
      });
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
        
          <Text style={{fontSize: RF("18%"),paddingVertical:"5%",paddingHorizontal:wp("36%"),fontWeight:"bold"}}>Add Your Logo</Text>
          
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
                          data={data_1} 
                          itemColor="rgb(255,163,0)"  
                          value={'Select Category'}
                          // onChangeText={() => this.setState({Category:data.indexOf[0]})}
                          onChangeText={(value) => {
                            console.log(value); // gives new value OK
                            this.setState({Category:value})
                         }}
                          dropdownPosition={0}
                          // textColor="rgb(204,204,204)"
                          textColor="black"
                          selectedItemColor="black"
                          // textColor="black"
                          // itemColor="red"
                          // baseColor="blue"
                          fontFamily="Muli-Bold"
                          marginLeft={2}
                      />
                  </View>
                  <View style={{width:wp('70%'),marginVertical:"0%"}}>
                      <Dropdown
                          data={this.state.service_type} 
                          itemColor="rgb(255,163,0)"  
                          value={'Select Service Type'}
                          onChangeText={() => this.setState({Category:data.indexOf[0]})}
                          onChangeText={(value) => {
                            console.log(value); // gives new value OK
                            this.setState({service:value})
                         }}
                          dropdownPosition={0}
                          // textColor="rgb(204,204,204)"
                          textColor="black"
                          selectedItemColor="black"
                          // textColor="black"
                          // itemColor="red"
                          // baseColor="blue"
                          fontFamily="Muli-Bold"
                          marginLeft={2}
                      />
                  </View>
                  <View style={{flexDirection:"row",marginTop:hp("1.5%")}}>
                  <Text style={{color:"white"}}>bjjaaa</Text>
                  <GooglePlacesAutocomplete
                        //  value={this.state.Address}
                        //  onChangeText={Address => this.setState({ Address })}
                        placeholder="Address"
                        minLength={3} // minimum length of text to search
                        autoFocus={false}
                        returnKeyType={'next'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                        listViewDisplayed={false} // true/false/undefined
                        fetchDetails={true}
                        renderDescription={row => row.description} // custom description render
                        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                                console.log(data, details);
                                // GLOBAL.Address = data.description;
                                this.setState({Address:data.description})
                                console.log(this.state.Address)
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
                            fontWeight:"bold",marginRight:wp("50%")
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
                                color: 'black',
                                fontSize:hp('2.2%'),
                                fontFamily:"Muli-Bold"
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
                        value={this.state.details}
                        onChangeText={Locality => this.setState({ Locality })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="Locality"
                        placeholderTextColor="rgb(204,204,204)"
                        returnKeyType="next"
                        
                      />
                  </TextInputLayout>
                  <View style={{width:wp('70%'),marginVertical:"0%"}}>
                      <Dropdown
                          data={this.state.service_type} 
                          itemColor="rgb(255,163,0)"  
                          value={'City'}
                          onChangeText={(value) => {
                            console.log(value); // gives new value OK
                            this.setState({City:value})
                         }}
                          dropdownPosition={0}
                          // textColor="rgb(204,204,204)"
                          textColor="black"
                          selectedItemColor="black"
                          // textColor="black"
                          // itemColor="red"
                          // baseColor="blue"
                          fontFamily="Muli-Bold"
                          marginLeft={2}
                      />
                  </View>
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
                  <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:hp("1%")}}>
                  <TextInputLayout focusColor="rgb(204,204,204)">

                      <Text style={{marginTop:hp("1.5%"),fontSize: RF(2.2)}}>+91     </Text>
                  </TextInputLayout>
                          <Text>   </Text>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                        <TextInput
                          value={this.state.Primary_No}
                          onChangeText={Primary_No => this.setState({ Primary_No })}
                          style={[styles.input,{width: wp('56'), height: hp('5%')}]}
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
                  <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:hp("1%")}}>
                      <TextInputLayout focusColor="rgb(204,204,204)">

                      <Text style={{marginTop:hp("1.5%"),fontSize: RF(2.2)}}>+91     </Text>
                      </TextInputLayout>
                      <Text>   </Text>
                  <TextInputLayout focusColor="rgb(204,204,204)" labelFontSize={0.1}>
                          <TextInput
                            value={this.state.Secondry_no}
                            onChangeText={Secondry_no => this.setState({ Secondry_no })}
                            style={[styles.input,{width: wp('56'), height: hp('5%')}]}
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
                          style={[styles.input,{width: wp('70'), height: hp('5%'),marginTop:hp("1%")}]}
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
          <Text style={{fontSize: RF(2.2),paddingVertical:"3%",paddingHorizontal:"5%",fontWeight:"bold"}}>Add Images</Text>
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
                     <View style={{flexDirection:"column-reverse"}}>
                     <Image style={styles.avatarMultiple} source={this.state.Image_Source_2_1} />
                     <View style={{height:"3%",justifyContent:"center",alignItems:"center",marginLeft:wp("12%")}}>
                   <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                   <ResponsiveImage source={require('../Image/main/deleteImage3x.png')} style={{marginTop:hp("4%")}} initWidth="35" initHeight="35"/>
                  </TouchableOpacity>
                  </View>
                   </View>
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
                    <View style={{flexDirection:"column-reverse"}}>
                    <Image style={styles.avatarMultiple} source={this.state.Image_Source1} />
                    <View style={{height:"3%",justifyContent:"center",alignItems:"center",marginLeft:wp("12%")}}>
                  <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                  <ResponsiveImage source={require('../Image/main/deleteImage3x.png')} style={{marginTop:hp("4%")}} initWidth="35" initHeight="35"/>
                 </TouchableOpacity>
                 </View>
                  </View>
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
                    <View style={{flexDirection:"column-reverse"}}>
                    <Image style={styles.avatarMultiple} source={this.state.Image_Source_1_1} />
                    <View style={{height:"3%",justifyContent:"center",alignItems:"center",marginLeft:wp("12%")}}>
                  <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                  <ResponsiveImage source={require('../Image/main/deleteImage3x.png')} style={{marginTop:hp("4%")}} initWidth="35" initHeight="35"/>
                 </TouchableOpacity>
                 </View>
                  </View>
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
                    <View style={{flexDirection:"column-reverse"}}>
                    <Image style={styles.avatarMultiple} source={this.state.Image_Source_3_1} />
                    <View style={{height:"3%",justifyContent:"center",alignItems:"center",marginLeft:wp("12%")}}>
                  <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                  <ResponsiveImage source={require('../Image/main/deleteImage3x.png')} style={{marginTop:hp("4%")}} initWidth="35" initHeight="35"/>
                 </TouchableOpacity>
                 </View>
                  </View>
                 }
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.button,{marginLeft:wp("30.5%"),marginTop:hp("3%")}]}>
                  <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

