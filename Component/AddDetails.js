import React, { Component } from 'react';
import { Text,View,NetInfo,ScrollView,TextInput,TouchableOpacity,Image,Alert,AsyncStorage} from 'react-native';
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
        service_name:[],data:[],validated:"Invalid Email",token_otp:""
      }
    }
    componentDidMount(){
      this.Get_Category()
      this.Get_City()
      this.Get_Service()
      this._bootstrapAsync();
     }
    ////
    
    _bootstrapAsync = async () => {
      const userTokenMobile = await AsyncStorage.getItem('MobileTicket');
      console.log(userTokenMobile)
    this.setState({token_otp:userTokenMobile})
    GLOBAL.mobile = this.state.token_otp
    console.log(GLOBAL.mobile)
    AsyncStorage.getItem("Profile_Token").then((Profile_boolean) => {
      GLOBAL.token=Profile_boolean
      console.log("Get profile token >> ", GLOBAL.token);
   }).done();
    };
  handlePress = () => {
    if(this.state.Add_Bus_Details.trim() === "")
    {
        Alert.alert("Please Enter Business Name")
    }
    else if(this.state.Category_Dropdown === ""){
      Alert.alert("Please Select Category")
    }
    else if(this.state.service_dropdown === ""){
      Alert.alert("Please Select Service Type")
    }
    else if(this.state.Address.trim() === "")
    {
      Alert.alert("Please Enter Address")
    }
    else if(this.state.Locality.trim() === "")
    {
      Alert.alert("Please Enter Locality")
    }
    else if(this.state.City_dropdown === ""){
      Alert.alert("Please Select City")
    }
    else if(this.state.Contact_Name.trim() === "")
    {
      Alert.alert("Please Enter Contact Name")
    }
     else if(this.state.Master_Ven_ID.trim() === "")
    {
      Alert.alert("Please Enter Vendor ID")
    }
    else if(this.state.Email === "" || this.state.Email != ""){
{this.go()}
    }
    }

  go(){
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.Email) === true){
        NetInfo.isConnected.fetch().done((isConnected) => {
          if(isConnected)
              {  this.setState({ processing: true });
                apis.VENDOR_PROFILE_UPDATE(
                  this.state.Image_Source,this.state.Image_Source_1,
                  this.state.Image_Source_2,this.state.Image_Source_3,
                  this.state.avatarSource,this.state.Add_Bus_Details,
                  this.state.Category_Dropdown,this.state.service_dropdown,this.state.Address,
                  this.state.Locality,this.state.City_dropdown,this.state.Website_url,
                  this.state.Email,this.state.Contact_Name, GLOBAL.mobile,
                  this.state.Secondry_no,this.state.Landline_No,
                  this.state.Master_Ven_ID,GLOBAL.token)
                  .then((responseJson) => {
                    if(responseJson.Response.ok === true) {
                      this.props.navigation.navigate('AuthStack');
                      apis.LOCAL_Delete_DATA('MobileTicket').
                      console.log(responseJson)
                      console.log(GLOBAL.token)
                    } else {
                      Alert.alert(responseJson.message)
                    }
                  })
                  .catch((error) => {
                    // console.error(error);
                    this.setState({ processing: false, loginText: 'Try Again' });
                  });
                  this.props.navigation.navigate('Welcome')
              }
              else{
                Alert.alert("Please check your internet connection")
              }
            })
      }
      else{
        Alert.alert("invalid Email Address")
      }
    }

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
          }
      })
      .catch((error) => {
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
      <KeyboardAwareScrollView style={GLOBAL.COLOR.rootBAckgroundColor}>
          <View style={[styles.container,styles.padding_verticle]}>
        <TouchableOpacity onPress={this.selectPhotoTapped1.bind(this)}>
                <View style={[styles.avatarMultiple, styles.avatarContainer,{marginHorizontal:wp("40%")}]}>
                      { this.state.avatarSource === null ?
                      <View style={styles.Only_Column}>
                      <Image
                                          source={GLOBAL.Plus_icon_stylist}
                                          style={{
                                            width: GLOBAL.COLOR.Size_15,
                                            height: GLOBAL.COLOR.Size_15,
                      }}
                      /> 
                      <Text style={styles.grey_text}>(Optional)</Text>
                      </View>
                      :
                        <Image style={styles.avatarMultiple} source={this.state.avatarSource} />
                      }
                </View>
          </TouchableOpacity>
          <Text style={[styles.text,styles.padding_verticle]}>Add Your Logo</Text>
          <View style={styles.boxDetails}>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
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
                  <View style={[styles.DropDown_view]}>
                      <Dropdown
                          data={data_category} 
                          itemColor={GLOBAL.COLOR.ORANGE}  
                          value={'Select Category'}
                          // onChangeText={() => this.setState({Category:data.indexOf[0]})}
                          onChangeText={(value , index) => {
                            this.setState({Category_Dropdown:(index+1)})
                            console.log(this.state.Category_Dropdown)
                         }}
                         rippleCentered={false}
                          dropdownPosition={0}
                          textColor="rgb(204,204,204)"
                          selectedItemColor={GLOBAL.COLOR.GRAY}
                          fontFamily={GLOBAL.COLOR.FontFamilyBold}
                          marginLeft={2}
                      />
                  </View>
                  <View style={[styles.DropDown_view]}>
                      <Dropdown
                          data={data_service} 
                          itemColor={GLOBAL.COLOR.ORANGE}  
                          value={'Select Service Type'}
                          // onChangeText={() => this.setState({Category:data.indexOf[0]})}
                          onChangeText={(value,index) => {
                            this.setState({service_dropdown:(index+1)})
                         }}
                          dropdownPosition={0}
                          textColor="rgb(204,204,204)"
                          selectedItemColor={GLOBAL.COLOR.GRAY}
                          fontFamily={GLOBAL.COLOR.FontFamilyBold}
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
                 <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
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
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
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
                  <View style={styles.DropDown_view}>
                      <Dropdown
                          data={data_1} 
                          itemColor={GLOBAL.COLOR.ORANGE}  
                          value={'City'}
                          // onChangeText={() => this.setState({Category:data.indexOf[0]})}
                          onChangeText={(value , index) => {
                            this.setState({City_dropdown:(index+1)})
                         }}
                          dropdownPosition={0}
                          textColor="rgb(204,204,204)"
                          selectedItemColor={GLOBAL.COLOR.GRAY}
                          fontFamily={GLOBAL.COLOR.FontFamilyBold}
                          marginLeft={2}
                      />
                  </View>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                      <TextInput
                        value={this.state.Website_url}
                        onChangeText={Website_url => this.setState({ Website_url })}
                        ref={input => (this.passwordCInput = input)}
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input}
                        placeholder="Website URL(Optional)"
                        returnKeyType="next"
                        keyboardType="email-address"
                      />
                  </TextInputLayout>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
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
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
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
                  <View style={styles.Row_divider}>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}>

                      <Text style={styles.Mobile_number_divider}>+91     </Text>
                  </TextInputLayout>
                          <Text>   </Text>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                        {/* <TextInput
                          value={this.state.Primary_No}
                          onChangeText={Primary_No => this.setState({ Primary_No })}
                          style={[styles.Mobile_nput]}
                          returnKeyType="done"
                          underlineColorAndroid='transparent'
                          ref={input => (this.emailInput = input)}
                          // onSubmitEditing={() => this.passwordCInput.focus()}
                          keyboardType="numeric"
                          autoCapitalize="none"
                          autoCorrect={false}
                          placeholder="Primary Number"
                          fontFamily='Muli-Bold'
                        /> */}
                      <Text style={[styles.Mobile_number_divider,{width:wp("53%"),paddingBottom:hp("1%")}]}>{GLOBAL.mobile}</Text>
                </TextInputLayout>
                  </View>
                  <View style={styles.Row_divider}>
                      <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE}>
                      <Text style={styles.Mobile_number_divider}>+91     </Text>
                      </TextInputLayout>
                      <Text>   </Text>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                          <TextInput
                            value={this.state.Secondry_no}
                            onChangeText={Secondry_no => this.setState({ Secondry_no })}
                            style={[styles.Mobile_nput]}
                            returnKeyType="done"
                            underlineColorAndroid='transparent'
                            ref={input => (this.emailInput = input)}
                            // onSubmitEditing={() => this.passwordCInput.focus()}
                            keyboardType="numeric"
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="Secondary Num..(Optional)"
                          />
                </TextInputLayout>
                  </View>
                
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
                        <TextInput
                          value={this.state.Landline_No}
                          onChangeText={Landline_No => this.setState({ Landline_No })}
                          style={styles.input}
                          returnKeyType="done"
                          underlineColorAndroid='transparent'
                          ref={input => (this.emailInput = input)}
                          // onSubmitEditing={() => this.passwordCInput.focus()}
                          keyboardType="numeric"
                          autoCapitalize="none"
                          autoCorrect={false}
                          placeholder="Landline Number(Optional)"
                        />
                </TextInputLayout>
                  <TextInputLayout focusColor={GLOBAL.COLOR.ORANGE} labelFontSize={0.1}>
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
          <View style={[styles.Row_divider,styles.MARGIN_VERticle,{marginRight:wp("50%")}]}>
          <Text style={[styles.text]}>Add Images</Text>
          <Text style={[styles.grey_text,{marginTop:hp(".5%")}]}>(Optional)</Text>
          </View>
    <View style={styles.Row_divider}>
    <TouchableOpacity onPress={this.selectPhotoTapped2.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source_2_1 === null ? <Image
                                          source={GLOBAL.Plus_icon_stylist}
                                          style={{
                                        width: GLOBAL.COLOR.Size_15,
                                        height: GLOBAL.COLOR.Size_15,
                                        // left: 20
                  }}
                  /> :
                  <View style={styles.Column_reverse}>
                  <Image style={styles.avatarMultiple} source={this.state.Image_Source_2_1} />
                     <View style={styles.Delete_Image}>
                   <TouchableOpacity onPress={this.delete_photo_1.bind(this)}>
                   <ResponsiveImage source={GLOBAL.Delete_icon} style={styles.Adddetails_image} initWidth={GLOBAL.COLOR.Size_35} initHeight={GLOBAL.COLOR.Size_35}/>
                  </TouchableOpacity>
                  </View>
                   </View>
                }
                  
            </View>
          </TouchableOpacity>
         
          <TouchableOpacity onPress={this.selectPhotoTapped3.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source1 === null ? <Image
                                          source={GLOBAL.Plus_icon_stylist}
                                          style={{
                                        width: GLOBAL.COLOR.Size_15,
                                        height: GLOBAL.COLOR.Size_15,
                                        // left: 20
                  }}
                  /> :
                  <View style={styles.Column_reverse}>
                  <Image style={styles.avatarMultiple} source={this.state.Image_Source1} />
                    <View style={styles.Delete_Image}>
                  <TouchableOpacity onPress={this.delete_photo_2.bind(this)}>
                  <ResponsiveImage source={GLOBAL.Delete_icon} style={styles.Adddetails_image} initWidth={GLOBAL.COLOR.Size_35} initHeight={GLOBAL.COLOR.Size_35}/>
                 </TouchableOpacity>
                 </View>
                  </View>
                 }
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={this.selectPhotoTapped4.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source_1_1 === null ? <Image
                                          source={GLOBAL.Plus_icon_stylist}
                                          style={{
                                        width: GLOBAL.COLOR.Size_15,
                                        height: GLOBAL.COLOR.Size_15,
                                        // left: 20
                  }}
                  /> :
                    <View style={styles.Column_reverse}>
                    <Image style={styles.avatarMultiple} source={this.state.Image_Source_1_1} />
                    <View style={styles.Delete_Image}>
                  <TouchableOpacity onPress={this.delete_photo_3.bind(this)}>
                  <ResponsiveImage source={GLOBAL.Delete_icon} style={styles.Adddetails_image} initWidth={GLOBAL.COLOR.Size_35} initHeight={GLOBAL.COLOR.Size_35}/>
                 </TouchableOpacity>
                 </View>
                  </View>
                 }
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.selectPhotoTapped5.bind(this)}>
            <View style={[styles.avatarMultiple, styles.avatarContainer]}>
                  { this.state.Image_Source_3_1 === null ? <Image
                                          source={GLOBAL.Plus_icon_stylist}
                                          style={{
                                        width: GLOBAL.COLOR.Size_15,
                                        height: GLOBAL.COLOR.Size_15,
                                        // left: 20
                  }}
                  /> :
                  <View style={styles.Column_reverse}>
                  <Image style={styles.avatarMultiple} source={this.state.Image_Source_3_1} />
                    <View style={styles.Delete_Image}>
                  <TouchableOpacity onPress={this.delete_photo_4.bind(this)}>
                  <ResponsiveImage source={GLOBAL.Delete_icon} style={styles.Adddetails_image} initWidth={GLOBAL.COLOR.Size_35} initHeight={GLOBAL.COLOR.Size_35}/>
                 </TouchableOpacity>
                 </View>
                  </View>
                 }
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.handlePress} style={[styles.button]}>
                  <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

