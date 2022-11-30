import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListProducts from "../screens/ListProductsScreen";
import DetailsProduct from "../screens/DetailsProductScreen";
import CategoriesScreen from "../screens/CategoriesScreen";

const Stack = createNativeStackNavigator();

export default ProductNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: "Categorias" }}
      />
      <Stack.Screen
        name="Products"
        component={ListProducts}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsProduct}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};
