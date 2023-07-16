import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Alert,
} from 'react-native';

import {SplashScreen} from './screens/SplashScreen';
// import Splash from './screens/Splash';
import Features from './screens/Features';
import UserReg from './screens/UserReg';
import UserLogin from './screens/UserLogin';
import PhoneNum from './screens/PhoneNum';
import Otp from './screens/Otp';
import MainScreen from './screens/MainScreen';
import ConfirmPickup from './screens/ConfirmPickup';
import SearchLocDropoff from './screens/SearchLocDropoff';
import SearchLocPickup from './screens/SearchLocPickup';
import SelectRoute from './screens/SelectRoute';
import ConfirmRide from './screens/ConfirmRide';
import Waiting from './screens/Waiting';
import InRide from './screens/InRide';
import HelpScreen from './screens/HelpScreen';
import {API_KEY} from './constants';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  const [locationPermission, setLocationPermission] = React.useState(false);

  const checkPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app requires access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }

        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setLocationPermission('granted');
        } else {
          setLocationPermission('denied');
        }     
      } catch (error) {
          Alert.alert(error);
      }
    };

  React.useEffect(() => {
    checkPermission();
  }, []);

  return (
      <NavigationContainer>
        {locationPermission ? (
          console.log('location permission granted')
        ) : (
          console.log('no location permission')
        )
        }
        <Stack.Navigator initialRouteName="Features" screenOptions={{headerShown: false}}>
          <Stack.Screen 
            name="Features" 
            component={Features} 
          />
          <Stack.Screen 
            name="UserLogin" 
            component={UserLogin} 
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
            initialParams={{ pickupLoc: {latitude: 28.63849, longitude:  77.21551,}, pLocDesc: "Current Location" }}
          />
          <Stack.Screen 
            name="ConfirmPickup" 
            component={ConfirmPickup}
          />
          <Stack.Screen 
            name="SearchLocDropoff" 
            component={SearchLocDropoff} 
            initialParams={{pickupLoc: {latitude: 28.63849, longitude:  77.21551,}, pLocDesc: "Current Location" }}
          />
          <Stack.Screen 
            name="SearchLocPickup" 
            component={SearchLocPickup} 
          />
          <Stack.Screen 
            name="SelectRoute" 
            component={SelectRoute} 
            intialParams={{ pickupLoc: {latitude: 28.63849, longitude:  77.21551,} , dropoffLoc: {latitude: 28.63849, longitude:  77.21551,}, pLocDesc: "Current Location", dLocDesc:"Search Dropoff",}}
          />
          <Stack.Screen 
            name="ConfirmRide" 
            component={ConfirmRide} 
            intialParams={{ pickupLoc: {latitude: 28.63849, longitude:  77.21551,} , dropoffLoc: {latitude: 28.63849, longitude:  77.21551,}, pLocDesc: "Current Location", dLocDesc:"Search Dropoff",}}
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
