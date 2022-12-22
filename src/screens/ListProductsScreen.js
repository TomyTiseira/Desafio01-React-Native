import { FlatList } from "react-native";
import React, { useEffect } from "react";
import ProductItem from "../components/ProductItem";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  filteredProduct,
  selectProduct,
} from "../store/actions/product.action";
import { useNavigation } from "@react-navigation/native";

const ListProducts = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);
  const category = useSelector((state) => state.categories.selected);

  useEffect(() => {
    dispatch(filteredProduct(category.id));
  }, []);

  const handleSelectedProduct = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate("Details", {
      name: item.name,
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

export default connect()(ListProducts);
