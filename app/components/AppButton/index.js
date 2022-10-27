import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from "react-native";

import colors from '../../config/color';

function AppButton({ title, onPress, color = 'primary' }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 15,
    borderRadius: 25,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    textTransform: 'uppercase',
  }
})

export default AppButton;
