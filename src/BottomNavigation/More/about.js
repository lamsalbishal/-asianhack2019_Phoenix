import React, {Component} from 'react';
import {
      StyleSheet,
      Text,
      View,
  
      
  } from 'react-native';





export default class AboutUs extends Component {
  
 constructor(props){
   super(props)
 }

 static navigationOptions = ({ navigation }) => {
    return {
      title: 'About us ',
    };
  };
 

 
  render() {

        return (
          <View style={styles.container}>
          
            <Text style={{fontSize:14,color:'#000',}}>
                Version 4.0.0 now requires Android target SDK 26+ and Gradle 3 plugin in order to support 
                ExoPlayer 2.9.0. Google is dropping support for apps using target SDKs older than 26 as of
                October 2018 and Gradle 2 as of January 2019. React Native 0.57 defaults to Gradle 3 & SDK 27.
            </Text>
            <Text style={{fontSize:14,color:'#000',paddingTop:5}}>
              Version 4.0.0 now requires Android target SDK 26+ and Gradle 3 plugin in order to support 
              ExoPlayer 2.9.0. Google is dropping support for apps using target SDKs older than 26 as of
              October 2018 and Gradle 2 as of January 2019. React Native 0.57 defaults to Gradle 3 & SDK 27
            </Text>
            <Text style={{fontSize:14,color:'#000',paddingTop:5}}>  
              Version 4.0.0 now requires Android target SDK 26+ and Gradle 3 plugin in order to support 
              ExoPlayer 2.9.0. Google is dropping support for apps using target SDKs older than 26 as of
              October 2018 and Gradle 2 as of January 2019. React Native 0.57 defaults to Gradle 3 & SDK 27
              Version 4.0.0 now requires Android target SDK 26+ and Gradle 3 plugin in order to support 
              ExoPlayer 2.9.0. Google is dropping support for apps using target SDKs older than 26 as of
              October 2018 and Gradle 2 as of January 2019. React Native 0.57 defaults to Gradle 3 & SDK 27
            </Text>
          
          
          </View>
      )

    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding:20
    

  },

 
 
});