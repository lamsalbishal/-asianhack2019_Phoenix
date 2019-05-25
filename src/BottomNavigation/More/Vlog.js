import React, {Component} from 'react';
import {
      StyleSheet,
      Text,
      View,
      FlatList,
      Image,
      ImageBackground
  } from 'react-native';

import agricultureProblem from '../../json/Agriculture/problem';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const play = <FontAwesome5 size={30} name="play" color="#000" />



export default class Blog extends Component {
  
 constructor(props){
   super(props)
 }


 static navigationOptions = ({ navigation }) => {
    return {
      title: 'Blog ',
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
                
                <Text style={{textAlign:'justify',fontSize:13,fontWeight:'bold'}}>
                    Agriculture is the art and science of cultivating the soil,
                    
                </Text>
               
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{width:'50%'}}>
                <ImageBackground
                    style={{width: '100%', height: 200}}
                    source={{uri: 'https://www.victoria.ac.nz/__data/assets/image/0005/382757/agriculture-picture.jpg'}}
                    >
                        <View style={{width:'100%',height:200,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{textAlign:'center'}}>{play}</Text>
                        </View>
                </ImageBackground>
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