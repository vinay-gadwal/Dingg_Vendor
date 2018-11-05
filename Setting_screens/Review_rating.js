import React, { Component } from 'react';
 import styles from '../Component/Style'
 import PropTypes from 'prop-types'
import { TouchableOpacity, ScrollView, View, Animated, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import RF from "react-native-responsive-fontsize"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ResponsiveImage from 'react-native-responsive-image'
import starts from '../Component/Star_Rating'
export default class StarReview extends Component {
 
 constructor(props) {
   super(props);
   this.state = {
                valueArray: [], disabled: false ,hair_data:"",hair_data_time:"",
                isLoading: true,MakeUp_data:"",makeup_data_time:"",
                    dataSource : [ 
                        {
                            name:"Hair cut"
                        },
                ],
       }
     this.index = 0;
     this.animatedValue = new Animated.Value(0);
     this.displayValue = props.display || props.value
     this.defaultRating = props.default || props.rating
     this.isReactElement = React.isValidElement
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
 componentDidMount(){
    this.addMore();
 }
 
      addMore = () =>
      {
          this.animatedValue.setValue(0);
  
          let newlyAddedValue = { index: this.index }
  
          this.setState({ disabled: true, valueArray: [ ...this.state.valueArray, newlyAddedValue ] }, () =>
          {
              Animated.timing(
                  this.animatedValue,
                  {
                      toValue: 1,
                      duration: 500,
                      useNativeDriver: true
                  }
              ).start(() =>
              {
                  this.index = this.index + 1;
                  this.setState({ disabled: false });
              }); 
          });              
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
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>{stars}</View>
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
          <View style={{flexDirection: 'row', justifyContent: 'center',height:"3%"}}>
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
 <ScrollView>
<View style={{  flex: 1,
      justifyContent: "space-between",
      backgroundColor: "rgb(243,242,242)",
      paddingVertical:"0%"}}>
        
    <View style={{ 
          width: wp('90%'),marginLeft:"5%",
          height: hp('30%'),
          backgroundColor:"white",
          marginVertical:hp('5%'),
          borderRadius:10,}}>
          
     <View style={{flexDirection:"row"}}>
              <FlatList          
                    data={ this.state.dataSource }
                    renderItem={({item}) => 
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>                          
                             <View style={{flexDirection:"column",marginVertical:hp("2%"),marginLeft:wp("5%")}}>
                                <View style={{flexDirection:"row"}}>
                                    <ResponsiveImage source={require('../Image/icon/calenderIcon2x.png')} initWidth="30" initHeight="30"/>
                                    <Text style={[styles.text,{marginLeft:wp("3%")}]}>{item.name}</Text>
                                 </View>
                                 <View style={{marginVertical:hp("2%")}}>
                                 <ResponsiveImage source={require('../Image/icon/calenderIcon2x.png')} initWidth="100" initHeight="100"/>
                                    <View style={{marginVertical:hp("3%")}}>
                                       {view}
                                    </View>
                                 </View>
                            </View>           
                              <View style={{flexDirection:"column",marginVertical:hp("2%"),alignItems:"flex-end",marginRight:wp("3%")}}>
                                 <Text style={[styles.text,{fontSize:RF(4)}]}>{item.name}</Text>
                                 <Text style={[styles.text,{marginLeft:wp("3%")}]}>{item.name}</Text>
                            </View>           
                        </View>   }                       
                    />
           </View>
  </View>
 </View>
</ScrollView>
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
    starSize: 20,
    update: () => {},
    backingColor: 'white',
    opacity: false,
    half: false,
    spacing: 0,
    marginVertical:"10%"
  }