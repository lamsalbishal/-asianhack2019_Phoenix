import React, {Component} from 'react';
import {
      StyleSheet,
      Text,
      View,
      FlatList,
      ActivityIndicator
  } from 'react-native';



export default class ChatScreen extends Component {
  
  render() {

        return (
          <View style={styles.container}>

          
            <View >
                <Text>Hello</Text>
              
            </View>
          
          </View>
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