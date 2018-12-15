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
import apis from '../apis/index'
const GLOBAL = require('../Component/Color');
const FocusColor = "rgb(204,204,204)"
const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};
var data_1 = [];
var data_category = [];
var data_service = [];
export default class App extends Component {
  constructor(){
    super()
  
    this.state = {
        avatarSource: null,avatarSource1:null,
        Image_Source:null,Image_Source1:null,
        Image_Source_1:null,Image_Source_1_1:null,
        Image_Source_2:null,Image_Source_2_1:null,
        Image_Source_3:null,Image_Source_3_1:null,
        Address:"",Add_Bus_Details:"",Locality:"",City_dropdown:"",
        Website_url:"",Email:"",Contact_Name:"",Primary_No:"",Secondry_no:"",
        Landline_No:"",Master_Ven_ID:"",Category_Dropdown:"",service_dropdown:"",
        City_Name:[],categoryName:[],service_type:[],
        service_name:[],data:[],
      }
    }
    componentDidMount(){
      this.Get_Category()
      this.Get_City()
      this.Get_Service()
     }
    
  handlePress = () => {
      this.setState({ processing: true });
      apis.VENDOR_PROFILE_UPDATE(GLOBAL.Image,this.state.Add_Bus_Details,this.state.ource_2_1,GLOBAL.token)
        .then((responseJson) => {
          if(responseJson.success === true) {
            this.props.navigation.navigate('AuthStack');
            console.log(responseJson)
          } else {
            Alert.alert(responseJson.message)
          }
        })
        .catch((error) => {
          // console.error(error);
          this.setState({ processing: false, loginText: 'Try Again' });
        });
    }
//   handlePress = () =>{
//           const form = new FormData();
// form.append("business_name", "Zubear Ansari");
// form.append("contact_person", "Ansari");
// form.append("vendor_unique_id", "46789asd");
// form.append("address", "Test");
// form.append("locality", "Palasia");
// form.append("cityId", "1");
// form.append("website", "http://eb.com");
// form.append("mobile", "9584495778");
// form.append("secondary_number", "1234567897");
// form.append("landline_number", "07612650832");
// // form.append('file[]', [{ uri: this.state.avatarSourcea, name: 'selfie.jpg', type: 'image/jpg' }]);
// form.append('profile_pic', { uri: this.state.avatarSourcea, name: 'selfie.jpg', type: 'image/jpg' });
// form.append("notification", "true");
// form.append("email", "z.ansari@ebabu.co");
// form.append("categoryId", "1");
// form.append("subcategory[0][subcategoryId]", "1");
// form.append("subcategory[1][subcategoryId]", "2");
// const options = {
//   method: 'POST',
//   body: form,
//   headers: {
//     'Content-Type': 'multipart/form-data',
//     'Authorization':GLOBAL.token
//   }
// };

// delete options.headers['Content-Type'];  
//           fetch('http://18.217.123.119:3000/api/vendor_profile_update',options)
//           .then((response) => response.json())
//           .then((responseJson) => {
//             console.log(responseJson)
//            //  Alert.alert(responseJson.data)
//            this.setState({data:responseJson.data})
//            console.log(this.state.data)
//            })
//            .catch((error) => {
//              console.log(error)
//              Alert.alert(error)
//            });
//   }

Get_Category = async () =>{
  apis.GET_Cetegory()
      .then((responseJson) => {
       console.log(responseJson)
       for (let i = 0; i <= responseJson.data.length-1; i++) 
       {
         this.setState({categoryName:responseJson.data[i].category})
         data_category.push({value:this.state.categoryName});
         console.log(data_category)
       }
      })
      .catch((error) => {
        console.error(error)
        Alert.alert(error)
      });
    }

Get_City = async () =>{
  apis.Get_city()
      .then((responseJson) => {
       console.log(responseJson)
      for (let i = 0; i <= responseJson.data.length-1; i++) 
          {
            this.setState({City_Name:responseJson.data[i].city})
            data_1.push({value:this.state.City_Name});
            console.log(data_1)
          }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(error)
      });
    }
    
Get_Service = async () =>{
  apis.Get_service(GLOBAL.token)
      .then((responseJson) => {
        console.log(responseJson)
        for (let i = 0; i <= responseJson.data.length-1; i++) 
            {
              this.setState({service_name:responseJson.data[i].subcategory})
              data_service.push({value:this.state.service_name});
              console.log(data_service)
            }
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
          // console.log('Response = ', response);
    
          if (response.didCancel) {
            // console.log('User cancelled photo picker');
          }
          else if (response.error) {
            // console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            // console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = { uri: response.uri };
              GLOBAL.Image=source;
              this.setState({ avatarSource: source });
              this.setState({ avatarSource1:source });
          }
        });
      }
    
delete_photo_1(){
        this.setState({Image_Source_2_1:null})
      }

delete_photo_2(){
        this.setState({Image_Source1:null})
      }

delete_photo_3(){
        this.setState({Image_Source_1_1:null})
      }

delete_photo_4(){
        this.setState({Image_Source_3_1:null})
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
    return (
      <KeyboardAwareScrollView style={{backgroundColor:"rgb(243,242,242)",}}>
          <View style={[styles.container,{marginVertical:hp("2%")}]}>
        <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("40%")}]}>
                      { this.state.avatarSource === null ? <Image
                                          source={GLOBAL.Plus_icon}
                                          style={{
                                            width: wp('3%'),
                                            height: hp('2%'),
                      }}
                      /> :
                        <Image style={styles.avatarMultiple} source={this.state.avatarSource} />
                      }
                </View>
          </TouchableOpacity>
          <Text style={[styles.text,{marginVertical:hp("2%")}]}>Add Your Logo</Text>
          <View style={styles.boxDetails}>
                  <TextInputLayout focusColor={FocusColor} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Add_Bus_Details}
                        onChangeText={Add_Bus_Details => this.setState({ Add_Bus_Details })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="Add Business Name"
                        returnKeyType="next"                
                      />
                  </TextInputLayout>
                  <View style={[styles.DropDown_view,{width:wp("70%")}]}>
                      <Dropdown
                          data={data_category} 
                          itemColor={GLOBAL.COLOR.ORANGE}  
                          value={'Select Category'}
                          // onChangeText={() => this.setState({Category:data.indexOf[0]})}
                          onChangeText={(value) => {
                            console.log(value); // gives new value OK
                            this.setState({Category_Dropdown:value})
                         }}
                         rippleCentered={false}
                          dropdownPosition={0}
                          textColor="rgb(204,204,204)"
                          selectedItemColor="black"
                          fontFamily="Muli-Bold"
                          marginLeft={2}
                      />
                  </View>
                  <View style={[styles.DropDown_view,{width:wp("70%")}]}>
                      <Dropdown
                          data={data_service} 
                          itemColor={GLOBAL.COLOR.ORANGE}  
                          value={'Select Service Type'}
                          // onChangeText={() => this.setState({Category:data.indexOf[0]})}
                          onChangeText={(value) => {
                            console.log(value); // gives new value OK
                            this.setState({service_dropdown:value})
                         }}
                          dropdownPosition={0}
                          textColor="rgb(204,204,204)"
                          selectedItemColor="black"
                          fontFamily="Muli-Bold"
                          marginLeft={2}
                      />
                  </View>
                  {/* <View style={{flexDirection:"row",marginTop:hp("1.5%")}}>
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
                            fontWeight:"bold",marginRight:wp("55%")
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
                <Text style={{color:"white"}}>bssjjase</Text>
                </View> */}
                 <TextInputLayout focusColor={FocusColor} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Address}
                        onChangeText={Address => this.setState({ Address })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="Address"
                        returnKeyType="next"
                      />
                  </TextInputLayout>
                  <TextInputLayout focusColor={FocusColor} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.details}
                        onChangeText={Locality => this.setState({ Locality })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="Locality"
                        returnKeyType="next"
                      />
                  </TextInputLayout>
                  <View style={{width:wp('70%'),marginVertical:"0%"}}>
                      <Dropdown
                          data={data_1} 
                          itemColor="rgb(255,163,0)"  
                          value={'City'}
                          onChangeText={(value) => {
                            console.log(value); // gives new value OK
                            this.setState({City_dropdown:value})
                         }}
                          dropdownPosition={0}
                          textColor="rgb(204,204,204)"
                          selectedItemColor="black"
                          fontFamily="Muli-Bold"
                          marginLeft={2}
                      />
                  </View>
                  <TextInputLayout focusColor={FocusColor} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Website_url}
                        onChangeText={Website_url => this.setState({ Website_url })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="Website URL"
                        returnKeyType="next"
                        keyboardType="email-address"
                      />
                  </TextInputLayout>
                  <TextInputLayout focusColor={FocusColor} labelFontSize={0.1}>
                        <TextInput
                          value={this.state.Email}
                          onChangeText={Email => this.setState({ Email })}
                          ref={input => (this.passwordCInput = input)}
                          // onSubmitEditing={() => this.passwordInput.focus()}
                          style={styles.input}
                          placeholder="Email ID"
                          returnKeyType="next"
                          keyboardType="email-address"
                        />
                  </TextInputLayout>
                  <TextInputLayout focusColor={FocusColor} labelFontSize={0.1}>
                          <TextInput
                            value={this.state.Contact_Name}
                            onChangeText={Contact_Name => this.setState({ Contact_Name })}
                            ref={input => (this.passwordCInput = input)}
                            // onSubmitEditing={() => this.passwordInput.focus()}
                            style={styles.input}
                            placeholder="Contact Name"
                            returnKeyType="next"
                          />
                  </TextInputLayout>
                  <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:hp("1%")}}>
                  <TextInputLayout focusColor={FocusColor}>

                      <Text style={{marginTop:hp("1.2%"),fontSize: RF(2.2)}}>+91     </Text>
                  </TextInputLayout>
                          <Text>   </Text>
                  <TextInputLayout focusColor={FocusColor} labelFontSize={0.1}>
                        <TextInput
                          value={this.state.Primary_No}
                          onChangeText={Primary_No => this.setState({ Primary_No })}
                          style={[styles.input,{width: wp('56'), height: hp('5%')}]}
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
                      <TextInputLayout focusColor={FocusColor}>
                      <Text style={{marginTop:hp("1.2%"),fontSize: RF(2.2)}}>+91     </Text>
                      </TextInputLayout>
                      <Text>   </Text>
                  <TextInputLayout focusColor={FocusColor} labelFontSize={0.1}>
                          <TextInput
                            value={this.state.Secondry_no}
                            onChangeText={Secondry_no => this.setState({ Secondry_no })}
                            style={[styles.input,{width: wp('56'), height: hp('5%')}]}
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
                
                  <TextInputLayout focusColor={FocusColor} labelFontSize={0.1}>
                        <TextInput
                          value={this.state.Landline_No}
                          onChangeText={Landline_No => this.setState({ Landline_No })}
                          style={[styles.input,{width: wp('70'), height: hp('5%'),marginTop:hp("1%")}]}
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
                  <TextInputLayout focusColor={FocusColor} labelFontSize={0.1}>
                          <TextInput
                            value={this.state.Master_Ven_ID}
                            onChangeText={Master_Ven_ID => this.setState({ Master_Ven_ID })}
                            ref={input => (this.passwordCInput = input)}
                            // onSubmitEditing={() => this.passwordInput.focus()}
                            style={styles.input}
                            placeholder="Master vendor ID"
                            returnKeyType="next"
                          />
                  </TextInputLayout>
          </View>
          <Text style={[styles.text,{marginRight:wp("65%"),marginVertical:hp("1%")}]}>Add Images</Text>
    <View style={styles.Row_divider}>
    <TouchableOpacity onPress={this.selectPhotoTapped2.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source_2_1 === null ? <Image
                                      source={GLOBAL.Plus_icon}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                     <View style={{flexDirection:"column-reverse"}}>
                     <Image style={styles.avatarMultiple} source={this.state.Image_Source_2_1} />
                     <View style={styles.Delete_Image}>
                   <TouchableOpacity onPress={this.delete_photo_1.bind(this)}>
                   <ResponsiveImage source={GLOBAL.Delete_icon} style={{marginTop:hp("4%")}} initWidth="35" initHeight="35"/>
                  </TouchableOpacity>
                  </View>
                   </View>
                }
                  
            </View>
          </TouchableOpacity>
         
          <TouchableOpacity onPress={this.selectPhotoTapped3.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source1 === null ? <Image
                                      source={GLOBAL.Plus_icon}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <View style={{flexDirection:"column-reverse"}}>
                    <Image style={styles.avatarMultiple} source={this.state.Image_Source1} />
                    <View style={styles.Delete_Image}>
                  <TouchableOpacity onPress={this.delete_photo_2.bind(this)}>
                  <ResponsiveImage source={GLOBAL.Delete_icon} style={{marginTop:hp("4%")}} initWidth="35" initHeight="35"/>
                 </TouchableOpacity>
                 </View>
                  </View>
                 }
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={this.selectPhotoTapped4.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source_1_1 === null ? <Image
                                      source={GLOBAL.Plus_icon}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <View style={{flexDirection:"column-reverse"}}>
                    <Image style={styles.avatarMultiple} source={this.state.Image_Source_1_1} />
                    <View style={styles.Delete_Image}>
                  <TouchableOpacity onPress={this.delete_photo_3.bind(this)}>
                  <ResponsiveImage source={GLOBAL.Delete_icon} style={{marginTop:hp("4%")}} initWidth="35" initHeight="35"/>
                 </TouchableOpacity>
                 </View>
                  </View>
                 }
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.selectPhotoTapped5.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source_3_1 === null ? <Image
                                      source={GLOBAL.Plus_icon}
                                      style={{
                                        width: 16,
                                        height: 16,
                                        // left: 20
                  }}
                  /> :
                    <View style={{flexDirection:"column-reverse"}}>
                    <Image style={styles.avatarMultiple} source={this.state.Image_Source_3_1} />
                    <View style={styles.Delete_Image}>
                  <TouchableOpacity onPress={this.delete_photo_4.bind(this)}>
                  <ResponsiveImage source={GLOBAL.Delete_icon} style={{marginTop:hp("4%")}} initWidth="35" initHeight="35"/>
                 </TouchableOpacity>
                 </View>
                  </View>
                 }
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.handlePress} style={[styles.button,{marginTop:hp("3%"),justifyContent:"center"}]}>
                  <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

