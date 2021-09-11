import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import fb from './Screens/fb.js';
import ins from './Screens/in.js';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}
const tabNavigator = createBottomTabNavigator({
  in:{
    screen:ins
  },
  fb:{
    screen:fb
  }
});
const AppContainer = createAppContainer(tabNavigator);