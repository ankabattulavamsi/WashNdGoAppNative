/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import Home from './WashAndGoScreens/Home';
import SplashScreen from './WashAndGoScreens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupForm from './WashAndGoScreens/SignupForm';
import Home from './WashAndGoScreens/Home';
import SignInForm from './WashAndGoScreens/SignInForm';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={SplashScreen} />

        <Stack.Screen name="Signup" component={SignupForm} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignInForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
