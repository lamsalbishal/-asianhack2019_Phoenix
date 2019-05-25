import React, {Component} from 'react';
import {
      StyleSheet,
      Text,
      View,
      FlatList,
      ActivityIndicator,
      Image,
      
  } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const daterange = <MaterialIcons size={20} name="date-range" color="#000" />
const clock = <AntDesign size={20} name="clockcircleo" color="#000" />
const ticket = <Entypo size={20} name="ticket" color="#000" />
const location = <Entypo size={20} name="location-pin" color="#00" />


import agricultureProblem from '../../json/Agriculture/events';




export default class Event extends Component {
  
 constructor(props){
   super(props)
 }

 

  _renderItem({item,index}){
    return(
      <View style={{flex:1,padding:10,backgroundColor:'#fff'}}>

        {/* header part  */}
          <Image
             key={index}
              style={{width: '100%', height: 200}}
              source={{uri: item.image}}
          />
          <View style={{backgroundColor:'#F6F6F6',paddingBottom:10}}>
            <Text style={{fontSize:16,fontFamily:'bold',color:'#000000',paddingTop:5}} key={index}>{item.event}</Text>

            <View style={{flexDirection:'row',paddingTop:5,paddingLeft:5}}>
                <Text style={{paddingTop:2,}}>{location}</Text>
                <Text style={{paddingLeft:5}}> : Kathmandu</Text>
            </View>

            <View style={{flexDirection:'row',paddingTop:5,paddingLeft:5}}>
                <Text style={{paddingTop:2,}}>{daterange}</Text>
                <Text style={{paddingLeft:5}}> : May, 10 2016</Text>
            </View>
            <View style={{flexDirection:'row',paddingTop:5,paddingLeft:5}}>
                <Text style={{paddingTop:2,}}>{clock}</Text>
                <Text style={{paddingLeft:5}}> : 10:00 pm</Text>
            </View>
            <View style={{flexDirection:'row',paddingTop:5,paddingLeft:5}}>
                <Text style={{paddingTop:2,}}>{ticket}</Text>
                <Text style={{paddingLeft:5}}> : Free</Text>
            </View>

               

          </View>
       
        {/* close header part */}


       

      </View>
    )
  }
  render() {

        return (
          <View style={styles.container}>
          
             <FlatList             
                data={agricultureProblem}
                renderItem={this._renderItem}
              />
          
          
          
          </View>
      )

    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop:10,
    marginBottom:10

  },

 
 
});