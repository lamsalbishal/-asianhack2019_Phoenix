import React, {Component} from 'react';
import {
      StyleSheet,
      Text,
      View,
      FlatList,
      ActivityIndicator,
      Image,
      
  } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign';
const audio = <AntDesign size={20} name="sound" color="#000" />
const share = <Entypo size={20} name="share" color="#000" />

import agricultureProblem from '../../json/Agriculture/research';




export default class Research extends Component {
  
 constructor(props){
   super(props)
 }

 

  _renderItem({item,index}){
    return(
      <View style={{flex:1,padding:10,backgroundColor:'#fff'}}>

        {/* header part  */}
        <View style={{flexDirection:'row',backgroundColor:'#F6F6F6',padding:5,borderTopWidth:1,borderTopColor:'gray'}}>
          <View >
            <Image source={require('../../images/man.png')}  style={{width:50,height:50,borderRadius:50,borderWidth:1,borderColor:'gray'}}/>
          </View>
          <View style={{paddingLeft:10}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>
              {item.fullname}
            </Text>
            <Text style={{fontSize:13}}>
             {item.date}
            </Text>
          </View>
        </View>
        {/* close header part */}

       {/* start header part */}
        <View>
          <Text style={{padding:5}}>
            {item.problem}
          </Text>
        </View>
        <View>
          <Image
            style={{width: '100%', height: 200}}
            source={{uri: item.image}}
          />
        </View>
        {/* close middle part */}

        {/* start header part  */}
        <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:10,paddingBottom:10,backgroundColor:'#F6F6F6'}}>
          <View>
            <Text style={{textAlign:'center'}}>Comment</Text>
          </View>
          <View>
            <Text style={{textAlign:'center'}}>{audio}</Text>
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
    marginBottom:10

  },

 
 
});