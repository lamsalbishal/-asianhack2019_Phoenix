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

import agricultureProblem from '../../json/Agriculture/problem';




export default class Export extends Component {
  
 constructor(props){
   super(props)
 }

 

  _renderItem(item){
    return(
      <View style={{flex:1,padding:10,backgroundColor:'#fff'}}>

        {/* header part  */}
        <View style={{flexDirection:'row',backgroundColor:'#F6F6F6',padding:5,borderTopWidth:1,borderTopColor:'gray'}}>
          <View >
            <Image source={require('../../images/man.png')}  style={{width:50,height:50,borderRadius:50,borderWidth:1,borderColor:'gray'}}/>
          </View>
          <View style={{paddingLeft:10}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>
              Full name
            </Text>
            <Text style={{fontSize:13}}>
              8:00 PM, May, 04 2019
            </Text>
          </View>
        </View>
        {/* close header part */}

       {/* start middle part */}
        <View>
          <Text style={{padding:5}}>
            Agriculture is the art and science of cultivating the soil,
            growing crops and raising livestock. It includes the preparation 
            plant and animal products for people to use and their distribution to markets.
          </Text>
        </View>
        <View>
          <Image
            style={{width: '100%', height: 200}}
            source={{uri: 'https://www.victoria.ac.nz/__data/assets/image/0005/382757/agriculture-picture.jpg'}}
          />
        </View>
        {/* close middle part */}

        {/* start header part  */}
        <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:10,paddingBottom:10,backgroundColor:'#F6F6F6'}}>
          <View>
            <Text style={{textAlign:'center'}}>Reply</Text>
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
            {/* <View style={{flexDirection:'column',justifyContent:''}}> */}
                <View >
                <FlatList             
                        data={agricultureProblem}
                        renderItem={this._renderItem}
                    />
                </View>
                <View style={{justifyContent:'flex-end'}}>
                    Comment
                </View>
           {/* </View> */}
          
          
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