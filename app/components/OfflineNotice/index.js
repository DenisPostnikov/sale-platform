import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { useNetInfo} from "@react-native-community/netinfo";

import colors from '../../config/color';

function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    )
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Constants.statusBarHeight,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white,
  }
})

export default OfflineNotice;
