// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/Splash/SplashScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import Games from '../Screens/Play/Games';
import About from '../Screens/About/About';
import Manual from '../Screens/Manual/Manual';
import Faq from '../Screens/Faq/Faq';
import Report from '../Screens/Report/Report';
import Player from '../Screens/Player/Player';
import Practice from '../Screens/Practice/Practice';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Play" component={Games} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Manual" component={Manual} />
        <Stack.Screen name="Faq" component={Faq} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="Practice" component={Practice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
