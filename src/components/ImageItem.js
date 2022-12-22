import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import colors from "../constants/colors";

const ImageItem = ({ item, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(item)} style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImageItem;

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.primary,
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: colors.bg,
    fontSize: 18,
    marginBottom: 6,
  },
  address: {
    color: "#777",
    fontSize: 16,
  },
});
