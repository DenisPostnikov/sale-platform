import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator
} from '../components/list';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg')
  }
]

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // Delete the message from messages
    setMessages(messages.filter(m => m.id !== message.id));
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        ItemSeparatorComponent={ListItemSeparator}
        keyExtractor={message => message.id.toString()}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/mosh.jpg')
            }
          ])
        }}
        renderItem={({ item }) =>
          <ListItem
            image={item.image}
            onPress={() => console.log(999, 'Click', item)}
            subTitle={item.description}
            title={item.title}
            renderRightActions={() =>
              <ListItemDeleteAction onPress={() => handleDelete(item) }/>
            }
          />
        }
        refreshing={refreshing}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
})

export default MessagesScreen;
