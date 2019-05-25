import React, {Component} from 'react';
import {
        StyleSheet, 
        View,
        TextInput,
        TouchableOpacity,
        Text,
        ActivityIndicator,
        ToastAndroid,
        Alert
        } from 'react-native';


export default class AddProblem extends Component{

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('title')
        };
      };
    
    render() {
        return (
        
            <View style={styles.container}>
                <View style={{padding:10,backgroundColor:'#F6F6F6'}}>
                    <View style={{justifyContent:'center',paddingLeft:10}}>
                        <View style={{ height:70,width:'80%',borderWidth:1,borderRadius:8,borderColor:'#000',backgroundColor:'#FFF',padding:10}}>
                            <Text>message</Text> 
                        </View>
                    </View>

                    <View style={{paddingTop:10,flexDirection:'row'}}>
                        <View style={{padding:10}}>
                                <Text style={{backgroundColor:'gray',paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,borderRadius:8,color:'#fff'}}>Video</Text>
                        </View>
                        <View style={{padding:10,}}>
                            <Text style={{backgroundColor:'gray',paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,borderRadius:8,color:'#fff'}}>Photo</Text>
                        </View>
   
                    </View>

                    <View style={{padding:10,}}>       
                        <Text style={{backgroundColor:'blue',width:'30%',textAlign:'center',padding:10,color:'#fff',borderRadius:8}}>Post</Text>
                    </View>
                
                </View>
              
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
       
        padding:10,
        backgroundColor:'#fff'
    },

   

});