import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../../config/color'

function ListItemDeleteAction({ onPress }) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            color={colors.white}
            name='trash-can'
            size={35}
          />
        </View>
      </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    backgroundColor: colors.danger
  }
})

export default ListItemDeleteAction;
