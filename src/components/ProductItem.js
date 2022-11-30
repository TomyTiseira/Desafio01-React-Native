import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/colors";

const ProductItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.productItem}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.details}>Precio: ${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productItem: {
    padding: 20,
    margin: 10,
    borderRadius: 30,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 3,
  },
  name: {
    fontSize: 20,
    fontFamily: "Roboto",
  },
  details: {
    fontSize: 18,
  },
});
