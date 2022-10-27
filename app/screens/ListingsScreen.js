import React, { useEffect, useState } from 'react';
import {StyleSheet, FlatList, Platform, View} from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import Button from "../components/AppButton";
import Loader from "../components/Loader";
import AppText from "../components/AppText";

import colors from '../config/color';
import routes from '../navigation/routes';
import listingsApi from "../api/listings";
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);
  const {
    data: listings, error, isLoading,
    request: loadListings,
  } = getListingsApi;

  useEffect(() => {
    loadListings(1, 2, 3);
  },[]);

  return (
    <>
      <Loader visible={isLoading} />

      <Screen style={styles.screen}>
        {error &&
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button onPress={loadListings} title={'Retry'}/>
        </>
        }

        <FlatList
          data={listings}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({ item }) =>
            <Card
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              subTitle={`$ ${item.price}`}
              title={item.title}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          }
          showsVerticalScrollIndicator={false}
        />
      </Screen>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: Platform.OS === 'ios' ? 20 : 10,
    backgroundColor: colors.light,
  }
})

export default ListingsScreen;
