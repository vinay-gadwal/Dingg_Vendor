import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,Text
} from 'react-native'
import styles from './Style'
export default class StarReview extends Component {
  constructor(props) {
    super(props)
    // 'value' and 'rating' are deprecated and have become 'display' and 'default'
    this.displayValue = props.display || props.value
    this.defaultRating = props.default || props.rating
    this.state = {
      rating: this.defaultRating
    }
    this.isReactElement = React.isValidElement
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
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
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
      <View style={{flex:1}}>
          {/* <View style={{backgroundColor:"white",height:"10%",width:"100%",marginBottom:"4%",flexDirection:"row"}}>
          <TouchableOpacity onPress={() => {this._getSubmitAction;this.props.navigation.navigate('AuthStack')}}>
                    <Image
                                source={require('../Image/icon/back.png')}
                                style={{ marginTop:"20%",
                                width: "80%",
                                height: "80%",
                                alignItems:"flex-start",marginLeft:"15%"}}
                    />
                    </TouchableOpacity>
               <Text style={{justifyContent:"center",fontSize:18,color:"black",paddingHorizontal:"20%",paddingVertical:"5%"}}>RATE US</Text>
          </View> */}
          <View style={{marginTop:"20%"}}>
                {view}
          </View>
      </View>
    )
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
  starSize: 30,
  update: () => {},
  backingColor: 'white',
  opacity: false,
  half: false,
  spacing: 0
}