import {StyleSheet} from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// Black: 444444
// Gray: 999999
// Orange: ffa400
const GLOBAL = require('../Component/Color');
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor:"rgb(242,242,242)",
    },
////Sign in////
    Row_divider:{
        flexDirection:"row",justifyContent:"space-between"
    },
    Add_sty:{
        backgroundColor:"white",width:wp("90%"),marginHorizontal:wp("5%"),borderRadius:8,marginVertical:hp("2%")
    ,flexDirection:"row",justifyContent:"space-between"
    },
    Add_sty_text:{
        borderBottomWidth:0,height:hp("5%"),width:wp("50%"),marginBottom:wp("3%"),fontSize:RF(2.5)
    , fontFamily:GLOBAL.COLOR.fontfamily,marginRight:wp("20%")
    },
    Mobile_number_divider:{
        marginTop:hp("1.3%"),fontSize: RF(2.2),fontFamily:GLOBAL.COLOR.fontfamily,
    },
    Radio_button:{
        marginRight:wp("7%")
    },
    Forget_pass_text:{
        color:GLOBAL.COLOR.ORANGE,
        marginLeft:wp('40%'),
        fontSize: RF(2),
        marginVertical:hp("1%"),
        fontWeight:"bold"
    },
    _91_style:{
        marginTop:hp("1.5%"),fontSize: RF(2.2),fontFamily:GLOBAL.COLOR.fontfamily
    },
    Sign_up_context:{
        flexDirection:"row",justifyContent:"space-between",marginBottom:hp("3%")
    },
    ////Logo Style///
    Logo_style:{
        marginTop:hp("5%")
    },
    ///OTP///
    Otp_text:{
        fontSize:RF(3.5),
        fontFamily:GLOBAL.COLOR.FontFamilyBold,
        marginVertical:hp("8%"),
        marginRight:wp("35%"),
          color: "rgb(68,68,68)",
          justifyContent:"flex-start"
    },
    otp_box:{
        alignItems:"flex-start",flexDirection:"row",justifyContent:"space-between"
    },
    otp:{
        marginHorizontal:wp("15%"),marginTop:hp("2%")  
    },
////timer///
    timer:{
        marginRight:wp("15%"),marginTop:hp("2%")  
    },
    timer_text:{
        color:"rgb(255,164,0)",fontSize:RF(1.9),
        fontFamily:GLOBAL.COLOR.fontfamily,
        justifyContent:"flex-start"
    },
    timer_countdown:{
        fontSize:RF(2),marginTop:hp("2%"),color:"rgb(176,176,176)"
    },
///flat_box//
    Flat_box:{
      width: wp('90%'),marginLeft:"5%",
      backgroundColor:GLOBAL.COLOR.backgroundColor,
      marginTop:hp('2%'),
      borderRadius:10,
      shadowColor: GLOBAL.COLOR.ShadowColor,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    Flat_box_row:{
      flexDirection:"column",marginVertical:hp("2%"),alignItems:"flex-start",width:wp("50%")
    },
    flat_box_top_row:{
      flexDirection:"row",justifyContent:"space-between"
    },
    flat_box_colum:{
      flexDirection:"column",marginVertical:hp("1.5%"),marginLeft:wp("5%")
    },
    flat_box_colum_right:{
        flexDirection:"column",marginVertical:hp("1.5%"),marginLeft:wp("5%"),width:wp("45%")
      },
//copyRight//
    copy_rigth:{
      fontSize: RF(1.8),color:"rgb(153,153,153)",fontWeight: 'bold',
    },
    copy_rigth_image:{
      width: wp("2.5%"),height: hp("1.2%"),marginTop:hp(".5%"),
    },  
///Existing_user/// 
    input: {
      width: wp('70%'),
      height: hp('6%'),
      fontSize: RF(2.2),
      textAlign:'left',  
      fontFamily:GLOBAL.COLOR.fontfamily,
      borderColor:GLOBAL.COLOR.input_color,
      },
    inputSignUp: {
      flex:1,
      width: wp('100'),
      borderColor:GLOBAL.COLOR.input_color,
      borderBottomWidth:1,
      paddingHorizontal:"62%",
      borderBottomStartRadius:2,
      alignItems:"flex-start",
      textAlign:'left',
      fontWeight: 'bold',
    },   
    Select_unselect_con:{
        width:wp(5.5),height:hp(3),marginLeft:wp("2%"),marginRight:wp("5%"),marginTop:hp("1%")
    } ,
    AddServices:{
        marginHorizontal:"5%"
    },
    Only_Column:{
flexDirection:"column"
    },
    View_offer:{
        marginLeft:wp("70%"),marginBottom:hp("2%"),marginTop:hp("2%"),  width: hp("2%"),
        height: hp("2%"),
        marginRight:wp("6%")
    },
    button: {
        width: wp('35%'),
        height: hp('6.5%'),
        backgroundColor:GLOBAL.COLOR.ORANGE,
        justifyContent: "center",
        paddingVertical: hp('1%'),marginVertical:hp("2%"),
        borderRadius:7,
        shadowColor: GLOBAL.COLOR.ORANGE,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },  
    Offer_button:{
    borderRadius:40,height:hp("4%"),width:wp("25%"),marginHorizontal:wp("5%"),marginVertical:hp("2%"), 
    backgroundColor:GLOBAL.COLOR.ORANGE,
    justifyContent: "center",
    shadowColor: GLOBAL.COLOR.ORANGE,
    shadowOffset: { width: 0, height: hp("0.5%") },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    },
    Action_button:{
        height:hp("5%"),
        width:wp("23%"),
        backgroundColor:"white",
        shadowColor: 'rgb(217,217,217)',
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        paddingVertical: hp('1%'),
    } ,
    buttonText: {
        fontSize: RF(2.2),
        alignSelf: "center",
        textAlign: "center",
        color: "white",
        fontWeight: "700",
        fontFamily:GLOBAL.COLOR.FontFamilyBold,
    },
    margin:{
          marginBottom:5,color:"white",
        },
    Custom:{
          width: wp('86%'),
          height: hp('43%'),
          marginTop:5,
          marginBottom:30,
          marginLeft:10
    }, 
    Row_margin:{
        flexDirection:"row",marginTop:hp("1%")
    },
    Colom_margin:{
        flexDirection:"column",alignItems:"center",marginVertical:hp("2%")
    },
    orange_line:{
        width: wp('14%'),
        height: hp('.3%'),marginBottom:hp("1%"),marginTop:hp(".5%")
    },
    box:{
        alignItems:"center",
        width: wp('90%'),
marginTop:hp("2%"),
        backgroundColor:GLOBAL.COLOR.backgroundColor,
        paddingVertical:hp('2%'),
        borderRadius:10,
        shadowColor: GLOBAL.COLOR.ShadowColor,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    Reject_box:{
        alignItems:"flex-start",
        width: wp('90%'),
        backgroundColor:GLOBAL.COLOR.backgroundColor,
        paddingVertical:hp('2%'),
        borderRadius:10,
        shadowColor: GLOBAL.COLOR.ShadowColor,marginTop:hp("5%"),
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    reject_radio:{
        marginTop:"5%",justifyContent:"flex-start",marginLeft:wp("2%"),paddingVertical:hp("2%")
    },
    Date_picker:{
        width: 150,marginTop:hp("2%")
    },
    text_orange:{
        fontSize: RF(2.2), 
        fontFamily:GLOBAL.COLOR.fontfamily,
        justifyContent:"flex-start",
        color:GLOBAL.COLOR.ORANGE,
        marginVertical:hp("1%")
      },
    text:{
          fontSize: RF(2.2), 
          color: "rgb(68,68,68)",
          fontFamily:GLOBAL.COLOR.fontfamily,
          justifyContent:"flex-start"
        },
tab_text:{
    fontSize: RF(2.2), 
    color: "rgb(68,68,68)",
    fontFamily:GLOBAL.COLOR.fontfamily,
    justifyContent:"flex-start",
    width:wp("30%"),marginLeft:wp("4%"),marginTop:hp(".5%")
},
Tab_Top_style:{
    marginTop:hp("2%"),marginLeft:wp("2%")
},
Big_text:{
        fontSize: RF(3), 
        color: "rgb(68,68,68)",
        fontFamily:GLOBAL.COLOR.fontfamily,
        justifyContent:"flex-start",marginVertical:hp("1%")
},
    grey_text:{
          fontSize: RF(2.2), 
          color: "rgb(68,68,68)",
          fontFamily:GLOBAL.COLOR.fontfamily,
        //   marginLeft:wp("3%"),
          fontSize:RF(1.8),
          color:"#999999",
          marginTop:hp("0%")
        },
    DropDown_view:{
        width:wp('75%')
    },
    DropDownStyle:{
        fontFamily:'Muli-Bold',
        width: wp('200%'),fontSize: RF(2.2),marginBottom:"10%",
        // position: 'absolute',
        top: 0,borderColor:GLOBAL.COLOR.ORANGE,
    },
    Delete_Image:{
        height:"3%",justifyContent:"center",alignItems:"center",marginLeft:wp("12%")
    },
    countryPicker: {
          alignItems: 'center',justifyContent: 'center',
        },
    
    containerOtp: {
          flex: 1,backgroundColor:GLOBAL.COLOR.backgroundColor,
        },
    form: {
          margin: 20
        },
    textInput: {
        height:hp('20%'),
        fontSize: RF(3),
        borderColor:"rgb(222,222,222)",
        borderBottomWidth:1,
        fontFamily:GLOBAL.COLOR.fontfamily,
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
        backgroundColor:GLOBAL.COLOR.backgroundColor,
        shadowColor: GLOBAL.COLOR.ShadowColor,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
         },
    avatarMultiple: {
        borderRadius: wp("2"),
        width: wp('20%'),
        height: hp('11%'),
        marginHorizontal:wp("1.5%"),
        shadowColor: GLOBAL.COLOR.ShadowColor,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
         },
    boxDetails:{
        alignItems:"center",
        width: wp('90%'),
        backgroundColor:GLOBAL.COLOR.backgroundColor,
        borderRadius:10,
        justifyContent: 'space-between',
        marginHorizontal:"5%",
        paddingVertical:hp('3%'),
        shadowColor: GLOBAL.COLOR.ShadowColor,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        }, 
    Setting_lineSetting:{
        width: "90%",
        borderColor:"rgb(201,201,201)",
        borderBottomWidth:1,
        marginLeft:"5%"
        },
    setting_compo:{
        width: wp('90%'),
        backgroundColor:GLOBAL.COLOR.backgroundColor,
        borderRadius:10,
        justifyContent: 'space-between',
        marginHorizontal:"5%"
        },
    setting_Row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:hp("1%")
        },
    setting_text:{
        fontSize: RF(2.5),
        paddingVertical:"2.5%",
        fontFamily:GLOBAL.COLOR.fontfamily,
        },
        Setting_text_:{
            fontSize: RF(2.5),
            paddingVertical:"2.5%",
            fontFamily:GLOBAL.COLOR.fontfamily,marginLeft:wp("5%")
        },
    setting_Image:{
        width: hp("2%"),
        height: hp("2%"),
        marginTop:hp("2"),
        marginRight:wp("6%")
         },
    ƒ:{
        width: hp("2%"),
        height: hp("2.5%"),
         },
    Dashbosrd_image_top:{
        height:hp("8%"),
        width:wp("15%"),
        marginLeft:wp("2%"),
        marginVertical:wp("2%"),
        fontFamily:GLOBAL.COLOR.FontFamilyBold
         },
    Dashboard_text:{
        fontFamily:'Muli-Bold',
        color:"#999999",
        fontSize:RF(1.7),
        fontFamily:GLOBAL.COLOR.FontFamilyBold,
        width:wp("11%"),
        alignItems:"flex-end",
         },
    Dashboard_big_text:{
            fontSize: RF(3.2),marginTop:hp("2%"),
            marginLeft:wp("5%"),
            color:"rgb(68,68,68)",
            fontFamily:GLOBAL.COLOR.FontFamilyBold,
         },
    Dashboard_block_box:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:wp("6%"),
        marginTop:hp("4%"),
        shadowColor: GLOBAL.COLOR.ShadowColor,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
         },
    Dashboard_block:{
        width:wp("40%"),flexDirection:"row",
        backgroundColor:GLOBAL.COLOR.backgroundColor,
        borderRadius:10,
        shadowColor: GLOBAL.COLOR.ShadowColor,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        },
    Dashboard_block_colom:{
        flexDirection:"column",
        width:wp("18%"),
        alignItems:"flex-end"
    },
    Dashboard_text_bottom:{
        fontSize: RF(2.5),
        paddingVertical:"2.5%",
        fontFamily:GLOBAL.COLOR.fontfamily,
        marginLeft:"6%",
    },
    DashBoard_User_name:{
        fontSize: RF(2.5),
        paddingVertical:"2.5%",
        fontFamily:GLOBAL.COLOR.fontfamily,
        width:wp("28%"),marginTop:hp("1%"),alignItems:"flex-start"
    },
    Dashboard_served:{
        fontSize: RF(2.5),
        paddingVertical:"2.5%",
        fontFamily:GLOBAL.COLOR.fontfamily,
        width:wp("10%"),marginTop:hp("1%"),alignItems:"center"
    },
    Dashboard_queue:{
        width:wp("8"),marginTop:hp("1%"),justifyContent:"flex-end",
        fontSize: RF(2.5),
        paddingVertical:"2.5%",
        fontFamily:GLOBAL.COLOR.fontfamily,
    },
    Dashboard_time:{
        flexDirection:"row",justifyContent:"space-evenly",width:wp("10%"),marginRight:wp("5%")
    },
    profile_Small_text:{
        fontSize: RF(1.8),
        justifyContent:"flex-start",
        marginLeft:"10%",
        marginTop:"5%",
        color:"rgb(176,176,176)",
        fontWeight:"bold",
        },
    Logo_style:{
        width: wp('23%'),height: hp('9%'),marginVertical:wp("4%")
        },
    back_butt0n:{
        marginLeft:wp("6%"),width: wp('7%'),height: hp('2.5%'),
        },
    back_butt0n_right:{
            marginLeft:wp("6%"),
            marginRight:wp("3%"),height:hp("3.2%"),width:wp("5%"),marginBottom:hp("1.5%")
            },
    tab_button:{
        marginLeft:wp("5%"),width: wp('4.6%'),height: hp('2.8%'),
        },
    textBoxBtnHolder:{
          position: "relative",alignSelf: "center",justifyContent: 'center'
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
        width:"90%",marginVertical:hp("1.5%"),
        backgroundColor:GLOBAL.COLOR.backgroundColor,
        borderRadius:10,
        justifyContent: 'space-between',marginHorizontal:"5%",
        shadowColor: GLOBAL.COLOR.ShadowColor,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        },
    QR_Code:{
        justifyContent:"center",alignItems:"center",height:hp("45%"),width:wp("80%"),marginHorizontal:wp("10%"),backgroundColor:"white"
       , shadowColor: GLOBAL.COLOR.ShadowColor,borderRadius:8,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
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
          fontFamily:GLOBAL.COLOR.fontfamily,
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
      fontFamily:GLOBAL.COLOR.fontfamily,
    },
  item: {
      fontSize: RF(2.5),
      paddingVertical:hp("1%"),
      fontFamily:GLOBAL.COLOR.fontfamily,
      color:"rgb(116,116,116)"
          }, 
header_style:{
    fontWeight: 'bold',marginBottom:hp("2%"),fontSize: RF("2.4"),justifyContent:"center",alignItems:"center"
          }
  });
  export default styles
  