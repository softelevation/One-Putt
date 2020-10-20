// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import SplashScreen from '../Screens/Splash/SplashScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import Games from '../Screens/Play/Games';
import About from '../Screens/About/About';
import Manual from '../Screens/Manual/Manual';
import Faq from '../Screens/Faq/Faq';
import Report from '../Screens/Report/Report';
import Player from '../Screens/Player/Player';
import Practice from '../Screens/Practice/Practice';
import QrCode from '../Screens/QrCode';
import Help from '../Screens/Help/Help';

const Stack = createStackNavigator();
const options = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={options}
        initialRouteName="Splash"
        headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="QrCode" component={QrCode} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Play" component={Games} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Manual" component={Manual} />
        <Stack.Screen name="Faq" component={Faq} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="Practice" component={Practice} />
        <Stack.Screen name="Help" component={Help} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
