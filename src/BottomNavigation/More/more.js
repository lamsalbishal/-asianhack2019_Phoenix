import React, {Component} from 'react';
import {
      StyleSheet,
      Text,
      View,
      TouchableOpacity,
      Image
  } from 'react-native';



export default class More extends Component {
  

  onAdvertisiment() {
    this.props.navigation.navigate('Advertisiment')
  }

  onVlog(){
    this.props.navigation.navigate('Vlog')
  }

  tranning =() => {
    this.props.navigation.navigate('Tranning')
  }


  aboutUs = () => {
    this.props.navigation.navigate('AboutUs')
  }
  
  contactUS = () => {
    this.props.navigation.navigate('ContactUS')
  }

  // addProblem = () => {
  //   this.props.navigation.navigate('AddProblem')
  // }

  render() {
   

        return (
          <View style={styles.container}>
             
             <View style={{flexDirection:'row',alignItems:'center',borderBottomColor:'gray',borderBottomWidth:1,paddingBottom:30}}>
               <Image source = {require('../../images/man.png')} style={{width:90,height:90,borderRadius:45,borderWidth:1,borderColor:'gray'}} />
               <View style={{paddingLeft:10}}>
                 <Text style={{fontSize:16,fontWeight:'bold',color:'#000'}}>Bishal Lamsal</Text>
                 <Text style={{paddingTop:3,paddingLeft:3}}>987654321</Text>
                 <Text style={{paddingTop:3,paddingLeft:3}}>bishal@gmail.com</Text>
               </View>

             </View>
          
            {/* list of gallery of different palce           */}
            <TouchableOpacity onPress={() => this.tranning()}>
              <View style={{paddingTop:25,paddingLeft:5}}>
                  <Text style={{fontSize:16,color:'#000'}}>Tranning</Text>
              </View>
            </TouchableOpacity>
          
            <TouchableOpacity onPress={() => this.onVlog()}>
              <View  style={{paddingTop:25,paddingLeft:5}}>
                  <Text style={{fontSize:16,color:'#000'}}>Vlogs</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.onAdvertisiment() }>
              <View  style={{paddingTop:25,paddingLeft:5}}>
                  <Text style={{fontSize:16,color:'#000'}}>ADs</Text>
              </View>
            </TouchableOpacity>
           
           <View style={{borderBottomColor:'gray', borderBottomWidth:1,paddingTop:30}}/>
    
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddProblem',{title:'Add Problem'}) }>
                <View  style={{paddingTop:25,paddingLeft:5}}>
                    <Text style={{fontSize:16,color:'#000'}}>Add Problem</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddProblem',{title:'Add Research'}) }>
                <View  style={{paddingTop:25,paddingLeft:5}}>
                    <Text style={{fontSize:16,color:'#000'}}>Add Research</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddProblem',{title:'Add Advertisiment'}) }>
                <View  style={{paddingTop:25,paddingLeft:5}}>
                    <Text style={{fontSize:16,color:'#000'}}>Add Advertisiment</Text>
                </View>
            </TouchableOpacity>
            

            <View style={{borderBottomColor:'gray', borderBottomWidth:1,paddingTop:30}}/>
           
            <TouchableOpacity onPress={() => this.contactUS()}>
              <View style={{paddingTop:25,paddingLeft:5}}>
                  <Text style={{fontSize:16,color:'#000'}}>Contact Us</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.aboutUs()}>
              <View style={{paddingTop:25,paddingLeft:5}}>
                  <Text style={{fontSize:16,color:'#000'}}>About Us</Text>
              </View>
            </TouchableOpacity>
            
          
          </View>
      )

    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding:10
  },

 
 
});