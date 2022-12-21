import React from "react";
import { FlatList } from "react-native";
import ImageItem from "../components/ImageItem";
import { useSelector, connect, useDispatch } from "react-redux";
import { selectImage } from "../store/actions/image.action";

const ImageListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images);

  const handleSelectedImage = (item) => {
    dispatch(selectImage(item.id));
    console.log(item);
    navigation.navigate("Details", {
      name: item.name,
    });
  };

  const renderItem = ({ item }) => (
    <ImageItem
      title={item.title}
      image={item.image}
      onSelect={handleSelectedImage}
    />
  );

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default connect()(ImageListScreen);
