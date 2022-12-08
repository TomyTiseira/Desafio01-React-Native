import { Alert, Pressable, StyleSheet, Text, View, Modal } from "react-native";
import React from "react";
import colors from "../constants/colors";

const ModalConfirmCart = ({
  isVisible,
  actionConfirmCart,
  actionCancelModal,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        actionCancelModal();
        Alert.alert("Modal se ha cerrado.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.containerModal}>
          <Text>¿Quieres confirmar la compra?</Text>
          <View style={styles.containerButtons}>
            <Pressable
              onPress={() => actionConfirmCart()}
              style={styles.buttonConfirmar}
            >
              <Text style={styles.textButton}>Confirmar</Text>
            </Pressable>
            <Pressable
              onPress={() => actionCancelModal()}
              style={styles.buttonCancelar}
            >
              <Text style={styles.textButton}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirmCart;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  containerModal: {
    borderRadius: 15,
    padding: 10,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
  buttonConfirmar: {
    backgroundColor: colors.buttonDelete,
    height: 50,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  buttonCancelar: {
    backgroundColor: colors.buttonCancel,
    height: 50,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  textButton: {
    color: "#fff",
  },
});
