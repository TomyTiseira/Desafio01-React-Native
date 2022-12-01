import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.categoryItem}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => onSelected(item)}
      >
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 3,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 20,
    paddingLeft: 25,
  },
  image: {
    height: "80%",
    width: "60%",
  },
});
