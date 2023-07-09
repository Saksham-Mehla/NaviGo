import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SplashScreen} from './screens/SplashScreen';
import Features from './screens/Features';
import UserReg from './screens/UserReg';
import PhoneNum from './screens/PhoneNum';
import Otp from './screens/Otp';
import MainScreen from './screens/MainScreen';
import ConfirmPickup from './screens/ConfirmPickup';
import SearchLoc from './screens/SearchLoc';
import SelectRoute from './screens/SelectRoute';
import ConfirmRide from './screens/ConfirmRide';
import Waiting from './screens/Waiting';
import InRide from './screens/InRide';
import HelpScreen from './screens/HelpScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
      <NavigationContainer>

        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen 
            name="Features" 
            component={Features} 
          />
          <Stack.Screen 
            name="UserReg" 
            component={UserReg} 
          />
          <Stack.Screen 
            name="PhoneNum" 
            component={PhoneNum} 
          />
          <Stack.Screen 
            name="Otp" 
            component={Otp} 
          />
          <Stack.Screen 
            name="MainScreen" 
            component={MainScreen} 
          />
          <Stack.Screen 
            name="ConfirmPickup" 
            component={ConfirmPickup} 
          />
          <Stack.Screen 
            name="SearchLoc" 
            component={SearchLoc} 
          />
          <Stack.Screen 
            name="SelectRoute" 
            component={SelectRoute} 
          />
          <Stack.Screen 
            name="ConfirmRide" 
            component={ConfirmRide} 
          />
          <Stack.Screen 
            name="Waiting" 
            component={Waiting} 
          />
          <Stack.Screen 
            name="InRide" 
            component={InRide} 
          />
          <Stack.Screen 
            name="HelpScreen" 
            component={HelpScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    // <MainScreen />
  );
}

export default App;
