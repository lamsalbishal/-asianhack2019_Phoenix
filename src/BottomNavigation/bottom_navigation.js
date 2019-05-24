import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeView from '../BottomNavigation/Home/home';
import TrendingView from '../BottomNavigation/Trending/trending';
import ResearchView from '../BottomNavigation/Research/research';
import ChatView from '../BottomNavigation/Chat/chat';
import MoreView from '../BottomNavigation/More/more';


import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';





class HomeScreen extends React.Component {
  render() {
    return (
       <HomeView/>
    );
  }
}

class TrendingScreen extends React.Component {
  render() {
    return (
      <TrendingView/>
    );
  }
}

class ResearchScreen extends React.Component {
  render() {
    return (
      <ResearchView/>
    );
  }
}

class ChatScreen extends React.Component {
    render() {
      return (
        <ChatView/>
      );
    }
  }

  class MoreScreen extends React.Component {
    render() {
      return (
        <MoreView/>
      );
    }
  }

const TabNavigator = createBottomTabNavigator({
  Home:
  {screen: HomeScreen,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        
        <Entypo name="home" size={20} color={tintColor}/>
      )
  })},
 
  Trending:{screen: TrendingScreen,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Icon name="trending-up" size={20} color={tintColor}/>
      )
  })
  },
  Research:{
    screen: ResearchScreen,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <FontAwesome name="cc-discover" size={20} color={tintColor}/>
      )
  })
  },
  Chat:{
    screen: ChatScreen,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Entypo name="chat" size={20} color={tintColor}/>
      )
  })
  },
  More:{
    screen: MoreScreen,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <Entypo name="menu" size={20} color={tintColor}/>
      )
  })
  }
});

export default createAppContainer(TabNavigator);