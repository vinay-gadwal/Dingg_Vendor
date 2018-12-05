// import { Base64 } from 'js-base64';
import { AsyncStorage } from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob'

const base_url = 'http://18.217.123.119:3000/api/';

const apis = {
  SIGNUP_API: async () => {
    fetch(base_url+'vendor_signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile:this.state.usermobile
        })
  })
      .then((response) => response.json())
      .then((responseJson) => {
   GLOBAL.Mobile =this.state.usermobile
   this.props.navigation.navigate('OTP');
      })
      .catch((error) => {
        console.error(error);
      });
},
Create_pass:async (password,Uid) => {  
    fetch('http://18.217.123.119:3000/api/vendor_save_password', {
        method: 'POST',
        headers: {
          "content-type": "application/json",
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZW5kb3JfaWQiOjIsImlhdCI6MTU0MzY1MjMzMn0.YkHuCPyF0qpEacC6eWd9UCwH5cjUZEbhp7ijME99GPs",
          "cache-control": "no-cache",
          "postman-token": "259dd594-eba1-a1a0-ea9c-95f38ae6ac75"
        },
        body: JSON.stringify({
          password : password, 
          vendor_unique_id:Uid
        })
  })
      .then((response) => response.json())
      .then((responseJson) => {
   GLOBAL.Mobile =this.state.usermobile
   this.props.navigation.navigate('AddDetails');
      })
      .catch((error) => {
        console.error(error);
      });6
  }
  
}
export default apis;
