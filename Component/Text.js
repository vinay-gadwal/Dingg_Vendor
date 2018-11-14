import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Dimensions,
  // TouchableNativeFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  // SafeAreaView
} from 'react-native';
import Modal from 'react-native-modal';


// import SplashScreen from 'react-native-splash-screen';


export default class Login extends Component{
  static navigationOptions = {
    title: 'Login',
    drawerLabel: 'Login',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./img/logo.png')}
    //     style={[{tintColor: tintColor}]}
    //   />
    // ),
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  state = {
    username: '',
    password: '',
    processing: false,
    loginText: 'Login',
    forgotPasswordText: 'Send Recovery Link',
    isModalVisible: false
  };

  componentDidMount() {
    // SplashScreen.hide();
    // // this.props.navigation.dangerouslyGetParent().navigate('home');
    // apis.LOCAL_GET_DATA('@MYA:ticket').then((value) => {
    //   // console.warn(value);
    //   if (value) {
    //     // console.warn('running');
    //     this.setState({ processing: false, loginText: 'Successful!' });
    //     this.props.navigation.dangerouslyGetParent().navigate('home');
    //   }
    // }).catch((error) => {
    //   console.error(error);
    //   this.setState({ processing: false, loginText: 'Try Again' });
    // });
  }

  componentWillUnmount() {
    // this.props.navigation.openDrawer();
  }

  loginHandler = () => {
    // // console.log(this.state);
    // // console.log(apis);
    // this.setState({ processing: true });
    // apis.LOGIN_API(this.state.username, this.state.password)
    //   .then((response) => {
    //     // console.log(response);
    //     if (response && response.data && response.data.ticket) {
    //       apis.LOCAL_SET_DATA('@MYA:ticket', response.data.ticket).then(() => {
    //         // console.warn('Successful');
    //         this.setState({ processing: false, loginText: 'Successful!' });
    //         this.props.navigation.dangerouslyGetParent().navigate('home');
    //       }).catch((error) => {
    //         console.error(error);
    //         console.warn('Failed');
    //         this.setState({ processing: false, loginText: 'Try Again' });
    //       });
    //     } else {
    //       console.warn('Failed');
    //       this.setState({ processing: false, loginText: 'Try Again' });
    //     }
    //     // apis.LOCAL_GET_DATA('@MYA:ticket').then((value) => {
    //     //   // console.warn(value);
    //     //   this.setState({ processing: false, loginText: 'Successful!' });
    //     // }).catch((error) => {
    //     //   console.error(error);
    //     //   this.setState({ processing: false, loginText: 'Try Again' });
    //     // });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     this.setState({ processing: false, loginText: 'Try Again' });
    //   });
  }

  hideModal = () =>
    this.setState({ isModalVisible: false });

  showModal = () =>
    this.setState({ isModalVisible: true });

  resetPassword = () => {
    // apis.RESET_PASSWORD_API(this.state.username)
    //   .then((response) => {
    //     // console.warn(response);
    //   })
    //   .catch((error) => {
    //     console.error(error);

    //   });
  }

  render() {
    return (
      // <SafeAreaView style={{flex: 1 }}>
      <View key={'login_view'} style={ styles.container }>
        {/* <Image resizeMode={'stretch'} key={'login_background_image'} source={ require('../img/Splash/Splash1242x2208.png') } style={ styles.backgroundImage } /> */}
        <KeyboardAvoidingView key={'keyboard_adjust_view'} style={ styles.loginForm }>
          <View key={'login_email_body'} style={ styles.formField }>
            <Text key={'login_email_label'} style={ styles.text }>Email</Text>
            <TextInput
              key={'login_email_input'}
              editable={ this.state.processing ? false : true } selectTextOnFocus={ this.state.processing ? false : true }
              // autoFocus={ true }
              textContentType={ 'emailAddress' }
              style={ styles.input }
              returnKeyType='next'
              onChangeText={ (text) => this.setState({ username: text }) }
              value={ this.state.username }
              onSubmitEditing={ () => this.secondTextInput.focus() }
            />
          </View>
          <View key={'login_password_body'} style={ styles.formField }>
            <Text key={'login_password_label'} style={ styles.text }>Password</Text>
            <TextInput
              key={'login_password_input'}
              editable={ this.state.processing ? false : true } selectTextOnFocus={ this.state.processing ? false : true }
              textContentType={ 'password' }
              style={ styles.input }
              returnKeyType='done'
              secureTextEntry={ true }
              ref={ (input) => this.secondTextInput = input }
              onChangeText={ (text) => this.setState({ password: text }) }
              value={ this.state.email }
              onSubmitEditing={ () => this.loginHandler() }
            />
          </View>
          <TouchableOpacity onPress={this.showModal} key={'forgot_password_action'} style={ styles.forgotText }>
            <Text key={'forgot_password_text'} style={ styles.forgotText }>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={'login_submit_btn_action'}
            style={ !this.state.processing ? styles.loginBtn : [ styles.loginBtn, styles.disabled ] }
            // useForeground={ true }
            // background={TouchableNativeFeedback.SelectableBackground()}
            onPress={ this.loginHandler }
          >
            <View key={'login_submit_btn_body'} style={ !this.state.processing ? styles.loginBtn : [ styles.loginBtn, styles.disabled ] }>
              <Text key={'login_submit_btn_text'} style={ styles.loginBtnText }>{!this.state.processing ? this.state.loginText : 'Processing...'}</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={ styles.modalContent }>
            <View key={'forgot_email_body'} style={ styles.formField }>
              <Text key={'forgot_email_label'} style={ styles.text }>Enter your registered email</Text>
              <TextInput
                key={'forgot_email_input'}
                editable={ this.state.processing ? false : true } selectTextOnFocus={ this.state.processing ? false : true }
                // autoFocus={ true }
                textContentType={ 'emailAddress' }
                style={ styles.input }
                returnKeyType='done'
                onChangeText={ (text) => this.setState({ username: text }) }
                value={ this.state.username }
                onSubmitEditing={ () => this.loginHandler() }
              />
            </View>
            <TouchableOpacity
              key={'forgot_submit_btn_action'}
              style={ !this.state.processing ? [ styles.loginBtn, styles.forgotBtn ] : [ styles.loginBtn, styles.disabled, styles.forgotBtn ] }
              onPress={this.resetPassword}>
              <View key={'forgot_submit_btn_body'} style={ !this.state.processing ? [ styles.loginBtn, styles.forgotBtn ] : [ styles.loginBtn, styles.disabled ] }>
                <Text key={'forgot_submit_btn_text'} style={ styles.loginBtnText }>{!this.state.processing ? this.state.forgotPasswordText : 'Processing...'}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              key={'forgot_cancel_btn_action'}
              style={ !this.state.processing ? [ styles.loginBtn, styles.forgotBtn, { color: 'gray' } ] : [ styles.loginBtn, styles.disabled, styles.forgotBtn ] }
              onPress={this.hideModal}>
              <View key={'forgot_submit_btn_body'} style={ !this.state.processing ? [ styles.loginBtn, styles.forgotBtn, { color: 'gray' } ] : [ styles.loginBtn, styles.disabled ] }>
                <Text key={'forgot_submit_btn_text'} style={ styles.loginBtnText }>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000000',
  },

  modalContent: {
    backgroundColor: 'black',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },

  modalText: {
    color: 'white'
  },

  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // resizeMode: 'contain', // or 'stretch'
  },

  loginForm: {
    // flex: 1,
    marginHorizontal: '12.5%',
    width: '75%',
    height: '90%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  formField: {
    width: '100%',
    marginVertical: '4%',
    // backgroundColor: 'gray',
  },

  text: {
    width: '100%',
    color: 'white',
    marginBottom: '2%'
  },

  input: {
    width: '100%',
    color: 'white',
    height: 40,
    backgroundColor: 'rgba(138, 138, 138, 0.44)',
    paddingHorizontal: '4%',
    // borderColor: 'gray',
    // borderWidth: 1
  },

  forgotText: {
    width: '100%',
    textAlign: 'right',
    color: 'white',
    marginBottom: '5%'
  },

  loginBtnLayout: {
    width: '100%',
    backgroundColor: '#ae0000',
    color: 'white',
    // marginTop: '10%',
  },

  loginBtn: {
    width: '100%',
    backgroundColor: '#ae0000',
    color: 'white',
    // marginTop: '10%',
  },

  forgotBtn: {
    marginBottom: '2%'
  },

  loginBtnText: {
    paddingVertical: 15,
    textAlign: 'center',
    color: 'white',
  },

  disabled: {
    backgroundColor: 'gray'
  }
});
