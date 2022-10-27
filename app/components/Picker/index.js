import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/color';

import AppText from "../AppText";
import PickerItem from "../PickerItem";
import Screen from "../Screen";

function AppPicker({
  icon,
  items,
  onSelectItem,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          <MaterialCommunityIcons
            color={colors.medium}
            name={icon}
            size={20}
            style={styles.icon}
          />

          {
            selectedItem ?
              <AppText style={styles.text}>{selectedItem.label}</AppText>
            :
              <AppText style={styles.placeholder}>{placeholder}</AppText>
          }

          <MaterialCommunityIcons
            color={colors.medium}
            name={'chevron-down'}
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        animationType={'slide'}
        visible={modalVisible}
      >
        <Screen>
          <Button
            onPress={() => setModalVisible(false)}
            title={'Close'}
          />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) =>
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
              }
          />
        </Screen>
      </Modal>
    </>
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
  placeholder: {
    flex: 1,
    color: colors.medium
  },
  text: {
    flex: 1,
  }
})

export default AppPicker;
