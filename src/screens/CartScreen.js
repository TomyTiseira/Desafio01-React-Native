import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";
import CartItem from "../components/CartItem";
import { CART } from "../data/cart";
import Modal from "../components/ModalDelete";

const CartScreen = () => {
  const [cart, setCart] = useState(CART);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const total = 120;

  const handleConfirmCart = () => {
    // console.log("Confirmar carrito");
  };

  const handleSelectedProduct = (id) => {
    setItemSelected(cart.find((item) => item.id === id));
    setModalVisible(true);
  };

  const handleDeleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== itemSelected.id));
    setItemSelected({});
    setModalVisible(false);
  };

  const cancelModal = () => {
    setModalVisible(false);
  };

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={() => handleSelectedProduct(item.id)} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderCartItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
          <Text style={styles.text}>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={modalVisible}
        actionDeleteItem={handleDeleteItem}
        actionCancelModal={cancelModal}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    paddingBottom: 70,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
});
