import {StyleSheet} from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const GLOBAL = require('../Component/Color');
const styles = StyleSheet.create({
container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor:"rgb(242,242,242)",
    },
padding_bottom:{paddingBottom:hp("6%")},
margin_top:{marginVertical:hp("3%")},
Row_divider:{flexDirection:"row",justifyContent:"space-between"},
Sign_up_context:{
        flexDirection:"row",justifyContent:"space-between",marginBottom:hp("3%")
    },
otp_box:{ alignItems:"flex-start",flexDirection:"row",justifyContent:"space-around"},
Otp_button_margin:{marginBottom:hp("50%")},
Row_margin:{flexDirection:"row",marginTop:hp("4%")},
DElete_icon:{
        width: hp("2%"),height: hp("2%"),
        marginTop:hp("3"),marginBottom:hp("2%"),marginTop:hp("1%"),alignItems:"flex-end",justifyContent:"flex-end"
    },
Add_sty:{
        backgroundColor:"white",width:wp("90%"),marginHorizontal:wp("5%"),borderRadius:10,marginVertical:hp("2%")
    ,flexDirection:"row",justifyContent:"space-between"
    },
Add_sty_text:{
        borderBottomWidth:0,height:hp("5%"),width:wp("50%"),marginBottom:wp("2%"),fontSize:RF(2)
    , fontFamily:GLOBAL.COLOR.fontfamily,marginRight:wp("25%")
    },
Mobile_number_divider:{
        marginTop:hp("1.3%"),fontSize: RF(2.2),fontFamily:GLOBAL.COLOR.fontfamily,
    },
    Mobile_number_divider_Update:{
        marginTop:hp(".6%"),fontSize: RF(2.2),fontFamily:GLOBAL.COLOR.fontfamily,
    },
Radio_button:{marginRight:wp("9%")},
_91_style:{
        marginTop:hp("1.5%"),fontSize: RF(2.2),fontFamily:GLOBAL.COLOR.fontfamily,marginLeft:wp("1.5z%")
    },
Otp_text:{
        fontSize:RF(3),
        fontFamily:GLOBAL.COLOR.FontFamilyBold,
        marginVertical:hp("6%"),marginTop:hp("8%"),
        marginRight:wp("15%"),
          color: "rgb(68,68,68)",
          justifyContent:"flex-start"
    },
otp:{
        marginHorizontal:wp("15%"),marginTop:hp("2%")  
    },
timer:{
        marginRight:wp("15%"),marginTop:hp("3%")  
    },
timer_text:{
        color:GLOBAL.COLOR.ORANGE,fontSize:RF(1.9),
        fontFamily:GLOBAL.COLOR.fontfamily,
        justifyContent:"flex-start"
    },
timer_countdown:{
        fontSize:RF(2),marginTop:hp("2%"),color:"black",marginRight:wp("2%")
    },
Flat_box:{
      width: wp('90%'),marginHorizontal:"5%",
      backgroundColor:GLOBAL.COLOR.backgroundColor,paddingVertical:hp(".7%"),
      marginTop:hp('3%'),
      borderRadius:8,
      shadowColor: GLOBAL.COLOR.ShadowColor,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
Flat_box_row:{
      flexDirection:"column",marginVertical:hp("2%"),alignItems:"flex-start",width:wp("50%")
    },
    flat_box_colum:{
      flexDirection:"column",marginVertical:hp(".8%"),marginLeft:wp("5%")
    },
flat_box_colum_right:{
        flexDirection:"column",marginVertical:hp("1%"),marginLeft:wp("5%"),width:wp("45%")
      },
copy_rigth:{
      fontSize: RF(1.8),color:"rgb(153,153,153)",fontWeight: 'bold',
    },
copy_rigth_image:{
      width: wp("2.8%"),height: hp("1.6%"),marginTop:hp(".3%"),
    },  
input: {
      width: wp('70%'),
      height: hp('6%'),
      fontSize: RF(2.2),
      textAlign:'left',  
      fontFamily:GLOBAL.COLOR.fontfamily,
      borderColor:GLOBAL.COLOR.input_color,
      fontWeight:"bold"
    },
    input_Update: {
        width: wp('70%'),
        height: hp('4%'),
        fontSize: RF(2.2),
        textAlign:'left',  
        fontFamily:GLOBAL.COLOR.fontfamily,
        borderColor:GLOBAL.COLOR.input_color,
        fontWeight:"bold"
      },
Mobile_nput:{
        fontSize: RF(2.2),
        textAlign:'left',  
        fontFamily:GLOBAL.COLOR.fontfamily,
        borderColor:GLOBAL.COLOR.input_color,
        width: wp('53'), height: hp('6%')
    },
Select_unselect_con:{
        width:wp("4%"),height:hp("2.3%"),marginLeft:wp("2%"),marginRight:wp("5%"),marginTop:hp("2%")
    } ,
AddServices:{marginHorizontal:wp("5%")},
padding_verticle:{ paddingVertical:hp("3.5%")},
MARGIN_VERticle:{marginVertical:hp("2.3%")},
margin_left_5:{marginLeft:wp("5%")},
Only_Column:{flexDirection:"column",alignItems:"center"},
Column_reverse:{flexDirection:"column-reverse"},
Adddetails_image:{marginTop:hp("5%")},
View_offer:{
        marginLeft:wp("70%"),marginBottom:hp("2%"),marginTop:hp("2%"),  width: hp("2%"),
        height: hp("2%"),
        marginRight:wp("6%")
    },
button: {
        width: wp('35%'),
        backgroundColor:GLOBAL.COLOR.ORANGE,
        justifyContent: "center",marginHorizontal:wp("33%"),
        paddingVertical: hp('1.7%'),marginVertical:hp("2%"),
        borderRadius:7,
        shadowColor: GLOBAL.COLOR.ORANGE,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },  
Offer_button:{
    borderRadius:40,height:hp("4%"),width:wp("25%"),marginHorizontal:wp("5%"),marginVertical:hp("2.5%"), 
    backgroundColor:GLOBAL.COLOR.ORANGE,
    justifyContent: "center",
    shadowColor: GLOBAL.COLOR.ORANGE,
    shadowOffset: { width: 0, height: hp("0.5%") },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    },
Action_button:{
        width:wp("18%"),borderRadius:8,marginLeft:wp("1%"),
        backgroundColor:"white",
        shadowColor: 'rgb(217,217,217)',
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 2,
        shadowRadius: 8,
        paddingVertical: hp('.5%'),
    } ,
Send_alert:{marginTop:hp("1.5%"),marginLeft:wp("18%")},
buttonText: {
        fontSize: RF(2.1),
        alignSelf: "center",
        textAlign: "center",
        color: "white",
        fontWeight: "700",
        fontFamily:GLOBAL.COLOR.FontFamilyBold,
    },
Custom:{
          width: wp('86%'),
          height: hp('43%'),
          marginTop:5,
          marginBottom:30,
          marginLeft:10
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
        // marginTop:hp("2%"),
        backgroundColor:GLOBAL.COLOR.backgroundColor,
        paddingVertical:hp('2%'),
        borderRadius:8,
        shadowColor: GLOBAL.COLOR.ShadowColor,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
switch_Style:{
        marginRight:wp("7%"),paddingVertical:hp("1.5%")
    },
Reject_box:{
        alignItems:"flex-start",
        width: wp('90%'),
        backgroundColor:GLOBAL.COLOR.backgroundColor,
        paddingVertical:hp('1.5%'),marginTop:hp("5%"),
        borderRadius:8,
        shadowColor: GLOBAL.COLOR.ShadowColor,marginTop:hp("7%"),
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
reject_radio:{
        marginTop:"3%",justifyContent:"flex-start",marginLeft:wp("2%"),paddingVertical:hp("2%")
    },
Date_picker:{
        width: 150,marginTop:hp("2%")
    },
text_orange:{
        fontSize: RF(2), 
        fontFamily:GLOBAL.COLOR.fontfamily,
        justifyContent:"flex-start",
        color:GLOBAL.COLOR.ORANGE,
        marginVertical:hp("1%")
      },
profile_text:{
        fontSize: RF(2.2), 
        fontFamily:GLOBAL.COLOR.fontfamily,
        justifyContent:"flex-start",
        color: GLOBAL.COLOR.Black,
        marginVertical:hp("2profile_Small_text%"),marginLeft:"10%"
      },
text:{
          fontSize: RF(2), 
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
    marginTop:hp("2.5%"),marginLeft:wp("0%")
},
Big_text:{
        fontSize: RF(3), 
        color: "rgb(68,68,68)",
        fontFamily:GLOBAL.COLOR.fontfamily,
        justifyContent:"flex-start",marginVertical:hp("1%")
},
grey_text:{
          fontSize: RF(2.2), 
          color: GLOBAL.COLOR.GRAY,
          fontFamily:GLOBAL.COLOR.fontfamily,
          fontSize:RF(1.8),
          marginTop:hp(".7%")
        },
greay_View_offer:{ marginTop:hp("0%"), fontSize:RF(2),marginLeft:wp("3%")},
DropDown_view:{ width:wp('70%')},
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
callingCodeView: {
        alignItems: 'center',
        justifyContent: 'center'
          },
callingCodeText: {
        fontSize: RF(3),
        color: GLOBAL.COLOR.Black,
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
FlatList_Image: {
            borderRadius: wp("2"),
            width: wp('17%'),
            height: hp('10%'),
            marginHorizontal:wp("1.5%"),marginVertical:hp("1.3%"),
            shadowColor: GLOBAL.COLOR.ShadowColor,
            shadowOffset: { width: 0, height: hp("0.5%") },
            shadowOpacity: 0.8,
            shadowRadius: 4,
             },
boxDetails:{
        alignItems:"flex-start",paddingLeft:wp("10%"),
        width: wp('90%'),
        backgroundColor:GLOBAL.COLOR.backgroundColor,
        borderRadius:8,
        justifyContent: 'space-between',
        marginHorizontal:"5%",
        paddingVertical:hp('1.5%'),marginVertical:hp("2%"),
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
            fontSize: RF(2),
            paddingVertical:"2.5%",
            fontFamily:GLOBAL.COLOR.fontfamily,marginLeft:wp("5%")
        },
setting_Image:{
        width: hp("2%"),
        height: hp("2%"),
        marginTop:hp("2"),
        marginRight:wp("6%")
         },
Cancel_buton:{marginLeft:wp("75%"),marginBottom:hp("1%"),marginTop:hp("0%"), width: hp("2%"),height: hp("2%"),marginRight:wp("6%")},
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
        fontSize:RF(1.7),marginTop:hp("1%"),
        fontFamily:GLOBAL.COLOR.FontFamilyBold,
        width:wp("10.8%"),
        alignItems:"flex-end",
         },
Dashboard_big_text:{
            fontSize: RF(3),marginTop:hp("1%"),
            marginLeft:wp("5%"),
            color:"rgb(68,68,68)",
            fontFamily:GLOBAL.COLOR.FontFamilyBold,
         },
Dashboard_block_box:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:wp("7%"),
        marginTop:hp("4%"),
        shadowColor: GLOBAL.COLOR.ShadowColor,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,
         },
Dashboard_block:{
        width:wp("40%"),flexDirection:"row",
        backgroundColor:GLOBAL.COLOR.backgroundColor,
        borderRadius:8,
        shadowColor: GLOBAL.COLOR.ShadowColor,
        paddingVertical:hp(".7%"),
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
        fontSize: RF(2),
        paddingVertical:hp("1.8%"),
        fontFamily:GLOBAL.COLOR.fontfamily,
        marginLeft:"6%",
    },
DashBoard_User_name:{
        fontSize: RF(2),
        paddingVertical:hp("1%"),
        fontFamily:GLOBAL.COLOR.fontfamily,marginRight:wp("3%"),
        width:wp("28%"),marginTop:hp("1%"),alignItems:"flex-start"
    },
Dashboard_served:{
        fontSize: RF(2),
        paddingVertical:hp("1%"),
        fontFamily:GLOBAL.COLOR.fontfamily,
        width:wp("10%"),marginTop:hp("1%"),alignItems:"center"
    },
Dashboard_queue:{
        width:wp("8"),marginTop:hp("1%"),justifyContent:"flex-end",
        fontSize: RF(2),
        paddingVertical:hp("1%"),
        fontFamily:GLOBAL.COLOR.fontfamily,marginLeft:wp("5%")
    },
Dashboard_time:{
        flexDirection:"row",justifyContent:"space-evenly",width:wp("10%"),marginLeft:wp("3%")
    },
Icon_style:{marginTop:hp("1.3%"),marginLeft:wp("1.7%")},
    Dashboard_bottom:{width:wp("75%"),flexDirection:"row"
    ,paddingHorizontal:wp("3%"),marginRight:wp("2%"),borderRadius:8},
profile_Small_text:{
        fontSize: RF(1.8),
        justifyContent:"flex-start",
        marginLeft:"10%",
        marginTop:hp("3%"),
        color:"rgb(176,176,176)",
        fontWeight:"bold",
        },
Profile_Edit_Camer:{
            height:"3%",justifyContent:"center",alignItems:"center",marginLeft:wp("12%")
        },
profile_edit:{
            height:"1%",justifyContent:"center",alignItems:"center"
        },
back_butt0n:{
        marginLeft:wp("7%"),width: wp('7%'),height: hp('2.5%'),marginBottom:hp("2%"),marginTop:hp("1.3%")
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
        width:"90%",marginVertical:hp("1%"),
        backgroundColor:GLOBAL.COLOR.backgroundColor,
        borderRadius:8,
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
QR_button:{
        width: wp('35%'),
        height: hp('6.5%'),
        backgroundColor:GLOBAL.COLOR.ORANGE,
        justifyContent: "center",
        marginBottom:hp("10%"),
        borderRadius:7,
        shadowColor: GLOBAL.COLOR.ORANGE,
        shadowOffset: { width: 0, height: hp("0.5%") },
        shadowOpacity: 0.8,
        shadowRadius: 4,marginHorizontal:wp("3%")
    },
Camera_style:{height:"1%",justifyContent:"center",alignItems:"center",marginLeft:wp("18%")},
Business_hour:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginVertical:hp("1.5%"),
      paddingHorizontal:wp("7%")
        },
Business_hour_Switch:{
   marginLeft:wp("2%"),marginRight:wp("8%"),marginTop:hp(".5%")
    },
Business_hour_time:{
      flexDirection:"row",marginTop:hp(".3%"),marginLeft:wp("2%")
    },
business_line_left:{
      marginTop:wp("2%"),marginRight:wp("0%"),width:wp("5%")
    },
Business_hour_text:{
     width:wp("12%"),
          fontSize: RF(2), marginRight:wp("2%"),
          fontFamily:GLOBAL.COLOR.fontfamily,
      },
business_line_right:{
     marginTop:hp("1%"),width:wp("5%")
    },
Business_Arrow_right:{
      marginLeft:wp("0%"),marginTop:hp(".7%")
    },
Business_to:{
      marginHorizontal:wp("0%"),
      fontSize: RF(2), 
      color: "rgb(68,68,68)",
      fontWeight:"bold",
      marginTop:hp(".7%"),
      fontWeight:"bold"
    },
Business_image:{
        width:wp("4%"),height:hp("2.3%"),marginTop:hp("1%"),marginRight:wp("3%")
    },
History_Action:{
      justifyContent:"flex-start",marginLeft:wp("5%"),marginBottom:hp("1%"),width:wp("65%"),
      fontSize: RF(2),
      justifyContent:"flex-start"
      ,marginLeft:"5%",
      paddingVertical:"2.5%",
      fontFamily:GLOBAL.COLOR.fontfamily,
    },
item: {
      fontSize: RF(2),
      paddingVertical:hp("1%"),
      fontFamily:GLOBAL.COLOR.fontfamily,
          }, 
header_style:{
    fontWeight: 'bold',marginBottom:hp("2%"),fontSize: RF("2.4"),justifyContent:"center",alignItems:"center"
          },
Tab_style:{marginBottom:hp("2%")},
Select_time_user:{borderColor:"transparent",height:hp("8%"),marginRight:wp("1%"), shadowColor: GLOBAL.COLOR.ShadowColor,
shadowOffset: { width: 0, height: hp("0.7%") },
shadowOpacity: 0.8,
shadowRadius: 4,},
});
export default styles
  