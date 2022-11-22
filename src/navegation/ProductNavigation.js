import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListProducts from "../screens/ListProducts";
import DetailsProduct from "../screens/DetailsProduct";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default ProductNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Productos' component={ListProducts} />
                <Stack.Screen name='Detalles' component={DetailsProduct} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}