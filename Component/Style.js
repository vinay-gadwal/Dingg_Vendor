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
      fontSize: RF(1.8),color:"rgb(153,153,153)",
      fontWeight: 'bold',
    },
    copy_rigth_image:{
      width: wp("2.5%"),
      height: hp("1.2%"),marginTop:hp(".5%"),
    },    
    input: {
      width: wp('70%'),
      height: hp('6%'),
      fontSize: RF(2.2),
      textAlign:'left',  
      fontFamily:'Muli-Bold',
      },
    
    inputSignUp: {
      flex:1,
      width: wp('100'),
      borderColor:"rgb(201,201,201)",
      borderBottomWidth:1,
      paddingHorizontal:"62%",
      borderBottomStartRadius:2,
      alignItems:"flex-start",
      textAlign:'left',
      fontWeight: 'bold',
    },    
    button: {
        width: wp('40%'),
        height: hp('7.2%'),
        backgroundColor: "rgb(255,164,0)",
        justifyContent: "center",
        paddingVertical: hp('1%'),
        borderRadius:10,
        shadowColor: 'rgb(255,164,0)',
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },   
    buttonText: {
      fontSize: RF(2.2),
        alignSelf: "center",
        textAlign: "center",
        color: "white",
        fontWeight: "700",
        // fontFamily:'Muli-Bold',
        fontWeight: 'bold',
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
        // height: hp('20%'),
        backgroundColor:"white",
        paddingVertical:hp('3%'),
        borderRadius:10,
    },
    
    box_SignUp:{
          alignItems:"center",
          width: wp('90%'),
          backgroundColor:"white",
          paddingVertical:hp('3%'),
          borderRadius:10,
    },
    text:{
          fontSize: RF(2.2), 
          color: "rgb(68,68,68)",
          fontFamily:'Muli-Bold',
          // fontWeight: 'bold',
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
        fontFamily:"Muli-Bold",
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
  
    avatarMultiple: {
      borderRadius: wp("2"),
      width: wp('20%'),
      height: hp('11%'),
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
      width: "90%",
      borderColor:"rgb(201,201,201)",
      borderBottomWidth:1,
      marginLeft:"5%"
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
        justifyContent:"space-between",
        
        },
    
    setting_text:{
      fontSize: RF(2.5),
      justifyContent:"flex-start"
      ,marginLeft:"5%",
      paddingVertical:"2.5%",
      fontFamily:"Muli-Bold",
      // fontWeight: 'bold',
    },
    
    setting_Image:{
      width: hp("2%"),
      height: hp("2%"),
      marginTop:hp("2"),
      marginRight:wp("6%")
    },
    Dashbosrd_image:{
      width: hp("2%"),
      height: hp("2.5%"),
      // marginVertical:hp("1"),
      // marginRight:wp("8%")
    },
    Dashbosrd_image_top:{
      height:hp("4%"),
      width:wp("7.5%"),
      marginLeft:wp("2%"),
      marginVertical:wp("5%"),
      marginRight:wp("8%")
    },
    profile_Small_text:{
      fontSize: RF(1.8),
      justifyContent:"flex-start",
      marginLeft:"10%",
      marginTop:"5%",
      color:"rgb(176,176,176)",
      fontWeight:"bold",
      // fontFamily:"Muli-Bold"
    },
    
    Logo_style:{
      width: wp('23%'),
        height: hp('9%'),
     marginVertical:wp("4%")
    },
    
    back_butt0n:{
        marginLeft:wp("6%"),
        width: wp('7%'),
        height: hp('2.5%'),
    },
    tab_button:{
      marginLeft:wp("5%"),
      width: wp('4.6%'),
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
          height: hp('1.5%'),
          width: wp('1.5%'),marginTop:hp("5.3%"),paddingLeft:wp("14%")
        },

  Profile_Container:{
      width:"90%",paddingVertical:hp(".5%"),marginVertical:hp("2%"),
      backgroundColor:"white",
      borderRadius:10,
      justifyContent: 'space-between',marginHorizontal:"5%"
    },
    Header:{
      justifyContent:"center",
      fontSize: RF(2.5),
      color:"black",
      paddingHorizontal:wp("34%"),
      paddingVertical:hp("3%"),
      backgroundColor:"white"
    },
    Dashboard_block:{
      width:wp("40%"),flexDirection:"row",
      backgroundColor:"white",
      // height:hp("13%"),
      borderRadius:10
    },

    Business_hour:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginVertical:hp("1.5%"),
      paddingHorizontal:wp("7%")
    },
    Business_hour_main:{
      marginLeft:"0%",marginLeft:wp("2%"),marginRight:wp("10%"),marginTop:hp(".5%")
    },
    Business_hour_time:{
      flexDirection:"row",marginTop:hp(".3%"),marginLeft:wp("2%")
    },
    business_hour_image_Arrow:{
      marginTop:wp("2%"),marginRight:wp("0%"),width:wp("5%")
    },
    Business_hour_text:{
      marginRight:wp("0%"),width:wp("13%"),marginHorizontal:wp("0%"),
       fontSize: RF(2.2), 
          color: "rgb(68,68,68)",
          // fontFamily:'Muli-Bold',
          fontWeight:"bold",
          marginTop:hp(".5%")
    },
    business_line:{
      marginRight:wp("0%"),marginTop:hp("1%"),width:wp("5%")
    },
    Business_Arrow_right:{
      marginLeft:wp("7%"),marginTop:hp("1.5%")
    },
    Business_to:{
      marginHorizontal:wp("0%"),
      fontSize: RF(2.2), 
      color: "rgb(68,68,68)",
      fontWeight:"bold",
      marginTop:hp(".5%"),
      fontWeight:"bold"
    },
    History_Action:{
      justifyContent:"flex-start",marginLeft:wp("5%"),marginBottom:hp("1%"),width:wp("65%"),
      fontSize: RF(2.5),
      justifyContent:"flex-start"
      ,marginLeft:"5%",
      paddingVertical:"2.5%",
      // fontFamily:"Muli-Bold",
      fontWeight: 'bold',
    },
    item: {
      fontSize: RF(2.5),
            paddingVertical:hp("1%"),
            fontFamily:"Muli-Bold",
            color:"rgb(116,116,116)"
          },
    
  });
  
  export default styles
  