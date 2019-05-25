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
import NormalComment from './normal';
import ExportComment from './export';

const {width,height} = Dimensions.get('window');

export default class Comment extends Component {
  
  render() {

        return (
         <ScrollView
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         >
             <View style={{width:width,height:height}}>
                <NormalComment/>
             </View>

             <View style={{width:width,height:height}}>
                  <ExportComment/>
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