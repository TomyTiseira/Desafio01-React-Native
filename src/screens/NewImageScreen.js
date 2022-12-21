import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { connect, useDispatch } from "react-redux";
import ImageSelector from "../components/ImageSelector";
import { addImage } from "../store/actions/image.action";

const NewImageScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleTitleChange = (text) => setTitle(text);

  const handleSave = (image) => {
    dispatch(addImage(title, image));
    navigation.navigate("Imagenes");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Titulo</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTitleChange}
        />
        <ImageSelector onImage={(image) => handleSave(image)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});

export default connect()(NewImageScreen);
