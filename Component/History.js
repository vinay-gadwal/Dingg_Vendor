import React from 'react';
import styles from '../Component/Style'
import { TouchableOpacity, View, Animated, FlatList, Text, Dimensions, Image } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
import { createMaterialTopTabNavigator } from 'react-navigation';
import PropTypes from 'prop-types'
import { Dialog } from "react-native-simple-dialogs";
import {createStackNavigator,} from 'react-navigation';
import Alert_top from './Alert'
const GLOBAL = require('../Component/Color');
const Plus_width = 30;
const Plus_height = 30;
const initWidth=320; 
const initHeight=2;
const InitTabWidth = 110;
const InitTabheight = 2.7;
class Ongoing extends React.Component {
        state = {
                     valueArray: [], disabled: false ,hair_data:"",hair_data_time:"",
                     isLoading: true,MakeUp_data:"",makeup_data_time:"",time:30,Increase_time:10,
                     Select_unselect:"true",Select_unselect_1:"true",Select_unselect_2:"true",
                     Select_unselect_3:"true",Select_unselect_4:"true",Select_unselect_5:"true",
                         dataSource :[{
                          name:"1h 50m"
                             },
                             {
                              name:"1h 50m"
                          },],
            }
          index = 0;
          animatedValue = new Animated.Value(0);
    openDialog = (show) => {
            this.setState({ showDialog: show });
        }

        managePasswordVisibility = () =>
        {
          this.setState({ Select_unselect: !this.state.Select_unselect });
        }
        managePasswordVisibility_1 = () =>
        {
          this.setState({ Select_unselect_1: !this.state.Select_unselect_1 });
        }
        managePasswordVisibility_2 = () =>
        {
          this.setState({ Select_unselect_2: !this.state.Select_unselect_2 });
        }
        managePasswordVisibility_3 = () =>
        {
          this.setState({ Select_unselect_3: !this.state.Select_unselect_3 });
        }
        managePasswordVisibility_4 = () =>
        {
          this.setState({ Select_unselect_4: !this.state.Select_unselect_4 });
        }
        managePasswordVisibility_5 = () =>
        {
          this.setState({ Select_unselect_5: !this.state.Select_unselect_5 });
        }
      FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      }
      increase_time(){
        this.setState({time : 10})
      }
  render() {
    return (
        <View style={styles.container}>   
          <View style={{flexDirection:"row"}}>
            <FlatList          
              data={ this.state.dataSource }
              renderItem={({item}) => 
              <View style={styles.Flat_box}> 
                <View style={styles.Row_divider}>                          
                  <View style={styles.flat_box_colum}>
                  <View style={[styles.Row_divider,{marginTop:hp("1%")}]}>
                                    <ResponsiveImage source={GLOBAL.Serve_Icon} style={styles.Icon_style} initWidth={GLOBAL.Icon_width} initHeight={GLOBAL.COLOR.size_11}/>
                                    <Text style={[styles.grey_text,]}>{item.name}</Text>
                                 </View>
                     <Image style={styles.FlatList_Image} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}  />                                 
                        <View style={styles.Row_divider}>
                            <TouchableOpacity onPress={this.increase_time()}>
                              <ResponsiveImage source={require('../Image/main/plusIcon3x.png')} initWidth={Plus_width} initHeight={Plus_height}/>
                            </TouchableOpacity>
                              <Text style={[styles.text_orange,{fontSize:RF(1.8),marginBottom:hp("1%")}]}>Time</Text>
                                          {/* {this.state.time+" " + 'M'} */}
                            <TouchableOpacity>
                              <ResponsiveImage source={require('../Image/main/minusIcon3x.png')} initWidth={Plus_width} initHeight={Plus_height}/>
                            </TouchableOpacity>
                        </View>
                            <TouchableOpacity style={[styles.Action_button,{marginLeft:wp("2.3%")}]}
                                           onPress={ () => this.openDialog(true) }>
                            <Text style={[styles.buttonText,{color:GLOBAL.COLOR.ORANGE,fontSize:RF(1.5)}]}>Add Services</Text>
                            </TouchableOpacity>
                  </View>           
                  <View style={[styles.flat_box_colum_right]}>
                       <Text style={styles.text_orange}>Mark as Done</Text>
                       <Text style={styles.text}>Token ID : TK102</Text>
                       <Text style={styles.text}>{item.name}</Text>
                       <Text style={styles.grey_text}>Service</Text>
                       <Text style={[styles.text]}>{item.name}</Text>
                       <Text style={styles.grey_text}>Stylist</Text>
                       <Text style={[styles.text]}>{item.name}</Text>
                  </View>           
              </View>  
          </View> }                       
                            />
      </View>
          <Dialog
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialog(false) }
                    onTouchInside={ () => this.openDialog(false) }
                    visible={ this.state.showDialog }
                >   
                 <TouchableOpacity onPress={() => this.openDialog(false)}>
                      <ResponsiveImage
                                  source={GLOBAL.CancelIcon}
                                  style={[styles.setting_Image,{marginLeft:wp("80%"),marginTop:hp("0%")}]}
                      />
                  </TouchableOpacity>

                  <Text style={[styles.text,{fontSize: RF(2),}]}>Add Services</Text>
                  <Text></Text>

                 <TouchableOpacity onPress = { this.managePasswordVisibility} style={[styles.setting_Row,]}>
                        <Text style={styles.History_Action}>Hair Oil Massage</Text>
                  <View activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility }>
                        <ResponsiveImage source = { ( this.state.Select_unselect ) ? GLOBAL.UnSelectIcon : GLOBAL.SelectIcon } style = {styles.Select_unselect_con} />
                  </View>
                  </TouchableOpacity>
                  <View style={styles.AddServices}>
                  <ResponsiveImage source={GLOBAL.TableDivider} initWidth={initWidth} initHeight={initHeight}/>
                  </View>

                  <TouchableOpacity onPress = { this.managePasswordVisibility_1 } style={[styles.setting_Row,]}>
                        <Text style={styles.History_Action}>Shampoo</Text>
                  <View activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_1 }>
                        <ResponsiveImage source = { ( this.state.Select_unselect_1 ) ?GLOBAL.UnSelectIcon : GLOBAL.SelectIcon } style = {styles.Select_unselect_con} />
                  </View>
                  </TouchableOpacity>
                  <View style={styles.AddServices}>
                  <ResponsiveImage source={GLOBAL.TableDivider} initWidth={initWidth} initHeight={initHeight}/>
                  </View>

                  <TouchableOpacity onPress = { this.managePasswordVisibility_2 } style={[styles.setting_Row,]}>
                        <Text style={styles.History_Action}>Regular Hair Cut</Text>
                  <View activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_2 }>
                        <ResponsiveImage source = { ( this.state.Select_unselect_2 ) ? GLOBAL.UnSelectIcon : GLOBAL.SelectIcon } style = {styles.Select_unselect_con} />
                  </View>
                  </TouchableOpacity>
                  <View style={styles.AddServices}>
                  <ResponsiveImage source={GLOBAL.TableDivider} initWidth={initWidth} initHeight={initHeight}/>
                  </View>

                  <TouchableOpacity onPress = { this.managePasswordVisibility_3 } style={[styles.setting_Row,]}>
                        <Text style={styles.History_Action}>Premium Haircut</Text>
                  <View activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_3 }>
                        <Image source = { ( this.state.Select_unselect_3 ) ? GLOBAL.UnSelectIcon : GLOBAL.SelectIcon } style = {styles.Select_unselect_con} />
                  </View>
                  </TouchableOpacity>
                  <View style={styles.AddServices}>
                        <ResponsiveImage source={GLOBAL.TableDivider} initWidth={initWidth} initHeight={initHeight}/>
                  </View>

                  <TouchableOpacity onPress = { this.managePasswordVisibility_4 } style={[styles.setting_Row,]}>
                        <Text style={styles.History_Action}>Blow Dry</Text>
                  <View activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_4 }>
                        <ResponsiveImage source = { ( this.state.Select_unselect_4 ) ? GLOBAL.UnSelectIcon : GLOBAL.SelectIcon } style = {styles.Select_unselect_con} />
                  </View>
                  </TouchableOpacity>
                  <View style={styles.AddServices}>
                  <ResponsiveImage source={GLOBAL.TableDivider} initWidth={initWidth} initHeight={initHeight}/>
                  </View>

                    <TouchableOpacity onPress = { this.managePasswordVisibility_5 } style={[styles.setting_Row,]}>
                        <Text style={styles.History_Action}>Hair Styling</Text>
                  <View activeOpacity = { 0.8 }  onPress = { this.managePasswordVisibility_5 }>
                        <ResponsiveImage source = { ( this.state.Select_unselect_5 ) ? GLOBAL.UnSelectIcon : GLOBAL.SelectIcon } style = {styles.Select_unselect_con} />
                  </View>
                  </TouchableOpacity>            
         </Dialog>
</View>
    );
  }}

class StarReview extends React.Component {
  constructor(props){
    super(props)
        this.state = {
                     valueArray: [], disabled: false ,hair_data:"",hair_data_time:"",
                     isLoading: true,MakeUp_data:"",makeup_data_time:"",
                     rating: this.defaultRating,
                         dataSource1 : [ {
                                 name:"Hair cut"
                             },],     
            }
            this.displayValue = props.display || props.value
            this.defaultRating = props.default || props.rating
            this.isReactElement = React.isValidElement
          index = 0;
          this.animatedValue = new Animated.Value(0);
          }
      
      FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      }

      componentWillReceiveProps(nextProps) {
        let defaultRating = this.props.rating || this.props.default
        let nextDefaultRating = nextProps.rating || nextProps.default
        if (defaultRating !== nextDefaultRating) {
          this.setState({
            rating: nextDefaultRating,
          })
        }
      }
    
      createPartialStar(partial, blockStyle, emptyBlockStyle, starStyle) {
        return this.props.opacity ?
          this.isReactElement(this.props.fullStar) ?
            <View style={{opacity: partial}}>
              {this.props.fullStar}
            </View>
            :
            <ImageBackground style={starStyle} source={this.props.emptyStar}>
              <Image style={{
                height: this.props.starSize,
                width: this.props.starSize,
                opacity: partial,
                backgroundColor:'transparent'}} source={this.props.fullStar}/>
            </ImageBackground>
          :
          <ImageBackground style={starStyle} source={this.props.fullStar}>
            <View style={{flexDirection: 'row'}}>
             <View style={emptyBlockStyle}></View>
             <View style={blockStyle}></View>
            </View>
            <Image style={{height: this.props.starSize, width: this.props.starSize, backgroundColor: 'transparent', position: 'absolute'}} source={this.props.emptyStar}/>
          </ImageBackground>
      }
    
      displayMode() {
        const partial = this.displayValue - Math.floor(this.displayValue)
        const blockStyle = {height: this.props.starSize, width: this.props.starSize * (1.0 - partial), backgroundColor: this.props.backingColor}
        const emptyBlockStyle = {height: this.props.starSize, width: this.props.starSize * partial, backgroundColor: 'transparent'}
        const starStyle = {height: this.props.starSize, width: this.props.starSize, backgroundColor: this.props.backingColor}
        const stars = []
        for (let i = 1; i < this.props.count + 1; i++) {
          if (i == Math.floor(this.displayValue) + 1) {
            //partial star
            const partialStarComponent =
              <View key={i} style={{paddingLeft: this.props.spacing/2, paddingRight: this.props.spacing/2}}>
                {this.createPartialStar(partial, blockStyle, emptyBlockStyle, starStyle)}
              </View>
    
            stars.push(partialStarComponent)
          } else if (i > Math.floor(this.displayValue) + 1) {
            //empty stars
            const emptyStarComponent = this.isReactElement(this.props.emptyStar) ?
              <View key={i}>{this.props.emptyStar}</View>
              :
              <View key={i} style={{paddingLeft: this.props.spacing/2, paddingRight: this.props.spacing/2}}>
                <Image style={starStyle} source={this.props.emptyStar}/>
              </View>
    
            stars.push(emptyStarComponent)
          } else {
            //filled stars
            const starComponent = this.isReactElement(this.props.fullStar) ?
              <View key={i}>{this.props.fullStar}</View>
              :
              <View key={i} style={{paddingLeft: this.props.spacing/2, paddingRight: this.props.spacing/2}}>
                <Image style={starStyle} source={this.props.fullStar}/>
              </View>
    
            stars.push(starComponent)
          }
        }
        return (
          <View>
            <View style={styles.Row_divider}>{stars}</View>
          </View>
        )
      }
    
      createHalfStarMember(index, star, halfStar) {
        // if not a halfStar, either fullStar or emptyStar
        let starComponent = halfStar || star
        starComponent = this.isReactElement(starComponent) ?
          starComponent
          :
          <ImageBackground style={{width: this.props.starSize, height: this.props.starSize}} source={star}>
            <Image style={{width: this.props.starSize, height: this.props.starSize}} source={halfStar}/>
          </ImageBackground>
    
        return (
          <View key={index} style={{paddingLeft: this.props.spacing/2, paddingRight: this.props.spacing/2}}>
            {starComponent}
            <View style={{flexDirection: 'row', position: 'absolute'}}>
              <TouchableOpacity style={{height: this.props.starSize, width: this.props.starSize/2}} disabled={this.props.disabled} onPress={()=>{
                this.setState({rating: index - 0.5})
                this.props.update(index - 0.5)
              }}/>
              <TouchableOpacity style={{height: this.props.starSize, width: this.props.starSize/2}} disabled={this.props.disabled} onPress={()=>{
                this.setState({rating: index})
                this.props.update(index)
              }}/>
            </View>
          </View>
        )
      }
    
      halfRatingMode() {
        const stars = []
        for (let i = 1; i < this.props.count + 1; i++) {
          const star = (i <= this.state.rating) ? this.props.fullStar : this.props.emptyStar
          const halfStar = (this.state.rating + 0.5 == i) ? this.props.halfStar : null
          stars.push(
            this.createHalfStarMember(i, star, halfStar)
          )
        }
        return (
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {stars}
          </View>
        )
      }
    
      createFullStarMember(index, star) {
        const starComponent = this.isReactElement(star) ?
          star
          :
          <Image style={{width: this.props.starSize, height: this.props.starSize}} source={star}/>
    
        return (
          <View key={index} style={{paddingLeft: this.props.spacing/2, paddingRight: this.props.spacing/2}}>
            <TouchableOpacity disabled={this.props.disabled} onPress={()=>{
              this.setState({rating: index})
              this.props.update(index)
            }}>
              {starComponent}
            </TouchableOpacity>
          </View>
        )
      }
    
      fullRatingMode() {
        const stars = []
        for (let i = 1; i < this.props.count + 1; i++) {
          const star = (i <= this.state.rating) ? this.props.fullStar : this.props.emptyStar
          stars.push(
            this.createFullStarMember(i, star)
          )
        }
        return (
          <View style={{flexDirection: 'row', justifyContent: 'center',height:"1%"}}>
            {stars}
          </View>
        )
      }
    
  render() {
    const view = this.displayValue == null ?
    (this.props.half ? this.halfRatingMode() : this.fullRatingMode())
    :
    this.displayMode()
    return (
        <View style={styles.container}>
                  
             <View style={styles.Row_divider}>
                      <FlatList          
                            data={ this.state.dataSource1 }
                            renderItem={({item}) => 
                            <View style={styles.Flat_box}>
                                <View style={styles.Row_divider}>                          
                                     <View style={styles.flat_box_colum}>
                                        <View style={styles.Row_divider}>
                                            <ResponsiveImage source={GLOBAL.Calender_Icon} style={styles.Icon_style} initWidth={GLOBAL.Icon_width} initHeight={GLOBAL.COLOR.size_11}/>
                                            {/* <Text style={styles.grey_text}>{item.name}</Text> */}
                                         </View>
                                         <View>
                                         <Image style={styles.FlatList_Image} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}  />                                 
                                         </View>
                                         {view}
                                    </View>           
                                      <View style={styles.flat_box_colum_right}>
                                         <Text style={styles.tex}>Token ID : TK102</Text>
                                         <Text style={styles.text}>{item.name}</Text>
                                         <Text style={styles.grey_text}>Service</Text>
                                         <Text style={styles.text}>{item.name}</Text>
                                         <Text style={styles.grey_text}>Stylist</Text>
                                         <Text style={styles.text}>{item.name}</Text>
                                    </View>           
                                </View> 
                                </View>  }                       
                            />
                   </View>
         </View>
    );
  }
}
StarReview.propTypes = {
  value: PropTypes.number,
  display: PropTypes.number,
  count: PropTypes.number,
  rating: PropTypes.number,
  default: PropTypes.number,
  emptyStar: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  fullStar: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired,
  halfStar: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  update: PropTypes.func,
  starSize: PropTypes.number,
  backingColor: PropTypes.string,
  opacity: PropTypes.bool,
  half: PropTypes.bool,
  spacing: PropTypes.number,
  disabled: PropTypes.bool,
}

StarReview.defaultProps = {
  fullStar: require('../star-images/starFilled.png'),
  halfStar: require('../star-images/starHalf.png'),
  emptyStar: require('../star-images/starEmpty.png'),
  disabled: false,
  value: null,
  display: null,
  count: 5,
  rating: 0,
  default: 0,
  starSize: 12,
  update: () => {},
  backingColor: 'white',
  opacity: false,
  half: false,
  spacing: 7
}

const AuthStack = createMaterialTopTabNavigator ({
  Ongoingjob: { screen :Ongoing,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        const line = focused ? GLOBAL.Highlight_Top_tab : GLOBAL.Highlight_top_tab_invi
        return (
          <View style={styles.Only_Column}>
          <Text style={styles.tab_text}>Ongoing Job</Text>
          <ResponsiveImage source={line} style={styles.Tab_Top_style} initWidth={InitTabWidth} initHeight={InitTabheight}/>
          </View>
        )
    }
    })},
  Completed: {screen:StarReview,
    navigationOptions: () => ({
      title:"Completed",
      tabBarIcon: ({ focused }) => {
        const line = focused ? GLOBAL.Highlight_Top_tab : GLOBAL.Highlight_top_tab_invi
       
        return (
          <View style={styles.Only_Column}>
         <Text style={styles.tab_text}>Completed</Text>
          <ResponsiveImage source={line} style={[styles.Tab_Top_style,{marginRight:wp("4%")}]} initWidth={InitTabWidth} initHeight={InitTabheight}/>
          </View>
        )
    }
    })}
} ,{
    initialRouteName: 'Ongoingjob',
    navigationOptions: {
      headerStyle: {
        backgroundColor: GLOBAL.COLOR.ORANGE,
      },
      
    },
    
    initialLayout: {
      height: 0,
      width: Dimensions.get('window').width,
    },
    optimizationsEnabled: true,
    tabBarOptions: 
     {
      labelStyles:{ fontSize:RF(3),
        
       } ,
      upperCaseLabel: false,
      style: {
        height: hp("8%"),
        marginTop:hp("3%"),
        backgroundColor: "white",
        borderRadius:10,
        marginHorizontal:wp("5%"),
        justifyContent:"flex-end"
      },
      indicatorStyle: {
        borderBottomColor: GLOBAL.COLOR.ORANGE,
        borderBottomWidth: 2,
        opacity: 0,
        height: 1
      },
      tabStyle: {
        borderRightColor: '#ffffff',
        borderRightWidth: 1,
        fontSize:RF(3)
      },
      showIcon: true,
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'black',
    },
  }
  );
  
  export default createStackNavigator({
    AuthStack:{
      screen:AuthStack,
      navigationOptions: ({ navigation }) => ({
        title: 'HISTORY',
       
        headerRight:(
          <TouchableOpacity onPress={() => {navigation.navigate('Alert_top')}}>
          <Image
           source={GLOBAL.Notification}
           style={styles.back_butt0n_right}     
        />
          </TouchableOpacity>)
        })
    },
   Alert_top:{
            screen:Alert_top,
            navigationOptions: ({ navigation }) => ({
              title: 'ALERTS',
              headerLeft:null,
              headerRight:(
              <Image
              source={GLOBAL.Notification_yellow}
              style={styles.back_butt0n_right}     
              />)
            })
          },      
  },  
  {
    initialRouteName:"AuthStack",
    // headerMode: "none",
    navigationOptions: {
      headerTitleStyle:GLOBAL.Header
        },
  
  });