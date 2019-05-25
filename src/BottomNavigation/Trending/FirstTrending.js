import React, {Component} from 'react';
import {
      StyleSheet,
      Text,
      View,
      FlatList,
      Image,
      
  } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign';
const audio = <AntDesign size={20} name="sound" color="#000" />
const share = <Entypo size={20} name="share" color="#000" />

import agricultureProblem from '../../json/Agriculture/technology';




export default class TrendingFirst extends Component {
  
 constructor(props){
   super(props)
 }

 

  _renderItem({item}){
    return(
      <View style={{flex:1,padding:10,backgroundColor:'#fff'}}>

       

       {/* start header part */}
        <View style={{backgroundColor:'#F6F6F6',flexDirection:'row',alignItems:'center'}}>
            <View style={{width:'90%'}}>
                <Text style={{padding:5,textAlign:'justify'}}>
                   {item.problem}
                    
                </Text>
          </View>
          <View style={{width:'10%'}}>
              <Text style={{paddingLeft:5}}>{audio}</Text>

          </View>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{width:'50%'}}>
                <Image
                    style={{width: '100%', height: 200}}
                    source={{uri: item.imageone}}
                    />
            </View>

            <View style={{width:'50%',paddingLeft:10}}>
                <View>
                    <Image
                        style={{width: '100%', height: 95}}
                        source={{uri: item.imagesecond}}
                    />
                </View>
               <View style={{paddingTop:5}}>
                <Image
                        style={{width: '100%', height: 100}}
                        source={{uri: item.imagethird}}
                    />
               </View>
                
            </View>
        </View>
        {/* close middle part */}



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