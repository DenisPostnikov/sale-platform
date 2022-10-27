import React from 'react';
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/color';
import defaultStyles from '../../config/styles';

function AppTextInput({ icon, width = '100%', ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <MaterialCommunityIcons
        color={colors.medium}
        name={icon}
        size={20}
        style={styles.icon}
      />
      <TextInput
        placeholderTextColor={colors.medium}
        style={[defaultStyles.text, styles.text]}
        {...otherProps}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 15,
    backgroundColor: colors.light,
    borderRadius: 25,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  }
})

export default AppTextInput;
