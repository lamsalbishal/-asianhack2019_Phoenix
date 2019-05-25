import React, {Component} from 'react';
import {
      StyleSheet,
      Text,
      View,
      FlatList,
      ActivityIndicator,
      Image,
      ImageBackground
      
  } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
const play = <FontAwesome5 size={30} name="play" color="#000" />
const download = <AntDesign size={20} name="arrowdown" color="#000"/>
const share = <Entypo size={20} name="share" color="#000" />


import agricultureProblem from '../../json/Agriculture/videotranning';




export default class TrendingSecond extends Component {
  
 constructor(props){
   super(props)
 }

 

  _renderItem({item,index}){
    return(
      <View style={{flex:1,padding:10,backgroundColor:'#fff'}}>

        <View>
            <ImageBackground source={{uri: item.image}} style={{height:200,width:'100%'}}>
                  <View style={{justifyContent:'center',alignItems:'center',height:200,width:'100%'}}>
                      <Text style={{textAlign:'center'}} >{play}</Text>
                  </View>
            </ImageBackground>

        </View>

       {/* start middle part */}
        <View>
          <Text style={{padding:5,fontSize:16,fontWeight:'bold'}}>
           {item.problem}
          </Text>
        </View>
        
        {/* close middle part */}

        {/* start header part  */}
        <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:10,paddingBottom:10,backgroundColor:'#F6F6F6'}}>
          <View>
            <Text style={{textAlign:'center'}}>Comment</Text>
          </View>
          <View>
            <Text style={{textAlign:'center'}}>{ download }</Text>
          </View>
          <View>
            <Text style={{textAlign:'center'}}>{share}</Text>
          </View>
        </View>
        {/* close footer part */}

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
    marginBottom:100

  },

 
 
});