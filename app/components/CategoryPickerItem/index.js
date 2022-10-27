import React from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";

import Icon from '../Icon'
import AppText from "../AppText";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '33%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  label: {
    marginTop: 5,
    textAlign: 'center'
  }
})

export default CategoryPickerItem;
