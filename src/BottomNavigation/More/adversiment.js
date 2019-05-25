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

import agricultureProblem from '../../json/Agriculture/problem';




export default class Advertisiment extends Component {
  
 constructor(props){
   super(props)
 }

 
 static navigationOptions = ({ navigation }) => {
  return {
    title: 'Advertisement',
  };
};

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

       {/* start header part */}
        <View >
          <View style={{padding:5}} >
                  
                  <Text style={{textAlign:'justify',fontSize:13}}>
                      Agriculture is the art and science of cultivating the soil,
                      growing crops and raising livestock. It includes the preparation 
                      plant and animal products for people to use and their distribution to markets ... 
                  </Text>
                  <Text style={{padding:5,fontWeight:'bold',fontSize:12}}>Rs. 4000</Text>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{width:'50%'}}>
                <Image
                    style={{width: '100%', height: 200}}
                    source={{uri: 'https://www.victoria.ac.nz/__data/assets/image/0005/382757/agriculture-picture.jpg'}}
                    />
            </View>

            <View style={{width:'50%',paddingLeft:10}}>
                <View>
                    <Image
                        style={{width: '100%', height: 95}}
                        source={{uri: 'https://www.victoria.ac.nz/__data/assets/image/0005/382757/agriculture-picture.jpg'}}
                    />
                </View>
               <View style={{paddingTop:5}}>
                <Image
                        style={{width: '100%', height: 100}}
                        source={{uri: 'https://www.victoria.ac.nz/__data/assets/image/0005/382757/agriculture-picture.jpg'}}
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
    marginBottom:10

  },

 
 
});