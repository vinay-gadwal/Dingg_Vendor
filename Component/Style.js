import {StyleSheet} from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgb(243,242,242)",
      paddingVertical:"5%"
    },
    
    copy_rigth:{
      fontSize: RF(2),color:"rgb(153,153,153)"
    },
    
    input: {
      width: wp('70%'),
      height: hp('2%'),
      marginBottom: hp('1%'),
      fontSize: RF(2.5),
      marginTop:"3%",
      textAlign:'left',  
    },
    
    inputSignUp: {
      flex:1,
      width: wp('100'),
      borderColor:"rgb(201,201,201)",
      borderBottomWidth:1,
      paddingHorizontal:"62%",
      borderBottomStartRadius:2,
      alignItems:"flex-start",
      textAlign:'left'
    },
    
    button: {
        width: wp('40%'),
        height: hp('7.2%'),
        backgroundColor: "rgb(255,164,0)",
        justifyContent: "center",
        paddingVertical: hp('1%'),
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
        },
    
    Custom:{
          width: wp('86%'),
          height: hp('43%'),
          marginTop:5,
          marginBottom:30,
          marginLeft:10
    },
    
    box:{
        alignItems:"center",
        width: wp('90%'),
        height: hp('20%'),
        backgroundColor:"white",
        paddingVertical:hp('3%'),
        borderRadius:10,
    },
    
    box_SignUp:{
          alignItems:"center",
          width: wp('90%'),
          height: hp('20%'),
          backgroundColor:"white",
          paddingVertical:hp('3%'),
          borderRadius:10,
    },
    text:{
          fontSize: RF(2.5), 
          color: "rgb(68,68,68)",
        },
   
    countryPicker: {
        alignItems: 'center',
        justifyContent: 'center',
        },
    
    containerOtp: {
          flex: 1,
          backgroundColor: "rgb(243,242,242)",
        },
   
    form: {
          margin: 20
        },
   
    textInput: {
        height:hp('20%'),
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
      height: hp('12%'),
      marginTop:"0%"
    },
    
    avatarMultiple: {
      borderRadius: 7,
      width: wp('20%'),
      height: hp('10%'),
      paddingHorizontal:"1%"
    },
    
    boxDetails:{
      alignItems:"center",
      width: wp('90%'),
      backgroundColor:"white",
      borderRadius:10,
      justifyContent: 'space-between',
      marginHorizontal:"5%",
      paddingVertical:hp('3%')
    },
    
    Setting_lineSetting:{
      width: "80%",
      borderColor:"rgb(201,201,201)",
      borderBottomWidth:1,
      paddingLeft:"10%"
    },
    
    setting_compo:{
      width: wp('90%'),
      backgroundColor:"white",
      borderRadius:10,
      justifyContent: 'space-between',
      marginHorizontal:"5%"
    },
    
    setting_Row:{
        flexDirection:"row",
        justifyContent:"space-between"
        },
    
    setting_text:{
      fontSize: RF(2.5),
      justifyContent:"flex-start"
      ,marginLeft:"5%",
      marginTop:"5%"
    },
    
    setting_Image:{
      width: 20,
      height: 20,
      marginTop:14,
      paddingRight:"5%"
    },
    
    profile_Small_text:{
      fontSize: RF(2),
      justifyContent:"flex-start",
      marginLeft:"5%",
      marginTop:"5%",
      color:"rgb(176,176,176)",
      fontWeight:"bold"
    },
    
    Logo_style:{
      width: wp('23%'),
        height: hp('7.5%'),
     marginVertical:wp("5%")
    },
    
    back_butt0n:{
        marginLeft:wp("5%"),
        width: wp('7%'),
        height: hp('2.8%'),
    },
    
    textBoxBtnHolder:{
          position: "relative",
          alignSelf: "center",
          justifyContent: 'center'
        },

  visibilityBtn:{
        position: 'absolute',
        right: "3%",
        height:"70%",
        width: "8%",
        marginTop:"10%",marginBottom:"0%"
      },

  btnImage:{
          resizeMode: 'contain',
          height: hp('5%'),
          width: wp('5%'),marginTop:"45%"
        }

    
  });
  
  export default styles
  