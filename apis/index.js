// import { Base64 } from 'js-base64';
import { AsyncStorage,Alert } from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob'

const base_url = 'http://18.217.123.119:3000/api/';

const apis = {
  VENDOR_PROFILE_UPDATE: async (PicturePath,token) => {
    try {
      let data = {
        "a": "A",
        "b": "B",
        "c": "C"
      };

      let formData  = new FormData();

      // for(let name in data) {
      //   formData.append(name, data[name]);
      // }
      // formData.append("business_name", "helllooooo");
      // formData.append('file[]', [{ uri: PicturePath, name: 'selfie.jpg', type: 'image/jpg' }]);
      formData.append('profile_pic', { uri: PicturePath, name: 'selfie.jpg', type: 'image/jpg' });
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
      Alert.alert(error);
    }
  },

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
      Alert.alert(error)
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
      console.error(error);
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
            "cache-control": "no-cache",
            "postman-token": "1d546500-20bd-02d9-403c-68dab1907fbb"
          },
          body: JSON.stringify({
            mobile       :Mobile,
            OTP          : code,
            device_type  :"ios",
            device_token :"fiodfpisdfposidfpoisdfposdifsodfiskdfpsdfiosdfpdskfposdi"
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
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
            "postman-token": "d8d5eeac-2172-38f3-2441-1b3f2d8d715e"
          },
          body: JSON.stringify({
            password : password,
            vendor_unique_id:UID
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
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
      console.error(error);
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
      console.error(error);
    }
  },

  Resend_OTP: async (Mobile) => {
    try {
      const response = await fetch(
        base_url + 'vandor_verify_mobile',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mobile:Mobile
          }),
        },
      );
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },

}
export default apis;
