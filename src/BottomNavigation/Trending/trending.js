import React, {Component} from 'react';
import {
      StyleSheet,
      Text,
      View,
      FlatList,
      ActivityIndicator,
      ScrollView,
      Dimensions
  } from 'react-native';
import FirstTrending from './FirstTrending';
import SecondTrending from './SecondTrending';

const {width,height} = Dimensions.get('window');

export default class Trending extends Component {
  
  render() {

        return (
         <ScrollView
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         >
             <View style={{width:width,height:height}}>
                <FirstTrending/>
             </View>

             <View style={{width:width,height:height}}>
                  <SecondTrending/>
             </View>

         </ScrollView>
      )

    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop:0,
  },

 
 
});