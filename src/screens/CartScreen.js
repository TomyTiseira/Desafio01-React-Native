import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector, useDispatch, connect } from "react-redux";
import { confirmCart, removeProduct } from "../store/actions/cart.action";
import ModalConfirmCart from "../components/ModalConfirmCart";
import ModalDelete from "../components/ModalDelete";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const navigation = useNavigation();
  const productsInCart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total).toFixed(2);

  const dispatch = useDispatch();

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisibleDelete, setModalVisibleDelete] = useState(false);
  const [modalVisibleConfirm, setModalVisibleConfirm] = useState(false);

  const handleConfirmCart = () => {
    dispatch(confirmCart(productsInCart, total));
    setModalVisibleConfirm(false);
  };

  const handleSelectCartConfirm = () => {
    setModalVisibleConfirm(true);
  };

  const handleSelectedProduct = (id) => {
    setItemSelected(productsInCart.find((item) => item.id === id));
    setModalVisibleDelete(true);
  };

  const handleDeleteItem = () => {
    dispatch(removeProduct(itemSelected.id));
    setItemSelected({});
    setModalVisibleDelete(false);
  };

  const cancelModalDelete = () => {
    setModalVisibleDelete(false);
  };

  const cancelModalConfirm = () => {
    setModalVisibleConfirm(false);
  };

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={() => handleSelectedProduct(item.id)} />
  );

  // If the cart is empty it is executed.
  if (productsInCart.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No hay elementos en el carrito.</Text>
        <TouchableOpacity
          style={styles.confirm}
          onPress={() => navigation.navigate("Categories")}
        >
          <Text style={styles.text}>Ir a comprar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={productsInCart}
          keyExtractor={(item) => item.id}
          renderItem={renderCartItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.confirm}
          onPress={handleSelectCartConfirm}
        >
          <Text style={styles.text}>Confirmar</Text>
        </TouchableOpacity>
        <View style={styles.total}>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.text}>${total}</Text>
        </View>
      </View>
      <ModalDelete
        isVisible={modalVisibleDelete}
        actionDeleteItem={handleDeleteItem}
        actionCancelModal={cancelModalDelete}
      />
      <ModalConfirmCart
        isVisible={modalVisibleConfirm}
        actionConfirmCart={handleConfirmCart}
        actionCancelModal={cancelModalConfirm}
      />
    </View>
  );
};

export default connect()(CartScreen);

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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  confirm: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 10,
  },
  total: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
});
