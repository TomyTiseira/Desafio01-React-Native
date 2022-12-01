import { FlatList } from "react-native";
import React from "react";
import ProductItem from "../components/ProductItem";
import { PRODUCTS } from "../data/products";

const ListProducts = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const products = PRODUCTS.filter(
    (product) => product.category === categoryId
  );

  const handleSelectedProduct = (item) => {
    navigation.navigate("Details", {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image,
    });
  };

  const renderProductItem = ({ item }) => (
    <ProductItem item={item} onSelected={handleSelectedProduct} />
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderProductItem}
      style={{ marginBottom: 70 }}
    />
  );
};

export default ListProducts;
