import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  const animationType = Platform.OS === 'ios' ?
    TransitionPresets.ModalSlideFromBottomIOS :
    TransitionPresets.ModalTransition;

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
    }}>
      <Stack.Screen component={ListingsScreen} name={'Listings'} />
      <Stack.Screen
        component={ListingDetailsScreen}
        name={'ListingDetails'}
        options={{ ...animationType }}
      />
    </Stack.Navigator>
  )
}

export default FeedNavigator;
