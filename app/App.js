import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
import navigationRef from "./navigation/rootNavigation";

import OfflineNotice from "./components/OfflineNotice";

import AuthContext from "./auth/context";
import authStorage from "./auth/storage";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();

    if (user) setUser(user);
    setIsReady(true);
  }

  useEffect(() => {
    restoreUser();
  }, [])

  if (isReady) {
    SplashScreen.hideAsync();
  } else {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator/> : <AuthNavigator /> }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
