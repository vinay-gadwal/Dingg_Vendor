import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator,Image ,TouchableOpacity} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import styles from './Style'
class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: "hellllo",
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    // const { page, seed } = this.state;
    // const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    // this.setState({ loading: true });

    // fetch(url)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       data: page === 1 ? res.results : [...this.state.data, ...res.results],
    //       error: res.error || null,
    //       loading: false,
    //       refreshing: false
    //     });
    //   })
    //   .catch(error => {
    //     this.setState({ error, loading: false });
    //   });
  };

//   handleRefresh = () => {
//     this.setState(
//       {
//         page: 1,
//         seed: this.state.seed + 1,
//         refreshing: true
//       },
//       () => {
//         this.makeRemoteRequest();
//       }
//     );
//   };

//   handleLoadMore = () => {
//     this.setState(
//       {
//         page: this.state.page + 1
//       },
//       () => {
//         this.makeRemoteRequest();
//       }
//     );
//   };

//   renderSeparator = () => {
//     return (
//       <View
//         style={{
//           height: 1,
//           width: "100%",
//           backgroundColor: "#CED0CE",
//           marginLeft: "14%"
//         }}
//       />
//     );
//   };

  
  render() {
    return (
        <View style={{
                        flex: 1,
                        justifyContent: "space-between",
                        backgroundColor: "rgb(243,242,242)",
                        paddingVertical:"0%"}}>
                <FlatList
                data={this.state.data}
                renderItem={()=> (
                    <View style={{ 
                        width: wp('90%'),marginLeft:"5%",
                        height: hp('30%'),
                        backgroundColor:"white",
                        marginVertical:hp('1%'),
                        borderRadius:10,}}>
                        <View style={{flexDirection:"row"}}>
                            <Image
                                    source={require('../Image/icon/editIcon2x.png')}
                                    style={[styles.setting_Image,{marginLeft:wp("70%"),marginBottom:hp("2%"),marginTop:hp("2%")}]}
                                />
                            <Image
                                    source={require('../Image/icon/deleteIcon2x.png')}
                                    style={[styles.setting_Image,{marginRight:wp("3%"),marginBottom:hp("2%"),marginTop:hp("2%")}]}
                                />
                        </View>
                        <Text style={[styles.text,{marginHorizontal:wp("5%")}]}>{GLOBAL.Offer_name}</Text>
                        <View style={{flexDirection:"row"}}>
                            <Image
                                        source={require('../Image/icon/serviceIcon3x.png')}
                                        style={[styles.setting_Image,{marginLeft:wp("3%"),marginBottom:hp("2%"),marginTop:hp("2%")}]}
                                    />
                            <Text style={[styles.text,{marginHorizontal:wp("2%"),marginTop:hp("1%"),color:"rgb(173,173,173)"}]}>{GLOBAL.Offer_name}</Text>

                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Image
                                        source={require('../Image/icon/calenderIcon2x.png')}
                                        style={[styles.setting_Image,{marginLeft:wp("3%"),marginBottom:hp("2%"),marginTop:hp("2%")}]}
                                    />
                            <Text style={[styles.text,{marginHorizontal:wp("2%"),marginTop:hp("1%"),color:"rgb(173,173,173)"}]}>{ GLOBAL.Start_date}</Text>
                            <Text style={[styles.text,{marginHorizontal:wp("2%"),marginTop:hp("1%"),color:"rgb(173,173,173)"}]}>{ GLOBAL.end_date}</Text>
                        </View>
                            <View style={[styles.button,{borderRadius:40,height:hp("5%"),width:wp("30%"),marginHorizontal:wp("10%")}]} >
                            <Text style={styles.buttonText}>{GLOBAL.Offer_percentage}% Off</Text>
                            </View>
                     </View>
                    )}
                />
                <View style={{marginVertical:hp("2%"),marginHorizontal:wp("30%"),backgroundColor:"white"}}>
                    <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('AddOffer')}}>
                    <Text style={styles.buttonText}>Add Offers</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
  }
}

export default FlatListDemo;