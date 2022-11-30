import { FlatList } from "react-native";
import React from "react";
import CategoryItem from "../components/CategoryItem";
import { CATEGORIES } from "../data/categories";

const CategoriesScreen = ({ navigation }) => {
  const handleSelectedCategory = (item) => {
    navigation.navigate("Products", {
      categoryId: item.id,
      name: item.name,
    });
  };

  const renderCategoryItem = ({ item }) => {
    return <CategoryItem item={item} onSelected={handleSelectedCategory} />;
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoriesScreen;
