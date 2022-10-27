import React from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";

import colors from '../config/color'
import { MaterialCommunityIcons } from "@expo/vector-icons";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          color={colors.white}
          name={'plus-circle'}
          size={40}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    bottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
  }
})

export default NewListingButton;
