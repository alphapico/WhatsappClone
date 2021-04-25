import React, { useEffect, useState } from "react";
import { ChatRoom } from "../../types";
import styles from "./style";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ImageSourcePropType,
} from "react-native";
import moment from "moment";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  return (
    <View style={styles.container}>
      <View style={styles.lefContainer}>
        <Image
          source={{ uri: chatRoom.users[1].imageUri }}
          style={styles.avatar}
        />

        <View style={styles.midContainer}>
          <Text style={styles.username}>{chatRoom.users[1].name}</Text>
          <Text numberOfLines={2} style={styles.lastMessage}>
            {chatRoom.lastMessage ? `${chatRoom.lastMessage.content}` : ""}
          </Text>
        </View>
      </View>

      <Text style={styles.time}>
        {chatRoom.lastMessage &&
          moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
      </Text>
    </View>
  );
};

export default ChatListItem;
