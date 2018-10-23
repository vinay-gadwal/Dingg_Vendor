import {
    StyleSheet
  } from 'react-native';
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgb(243,242,242)",
    },
    input: {
      height: "35%",
      width: "70%",
      marginBottom: "5%",
      fontSize:18,
      borderColor:"rgb(255,163,0)",
      borderBottomWidth:1,
      marginTop:"5%",
      textAlign:'left'
    },
    inputSignUp: {
      flex:1,
      width: "100%",
      borderColor:"rgb(201,201,201)",
      borderBottomWidth:1,
      paddingHorizontal:"62%",borderBottomStartRadius:2,alignItems:"flex-start",
            textAlign:'left'
    },
    button: {
      width: "40%",height:"8%",
      backgroundColor: "rgb(255,163,0)",
      justifyContent: "center",
      paddingVertical: "1%",
      borderRadius:10
    },
    buttonText: {
      fontSize: 20,
      alignSelf: "center",
      textAlign: "center",
      color: "white",
      fontWeight: "700"
    },
   
    margin:{
      marginBottom:5,
      color:"white",
      //fontSize:12
    },
    Custom:{height:43,marginTop:5,
      width:86,
      marginTop:5,
      marginBottom:30,marginLeft:10
    },
    box:{
      alignItems:"center",
      height:"30%",
      width:"90%",
      backgroundColor:"white",
      paddingVertical:"5%",
      borderRadius:10,
      marginTop:"30%"
    },
    box_SignUp:{
      alignItems:"center",
      height:"20%",
      width:"90%",
      backgroundColor:"white",
      paddingVertical:"5%",
      borderRadius:10,
    },
    text:{
      fontSize:16
    },
    countryPicker: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerOtp: {
      flex: 1,
      backgroundColor: "rgb(243,242,242)",
    },
    header: {
      textAlign: 'center',
      marginTop: 60,
      fontSize: 22,
      margin: 20,
      color: '#4A4A4A',
    },
    form: {
      margin: 20
    },
    textInput: {
      height:"125%",
      fontSize: 18,
      color: "rgb(255,163,0)",
      borderBottomWidth:1,

    },
    wrongNumberText: {
      margin: 10,
      fontSize: 14,
      textAlign: 'center'
    },
    disclaimerText: {
      marginTop: 30,
      fontSize: 12,
      color: 'grey'
    },
    callingCodeView: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    callingCodeText: {
      fontSize: 20,
      color: "rgb(255,163,0)",
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      paddingRight: 10
    },
    avatarContainer: {
      borderColor: '#9B9B9B',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"white",
    },
    avatar: {
      borderRadius: 7,
      width: 120,
      height: 120,
      marginTop:"10%"
    },
    avatarMultiple: {
      borderRadius: 7,
      width: 5,
      height: 5,
      paddingHorizontal:"5%"
    },
    boxDetails:{
      alignItems:"center",
      width:"90%",
      backgroundColor:"white",
      borderRadius:10,
      justifyContent: 'space-between',marginHorizontal:"5%",paddingVertical:"10%"
    },
    welcome1: {
      flex: 1,
      backgroundColor: 'white',
      margin: 10,
      textAlign: "left",
      paddingTop: 10,
      borderBottomWidth:1,fontSize:18,width:"80%"
    },
    Setting_lineSetting:{
      flex:1,
      width: "100%",
      borderColor:"rgb(201,201,201)",
      borderBottomWidth:1,
      paddingHorizontal:"22%",borderBottomStartRadius:2    
    },
    setting_compo:{
      width:"90%",
      backgroundColor:"white",
      borderRadius:10,
      justifyContent: 'space-between',marginHorizontal:"5%"
    },
    setting_Row:{
     flexDirection:"row",justifyContent:"space-between"
        },
    setting_text:{
      fontSize:18,justifyContent:"flex-start",marginLeft:"5%",marginTop:"5%"
    },
    setting_Image:{
      width: 20,height: 20,marginTop:14,paddingRight:"5%"
    },
    
    
  });
  
  export default styles
  