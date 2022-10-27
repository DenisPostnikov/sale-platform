import React from 'react';
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/color';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          color='white'
          name='close'
          size={30}
        />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          color='white'
          name='trash-can-outline'
          size={35}
        />
      </View>
      <Image
          resizeMode='contain'
          style={styles.image}
          source={require('../assets/chair.jpg')}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  }
})

export default ViewImageScreen;
