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
import HomeFirstPage from './HomeFirst';
import HomeSecondPage from './HomeSecond';

const {width,height} = Dimensions.get('window');

export default class Home extends Component {
  
  render() {

        return (
         <ScrollView
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         >
             <View style={{width:width,height:height}}>
                <HomeFirstPage/>
             </View>

             <View style={{width:width,height:height}}>
                  <HomeSecondPage/>
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