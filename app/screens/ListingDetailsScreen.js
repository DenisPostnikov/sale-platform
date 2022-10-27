import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import ListItem from '../components/list/ListItem';
import ContactSellerForm from '../components/ContactSellerForm';

import colors from '../config/color';

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior={'position'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
    >
      <Image
        preview={listing.images[0].thumbnailUrl}
        style={styles.image}
        tint={'light'}
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subTitle}>${listing.price}</AppText>
        <ListItem
          image={require('../assets/mosh.jpg')}
          title='Mosh Hamedani'
          subTitle='5 Listings'
          style={{marginVertical: 40}}
        />
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.secondary
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: '500'
  }
})

export default ListingDetailsScreen;
