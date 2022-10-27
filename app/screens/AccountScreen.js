import React from 'react';
import { View, StyleSheet, FlatList } from "react-native";

import Screen from '../components/Screen';
import ListItem from '../components/list/ListItem';
import Icon from "../components/Icon";
import ListItemSeparator from "../components/list/ListItemSeparator";

import colors from '../config/color';
import routes from '../navigation/routes';
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    },
    targetScreen: routes.MESSAGES
  }
]

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          ItemSeparatorComponent={ListItemSeparator}
          keyExtractor={menuItem => menuItem.title}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              iconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          }
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title='Logout'
          iconComponent={
            <Icon
              name='logout'
              backgroundColor='#ffe66d'
            />
          }
          onPress={() => logOut()}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light
  }
})

export default AccountScreen;
