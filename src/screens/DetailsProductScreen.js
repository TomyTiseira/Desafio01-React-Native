import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import colors from "../constants/colors";
import { useSelector, connect, useDispatch } from "react-redux";
import { productAdd } from "../store/actions/cart.action";
import ItemCount from "../components/ItemCount";

const DetailsProduct = ({ navigation }) => {
  const product = useSelector((state) => state.products.selected);
  const dispatch = useDispatch();

  const [goToCart, setgoToCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const onAdd = (quantity) => {
    setgoToCart(true);
    setQuantity(quantity);
    // Añadir un state que guarda la cantidad.
  };

  const handleAddCart = () => {
    dispatch(productAdd(product, quantity));
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.datailsContainer}>
        <Header title={"Detalle del producto"} />
        <Text style={styles.title}>{product.name}</Text>
        <Image source={product.image} style={styles.image} />
        <View style={styles.details}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ ...styles.text, textDecorationLine: "underline" }}>
              Precio:
            </Text>
            <Text style={{ ...styles.text, paddingLeft: 5 }}>
              ${product.price}
            </Text>
          </View>
          <Text style={{ ...styles.text, textDecorationLine: "underline" }}>
            Descripción:
          </Text>
          <Text style={styles.text}>{product.description}</Text>
        </View>
        {goToCart ? (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: colors.buttonCancel,
                marginRight: 10,
              }}
              onPress={() => handleAddCart()}
            >
              <Text style={{ color: "#fff" }}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.popToTop()}
            >
              <Text style={{ color: "#fff" }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ItemCount
            initial={1}
            stock={5}
            onAdd={onAdd}
            cancelAddProduct={() => navigation.popToTop()}
          />
        )}
      </View>
    </View>
  );
};

export default connect()(DetailsProduct);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ccc",
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
  title: {
    marginTop: 10,
    fontSize: 25,
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
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  image: {
    borderRadius: 50,
    height: 100,
    width: 100,
    marginTop: 12,
  },
});
