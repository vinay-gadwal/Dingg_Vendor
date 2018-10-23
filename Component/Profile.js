import React,{Component} from 'react'
import {View,Text} from 'react-native'

export default class DashBoard extends Component{
    constructor(){
        super()
    }
    render(){
        return(
                <View style={{backgroundColor:"white",height:"12%",width:"100%"}}>
        <Text style={{justifyContent:"center",fontSize:18,color:"black",paddingHorizontal:"35%",paddingVertical:"5%"}}>PROFILE</Text>
            
            </View>
        )
    }
}