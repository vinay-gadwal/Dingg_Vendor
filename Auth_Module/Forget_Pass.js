import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Image,ScrollView
} from 'react-native';
import styles from '../Component/Style'
// import Frisbee from 'frisbee';
import Spinner from 'react-native-loading-spinner-overlay';
import Form from 'react-native-form';
import CountryPicker from 'react-native-country-picker-modal';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// const api = new Frisbee({
//   baseURI: 'http://localhost:3000',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   }
// });

const MAX_LENGTH_CODE = 6;
const MAX_LENGTH_NUMBER = 20;

// if you want to customize the country picker
const countryPickerCustomStyles = {};

// your brand's theme primary color
const brandColor = 'rgb(255,163,0)';


export default class example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      enterCode: false,
      spinner: false,
      country: {
        cca2: 'US',
        callingCode: '1'
      }
    };
  }

  _getCode = () => {

    // this.setState({ spinner: true });

    // setTimeout(async () => {

    //   try {

    //     const res = await api.post('/v1/verifications', {
    //       body: {
    //         ...this.refs.form.getValues(),
    //         ...this.state.country
    //       }
    //     });

    //     if (res.err) throw res.err;

    //     this.setState({
    //       spinner: false,
    //       enterCode: true,
    //       verification: res.body
    //     });
    //     this.refs.form.refs.textInput.setNativeProps({ text: '' });

    //     setTimeout(() => {
    //       Alert.alert('Sent!', "We've sent you a verification code", [{
    //         text: 'OK',
    //         onPress: () => this.refs.form.refs.textInput.focus()
    //       }]);
    //     }, 100);

    //   } catch (err) {
    //     // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
    //     this.setState({ spinner: false });
    //     setTimeout(() => {
    //       Alert.alert('Oops!', err.message);
    //     }, 100);
    //   }

    // }, 100);

  }

  _verifyCode = () => {

    // this.setState({ spinner: true });

    // setTimeout(async () => {

    //   try {

    //     const res = await api.put('/v1/verifications', {
    //       body: {
    //         ...this.refs.form.getValues(),
    //         ...this.state.country
    //       }
    //     });

    //     if (res.err) throw res.err;

    //     this.refs.form.refs.textInput.blur();
    //     // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
    //     this.setState({ spinner: false });
    //     setTimeout(() => {
    //       Alert.alert('Success!', 'You have successfully verified your phone number');
    //     }, 100);

    //   } catch (err) {
    //     // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
    //     this.setState({ spinner: false });
    //     setTimeout(() => {
    //       Alert.alert('Oops!', err.message);
    //     }, 100);
    //   }

    // }, 100);

  }

  _onChangeText = (val) => {
    if (!this.state.enterCode) return;
    if (val.length === MAX_LENGTH_CODE)
    this._verifyCode();
  }

  _tryAgain = () => {
    this.refs.form.refs.textInput.setNativeProps({ text: '' })
    this.refs.form.refs.textInput.focus();
    this.setState({ enterCode: false });
  }

  _getSubmitAction = () => {
    this.state.enterCode ? this._verifyCode() : this._getCode();
  }

  _changeCountry = (country) => {
    this.setState({ country });
    this.refs.form.refs.textInput.focus();
  }

  _renderFooter = () => {

    if (this.state.enterCode)
      return (
        <View>
          <Text style={styles.wrongNumberText} onPress={this._tryAgain}>
            Enter the wrong number or need a new code?
          </Text>
        </View>
      );

    // return (
    //   <View>
    //     <Text style={styles.disclaimerText}>By tapping "Submi for OTP" above, we will send you an SMS to confirm your phone number. Message &amp; data rates may apply.</Text>
    //   </View>
    // );

  }

  _renderCountryPicker = () => {

    if (this.state.enterCode)
      return (
        <View />
      );

    return (
      <CountryPicker
        ref={'countryPicker'}
        closeable
        style={styles.countryPicker}
        onChange={this._changeCountry}
        cca2={this.state.country.cca2}
        styles={countryPickerCustomStyles}
        translation='eng'/>
    );

  }

  _renderCallingCode = () => {
    GLOBAL.code=this.state.country.callingCode;

    if (this.state.enterCode)
      return (
        <View />
      );

    return (
      <View style={styles.callingCodeView}>
        <Text style={styles.callingCodeText}>+{this.state.country.callingCode}</Text>
      </View>
    );
      
  }

  render() {

    let headerText = `What's your ${this.state.enterCode ? 'verification code' : 'Enter Mobile Number'}?`
    let buttonText = this.state.enterCode ? 'Verify confirmation code' : 'Submit for OTP';
    let textStyle = this.state.enterCode ? {
      height: 50,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Courier'
    } : {};

    return (
      <View style={styles.container}>
        <Image
          source={require('../Image/icon/logo_3.png')}
          style={styles.Logo_style}
        />
        <View style={[styles.box_SignUp,{ height: hp('15%'),marginBottom:"2%"}]}>
        <Form ref={'form'} style={styles.form}>

          <View style={{ flexDirection: 'row' }}>

            {this._renderCountryPicker()}
            {this._renderCallingCode()}

            <TextInput
              ref={'textInput'}
              name={this.state.enterCode ? 'code' : 'phoneNumber' }
              type={'TextInput'}
              underlineColorAndroid={'transparent'}
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={this._onChangeText}
              placeholder={this.state.enterCode ? '_ _ _ _ _ _' : 'Enter Mobile Number'}
              // keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              keyboardType="email-address"
              style={[ styles.textInput,{height: hp('5%'),width: wp('65%'),} ]}
              returnKeyType='next'
              autoFocus
             placeholderTextColor="rgb(211,211,211)"
              selectionColor={brandColor}
              maxLength={this.state.enterCode ? 6 : 20}
              onSubmitEditing={this._getSubmitAction} 
              />

          </View>
        </Form>
        </View>
        <View style={{marginBottom:"40%"}}>
        <TouchableOpacity style={[styles.button,{width: wp('50'),}]} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('For_New_Pass')}}>
            <Text style={styles.buttonText}>{ buttonText }</Text>
          </TouchableOpacity>

          {this._renderFooter()}
       </View>
        <View style={{flexDirection:"row"}}>
        <Image
          source={require('../Image/icon/copyright.png')}
          style={{
            width: 16,
            height: 16,
            // left: 20
          }}
        />
        <Text style={styles.copy_rigth}> All copyright reserved to Dingg 2018</Text>
          </View>

        <Spinner
          visible={this.state.spinner}
          textContent={'One moment...'}
          textStyle={{ color: '#fff' }} />

      </View>
    );
  }
}

AppRegistry.registerComponent('example', () => example);