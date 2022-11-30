import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../components/Header";
import colors from "../constants/colors";

const DetailsProduct = ({ navigation, route }) => {
  const { name, price, description, id, category } = route.params;

  const handleAddCart = () => {
    const product = {
      name,
      price,
      id,
      description,
      category,
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.datailsContainer}>
        <Header title={"Detalle del producto"} />
        <Text style={styles.text}>{name}</Text>
        <View style={styles.details}>
          <Text style={styles.text}>Precio: ${price}</Text>
          <Text style={styles.text}>Descripción: {description}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: colors.buttonCancel,
              marginRight: 10,
            }}
            onPress={() => handleAddCart()}
          >
            <Text style={{ color: "#fff" }}>Agregar a carrito</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.popToTop()}
          >
            <Text style={{ color: "#fff" }}>Volver al inicio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailsProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ccc",
    // marginTop: -500,
  },
  datailsContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    margin: 15,
    paddingBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 3,
    borderRadius: 20,
  },
  text: {
    marginTop: 5,
    fontSize: 20,
  },
  details: {
    padding: 15,
    flexDirection: "column",
    marginHorizontal: 12,
  },
  button: {
    backgroundColor: colors.buttonDelete,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
