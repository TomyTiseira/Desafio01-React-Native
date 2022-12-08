import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import colors from "../constants/colors";

const ItemCount = ({ initial, stock, onAdd, cancelAddProduct }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={decrease}
          style={styles.buttonCount}
          disabled={count <= 1}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity
          onPress={increase}
          style={styles.buttonCount}
          disabled={count >= stock}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => onAdd(count)}
          disabled={stock <= 0}
          style={{ ...styles.button, backgroundColor: colors.buttonCancel }}
        >
          <Text style={{ color: "#fff" }}>Agregar al carrito</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={cancelAddProduct}>
          <Text style={{ color: "#fff" }}>Volver al inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemCount;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonCount: {
    width: 25,
    height: 25,
    borderRadius: 5,
    marginBottom: 0.7,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 7,
  },
  button: {
    backgroundColor: colors.buttonDelete,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 7,
  },
});
