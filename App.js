import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Index from './src/BottomNavigation/index';
import BottomNavigation from './src/BottomNavigation/bottom_navigation';
import Advertisiment from './src/BottomNavigation/More/adversiment';
import Vlog from './src/BottomNavigation/More/Vlog';
import Tranning from './src/BottomNavigation/More/Tranning';
import AboutUs from './src/BottomNavigation/More/about';
import ContactUS from './src/BottomNavigation/More/contact';
import AddProblem from './src/BottomNavigation/Add/addproblem';
import Comment from './src/BottomNavigation/Comment/comment';


import EvilIcons from 'react-native-vector-icons/EvilIcons';
const search = <EvilIcons size={30} name="search" color="#000" />


const MainNavigator = createStackNavigator({
  
  Index: {screen:Index},
  BottomNavigation : {screen:BottomNavigation,
    navigationOptions: ({navigation}) => ({
      headerLeft:(
        <View style={{marginLeft:15}}>
          <Image source={require('./src/images/logo.png')} style={{width:50,height:30}} />
        </View>
      ),
      headerRight: (
        <View style={{marginRight:10,flexDirection:'row',alignItems:'center'}}>
            <Text>{search}</Text>
            <View style={{marginLeft:20}}>
            <Image source={require('./src/images/man.png')}  style={{width:24,height:24,borderRadius:17,borderWidth:1,borderColor:'#000'}}/>
            </View>
        </View>
      
      ),
    }),
  },
  Advertisiment : {screen:Advertisiment},
  Vlog : {screen:Vlog},
  Tranning :{screen:Tranning},
  AboutUs:{screen:AboutUs},
  ContactUS:{screen:ContactUS},
  AddProblem:{screen:AddProblem},
  Comment:{screen:Comment}



 
},{
  initialRouteName: 'BottomNavigation',
});

const App = createAppContainer(MainNavigator);

export default App;



