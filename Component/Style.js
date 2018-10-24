import {
    StyleSheet
  } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgb(243,242,242)",paddingVertical:"5%"
    },
    copy_rigth:{
      fontSize: RF(2),color:"rgb(153,153,153)"
    },
    input: {
      width: wp('70%'),
      height: hp('4%'),
      marginBottom: "3%",
      fontSize: RF(2.5),
      borderColor:"rgb(222,222,222)",
      borderBottomWidth:1,
      marginTop:"3%",
      textAlign:'left',
    fontWeight:"bold"    
    },
    inputSignUp: {
      flex:1,
      width: wp('100'),
      borderColor:"rgb(201,201,201)",
      borderBottomWidth:1,
      paddingHorizontal:"62%",borderBottomStartRadius:2,alignItems:"flex-start",
            textAlign:'left'
    },
    button: {
      width: wp('40%'),
      height: hp('7.2%'),
      backgroundColor: "rgb(255,164,0)",
      justifyContent: "center",
      paddingVertical: "1%",
      borderRadius:10,
      shadowColor: 'rgb(255,164,0)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    buttonText: {
      fontSize: RF(3),
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
    Custom:{width: wp('86%'),
    height: hp('43%'),marginTop:5,
      marginTop:5,
      marginBottom:30,marginLeft:10
    },
    box:{
      alignItems:"center",
      width: wp('90%'),
      height: hp('20%'),
      backgroundColor:"white",
      paddingVertical:"5%",
      borderRadius:10,
      
    },
    box_SignUp:{
      alignItems:"center",
      width: wp('90%'),
      height: hp('20%'),
      backgroundColor:"white",
      paddingVertical:"5%",
      borderRadius:10,
    },
    text:{
      fontSize: RF(2.5), color: "rgb(68,68,68)",
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
      fontSize: RF(3),
      borderColor:"rgb(222,222,222)",
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
      fontSize: RF(3),
      color: "black",
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
      width: wp('25%'),
      height: hp('13%'),
      marginTop:"0%"
    },
    avatarMultiple: {
      borderRadius: 7,
      width: wp('5%'),
      height: hp('5%'),
      paddingHorizontal:"5%"
    },
    boxDetails:{
      alignItems:"center",
      width: wp('90%'),
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
      borderBottomWidth:1,fontSize: RF(3),
      width: wp('70%'),      borderColor:"rgb(222,222,222)",
    },
    Setting_lineSetting:{
      width: wp('80%'),

      borderColor:"rgb(201,201,201)",
      borderBottomWidth:1,
      paddingLeft:"10%"
    },
    setting_compo:{
      width: wp('90%'),

      backgroundColor:"white",
      borderRadius:10,
      justifyContent: 'space-between',marginHorizontal:"5%"
    },
    setting_Row:{
     flexDirection:"row",justifyContent:"space-between"
        },
    setting_text:{
      fontSize: RF(2.5),justifyContent:"flex-start",marginLeft:"5%",marginTop:"5%"
    },
    setting_Image:{
      width: 20,height: 20,marginTop:14,paddingRight:"5%"
    },
    profile_Small_text:{
      fontSize: RF(2),justifyContent:"flex-start",
      marginLeft:"5%",marginTop:"5%",color:"rgb(176,176,176)",fontWeight:"bold"
    },
    Logo_style:{
      width: wp('25%'),
      height: hp('8%'),
     marginVertical:"5%"
    },
    back_butt0n:{
      marginLeft:"20%",
                width: wp('8%'),
      height: hp('4%'),
    },
    textBoxBtnHolder:
  {
    position: "relative",
    alignSelf: "center",
    justifyContent: 'center'
  },

  visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },

  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  }

    
  });
  
  export default styles
  