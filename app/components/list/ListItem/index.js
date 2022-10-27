import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../../AppText'

import colors from '../../../config/color'

function ListItem({ title, subTitle, image, iconComponent, style, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, style]}
      >
        {iconComponent}
        {image &&
          <Image
            source={image}
            style={styles.image}
          />
        }
        <View style={styles.text}>
          <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
          {subTitle &&
            <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
          }
        </View>
        <MaterialCommunityIcons color={colors.medium} name={'chevron-right'} size={25} />
      </TouchableOpacity>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500',
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  }
})

export default ListItem;
