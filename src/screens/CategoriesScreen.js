import { FlatList } from "react-native";
import React from "react";
import CategoryItem from "../components/CategoryItem";
import { selectedCategory } from "../store/actions/category.action";
import { useSelector, useDispatch, connect } from "react-redux";

const CategoriesScreen = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id));
    navigation.navigate("Products", {
      name: item.name,
    });
  };

  const renderCategoryItem = ({ item }) => {
    return <CategoryItem item={item} onSelected={handleSelectedCategory} />;
  };

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default connect()(CategoriesScreen);
