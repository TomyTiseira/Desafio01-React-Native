import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Image, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import colors from "../constants/colors";

const ImageSelector = ({ onImage }) => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de la camara para usar la aplicacion",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  const handlerTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });
    setPickedUri(image.uri);
  };

  const saveImage = () => {
    onImage(pickedUri);
  };

  return (
    <View style={styles.container}>
      {!pickedUri ? (
        <View>
          <View style={styles.preview}>
            <Text>No hay imagen seleccionada...</Text>
          </View>
          <Button
            title="Tomar Foto"
            color={colors.buttonCancel}
            onPress={handlerTakeImage}
          />
        </View>
      ) : (
        <View>
          <View style={styles.preview}>
            <Image style={styles.image} source={{ uri: pickedUri }} />
          </View>
          <Button
            title="Guardar foto"
            color={colors.buttonCancel}
            onPress={saveImage}
          />
        </View>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.bg,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
