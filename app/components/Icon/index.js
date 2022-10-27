import React from 'react';
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/color'

function Icon({
  backgroundColor = colors.black,
  iconColor = colors.white,
  name,
  size = 40
}) {
    return (
      <View style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <MaterialCommunityIcons
          color={iconColor}
          name={name}
          size={size * 0.5}
        />
      </View>
    )
}

const styles = StyleSheet.create({
})

export default Icon;
