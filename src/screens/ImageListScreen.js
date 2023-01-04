import React, { useEffect } from "react";
import { FlatList } from "react-native";
import ImageItem from "../components/ImageItem";
import { useSelector, connect, useDispatch } from "react-redux";
import { selectImage } from "../store/actions/image.action";
import { useNavigation } from "@react-navigation/native";
import * as imagesAction from "../store/actions/image.action";

const ImageListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images);

  useEffect(() => {
    dispatch(imagesAction.loadImages());
  }, []);

  const handleSelectedImage = (item) => {
    dispatch(selectImage(item.id));
    navigation.navigate("Details", {
      title: item.title,
    });
  };

  const renderItem = ({ item }) => (
    <ImageItem item={item} onSelect={handleSelectedImage} />
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
