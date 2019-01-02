import { AsyncStorage,Alert,NetInfo } from 'react-native';

const base_url = 'http://18.217.123.119:3000/api/';

const apis = {
  LOGIN_API: async (user, pass) => {
    try {
      const response = await fetch(
        base_url + 'vendor_login',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "06d1929c-addc-cf20-1705-edd409674d62"
          },
          body: JSON.stringify({
            mobile   : user,
          password : pass
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      Alert.alert("Error")
    }
  },

  SIGN_UP: async (usermobile) => {
    try {
      const response = await fetch(
        base_url + 'vendor_signup',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "d33aa7ef-ef52-fab3-79a3-5fad9bae840f"
          },
          body: JSON.stringify({
            mobile:usermobile
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      Alert.alert("Error")
    }
  },

  OTP_SignUP: async (Mobile,code) => {
    try {
      const response = await fetch(
        base_url + 'vendor_verify_account',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            mobile       :Mobile,
            otp          : code,
            device_type  :"ios",
            device_token :"fiodfpisdfposidfpoisdfposdifsodfiskdfpsdfiosdfpdskfposdi"
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
Alert.alert("Invalid OTP, Please enter a valid OTP.")
    }
  },

  Create_Pass: async (password,UID,token) => {
    try {
      const response = await fetch(
        base_url + 'vendor_save_password',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "authorization": token,
            "cache-control": "no-cache",
            "postman-token": "7ec33088-88f2-bbb2-cb8d-3e5bf5e8acd5"
          },
          body: JSON.stringify({
            "password" : password, 
            "vendor_unique_id": UID
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      Alert.alert("Error")
    }
  },

  FORGET_PASS: async (usermobile) => {
    try {
      const response = await fetch(
        base_url + 'vendor_forgot_password',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "d33aa7ef-ef52-fab3-79a3-5fad9bae840f"
          },
          body: JSON.stringify({
            mobile:usermobile
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      Alert.alert("Error")
    }
  },

  OTP_FORGOT: async (Mobile,code) => {
    try {
      const response = await fetch(
        base_url + 'vandor_verify_mobile',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "1d546500-20bd-02d9-403c-68dab1907fbb"
          },
          body: JSON.stringify({
            mobile            :Mobile,
            verification_code :code,
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      Alert.alert("Error")
    }
  },

  Resend_OTP: async (Mobile) => {
    try {
      const response = await fetch(
        base_url + 'vendor_resend_otp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZW5kb3JfaWQiOjMsImlhdCI6MTU0MzI5NjcwOH0.D_8831a6S3xoFaz_kS_VyeImRmsJx3DJ7Y_GdcnnQwE',
                   },
          body: JSON.stringify({
            mobile:Mobile
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      Alert.alert("Error")
    }
  },

  Reset_pass: async (Mobile,Password) => {
    try {
      const response = await fetch(
        base_url + 'vendor_reset_password',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "272c8d92-9bf6-b32b-2e0f-c780530790bf"
                   },
          body: JSON.stringify({
             mobile : Mobile,
             password : Password
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      Alert.alert("Error")
    }
  },
  //////Add Details Apis///////
  GET_Cetegory: async () =>{
    try {
      const response = await fetch(
        base_url + 'category',
        {
          method: 'GET',
          headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "cb14e44b-cc78-29e4-d4b8-0c3f2ca2ba1b"
                   },
        },);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      Alert.alert(error)
    }
  },
  Get_city: async (token) =>{
    try {
      const response = await fetch(
        base_url + 'city',
        {
          method: 'GET',
          headers: {
            "authorization": token,
          "content-type": "application/json",
          "cache-control": "no-cache",
          "postman-token": "a3d8f4a6-b009-2e09-8f80-9055092b360e"
                   },
        },);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      Alert.alert("Error")
    }
  },

  Get_service: async () =>{
    try {
      const response = await fetch(
        base_url + 'getsubcategory',
        {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "52d111cc-bc3d-02da-6560-1f1e7a0ab1bf"
                   },
          body: JSON.stringify({
            categoryId : "1"
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      Alert.alert("Error")
    }
  },
  
  VENDOR_PROFILE_UPDATE: async (pic_1,pic_2,pic_3,pic_4,PicturePath,business_name,category,service,address,locality,city,
          website,email,contact_person,primary_no,secondary_number,landline_number,vendor_id,token) => {
    try {
      let formData  = new FormData();
      debugger
      formData.append("business_name", business_name);
      formData.append("contact_person", contact_person);
      formData.append("vendor_unique_id", vendor_id);
      formData.append("address", address);
      formData.append("locality",locality);
      formData.append("cityId", city);
      formData.append("website", website);
      formData.append("mobile", primary_no);
      formData.append("secondary_number", secondary_number);
      formData.append("landline_number", landline_number);
      // formData.append('file[]', [{ uri: pic_1, name: 'selfie.jpg', type: 'image/jpg' }]);
      formData.append('profile_pic', { PicturePath, name: 'selfie.jpg', type: 'image/jpg' });
      formData.append("email", email);
      formData.append("categoryId",category );
      formData.append("subcategory[0][subcategoryId]",service );
      const options = {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization':token
        }
      };
      delete options.headers['Content-Type'];
      fetch(base_url + "vendor_profile_update", options)
      .then(function (response) {
         console.log(response);
      });
    } catch (error) {
      Alert.alert("Error")
    }
  },
  LOCAL_SET_DATA: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      Alert.alert("Error")
    }
  },

  LOCAL_GET_DATA: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log(value);
        return value;
      }
      return null;
    } catch (error) {
      Alert.alert("Error")
      return null;
    }
  },
  Sign_LOCAL_SET_DATA: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      Alert.alert("Error")
    }
  },
  Sign_LOCAL_SET_DATA_MOBILE:async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      Alert.alert("Error")
    }
  },
  OTP_LOCAL_GET_DATA: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log(value);
        return value;
      }
      return null;
    } catch (error) {
      Alert.alert("Error")
      return null;
    }
  },
  LOCAL_Delete_DATA: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      Alert.alert("Error")
    }
  },
}
export default apis;
