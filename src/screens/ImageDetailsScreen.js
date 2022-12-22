import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector, connect } from "react-redux";
import Header from "../components/Header";
import colors from "../constants/colors";

const ImageDetailScreen = () => {
  const navigation = useNavigation();
  const image = useSelector((state) => state.images.selected);

  return (
    <View style={styles.container}>
      <View style={styles.datailsContainer}>
        <Header title={"Detalle de la Imagen"} />
        <Text style={styles.title}>{image.title}</Text>
        <Image style={styles.image} source={{ uri: image.image }} />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.popToTop()}
          >
            <Text style={{ color: "#fff" }}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

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
  button: {
    backgroundColor: colors.buttonCancel,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  image: {
    borderRadius: 65,
    height: 130,
    width: 130,
    marginTop: 12,
  },
});

export default connect()(ImageDetailScreen);
