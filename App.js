import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Index from './src/BottomNavigation/index';
import BottomNavigation from './src/BottomNavigation/bottom_navigation';


const MainNavigator = createStackNavigator({
  
  Index: {screen:Index},
  BottomNavigation : {screen:BottomNavigation}


 
},{
  initialRouteName: 'BottomNavigation',
});

const App = createAppContainer(MainNavigator);

export default App;



