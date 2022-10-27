import React from 'react';
import { View, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';

import colors from '../../config/color';

function Loader({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require('../../assets/animations/loader.json')}
        style={styles.icon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 200,
    height: 200,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: colors.white,
    opacity: 0.8
  }
})

export default Loader;
