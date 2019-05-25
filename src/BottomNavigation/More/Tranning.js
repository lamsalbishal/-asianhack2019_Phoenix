import React, {Component} from 'react';
import {
      StyleSheet,
      Text,
      View,
      FlatList,
      Image,
      ImageBackground,
      ScrollView,
      Dimensions
  } from 'react-native';



import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const play = <FontAwesome5 size={30} name="play" color="#000" />

import agricultureProblem from '../../json/Agriculture/book';



export default class Tranning extends Component {
  
 constructor(props){
   super(props)
 }

 static navigationOptions = ({ navigation }) => {
    return {
      title: 'Tranning ',
    };
  };
 

  _renderItem({item,index}){
    return(
      <View style={{flex:1,padding:10,backgroundColor:'#fff'}}>

        {/* header part  */}
         <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold',color:'#000'}}>Basic Terminology</Text>
         
        
        
           
              <View style={{flexDirection:'row',paddingTop:10}}>

            
              
                 <View style={{width:'50%'}}>
                    <ImageBackground source={{uri: item.imageone}} style={{height:200,width:'100%'}}>
                        <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                           <Text style={{alignItems:'center'}}>{play}</Text>
                        </View>
                    </ImageBackground>
                 </View>
                 
                 <View style={{paddingLeft:10,width:'50%'}}>
                    <ImageBackground source={{uri: item.imagesecond}} style={{height:200,width:'100%'}}>
                        <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                           <Text style={{alignItems:'center'}}>{play}</Text>
                        </View>
                    </ImageBackground>
                 </View>
           
                </View> 

            
        
        {/* close middle part */}

       <View style={{paddingTop:20,}}>
           <Text style={{fontSize:14,color:'#000',}}>Contain</Text>
           <Text style={{fontSize:13,paddingTop:10,textAlign:'justify'}}>
               {item.book}
           </Text>
       </View>

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
    marginBottom:5

  },

 
 
});