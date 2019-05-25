import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeView from '../BottomNavigation/Home/home';
import TrendingView from '../BottomNavigation/Trending/trending';
import ResearchView from '../BottomNavigation/Research/research';
import EventView from '../BottomNavigation/Event/event';
import MoreView from '../BottomNavigation/More/more';


import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';





class HomeScreen extends React.Component {
  render() {
    return (
       <HomeView navigation= {this.props.navigation}/>
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

class EventScreen extends React.Component {
    render() {
      return (
        <EventView/>
      );
    }
  }

  class MoreScreen extends React.Component {
    render() {
      return (
        <MoreView navigation= {this.props.navigation}/>
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
  Events:{
    screen: EventScreen,
    navigationOptions: () => ({
      tabBarIcon: ({tintColor}) => (
        <MaterialIcons name="event" size={20} color={tintColor}/>
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