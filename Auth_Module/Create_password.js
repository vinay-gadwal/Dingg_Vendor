import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from '../Component/Style'


export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {

      password: "",hidePassword:"true"
    };
    
  }

  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    return (
      <View  style={styles.container}>
      {/* <View style={{backgroundColor:"white",height:"10%",width:"100%",marginBottom:"4%",flexDirection:"row"}}>
          <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('SignUp')}}>
                    <Image
                                source={require('../Image/icon/back.png')}
                                style={{ marginTop:"20%",
                                width: "80%",
                                height: "80%",
                                alignItems:"flex-start",marginLeft:"15%"
                        }}
                    />
                    </TouchableOpacity>
               <Text style={{justifyContent:"center",fontSize:18,color:"black",paddingHorizontal:"25%",paddingVertical:"5%"}}>SIGN UP</Text>
          </View> */}
        <View style={styles.box}>
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Enter New Password"
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="go"
             secureTextEntry
          />
           <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={input => (this.passwordCInput = input)}
            // onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input}
            placeholder="Confirm New Password"
            placeholderTextColor="rgb(211,211,211)"
            returnKeyType="go"
             secureTextEntry
          />
        
    </View>
        <TouchableOpacity style={styles.button} onPress={() => {this._getSubmitAction;this.props.navigation.navigate('Password')}}>
        <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <View style={{flexDirection:"row"}}>
        <Image
          source={require('../Image/icon/copyright.png')}
          style={{
            width: 16,
            height: 16,
            // left: 20
          }}
        />
        <Text style={{fontSize:16,color:"rgb(152,152,152)"}}> All copyright reserved to Dingg 2018</Text>
          </View>
    </View>
    );
  }
}

AppRegistry.registerComponent("Login", () => Login);
