import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import routes from './routes';
import useNotifications from '../hooks/useNotifications';

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications();

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        component={FeedNavigator}
        name={'Feed'}
        options={{
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons
              color={color}
              name='home'
              size={size}
            />
        }}
      />
      <Tab.Screen
        component={ListingEditScreen}
        name={'ListingEdit'}
        options={({ navigation }) => ({
          tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />,
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons
              color={color}
              name='plus-circle'
              size={size}
            />
        })}
      />
      <Tab.Screen
        component={AccountNavigator}
        name={'Account'}
        options={{
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons
              color={color}
              name='account'
              size={size}
            />
        }}
      />
    </Tab.Navigator>
  )
}

export default AppNavigator;
