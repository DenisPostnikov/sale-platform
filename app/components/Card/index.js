import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from 'react-native-expo-image-cache';

import AppText from "../AppText";
import colors from '../../config/color'

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          preview={thumbnailUrl}
          style={styles.image}
          tint={'light'}
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: 'hidden'
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200
  },
  subTitle: {
    fontWeight: 'bold',
    color: colors.secondary
  },
  title: {
    marginBottom: 7,
  }
})

export default Card;
