import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, connect, useDispatch } from "react-redux";
import Header from "../components/Header";
import colors from "../constants/colors";

const ImageDetailScreen = () => {
  const image = useSelector((state) => state.images.selected);
  console.log(image);

  return (
    <View style={styles.container}>
      <View style={styles.datailsContainer}>
        <Header title={"Detalle de la Imagen"} />
        {/* <Text style={styles.title}>{product.name}</Text>
        <Image source={product.image} style={styles.image} /> */}
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
});

export default connect()(ImageDetailScreen);
