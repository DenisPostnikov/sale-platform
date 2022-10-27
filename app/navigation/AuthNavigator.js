import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={WelcomeScreen}
      name={'Welcome'}
      options={{ headerShown: false }}
    />
    <Stack.Screen component={LoginScreen} name={'Login'} />
    <Stack.Screen component={RegisterScreen} name={'Register'} />
  </Stack.Navigator>
)

export default AuthNavigator;
