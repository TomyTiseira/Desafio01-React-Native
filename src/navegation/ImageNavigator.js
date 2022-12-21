import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../constants/colors";
import ImageListScreen from "../screens/ImageListScreen";
import ImageDetailScreen from "../screens/ImageDetailsScreen";
import NewImageScreen from "../screens/NewImageScreen";

const Stack = createNativeStackNavigator();

const ImageNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Direcciones">
      <Stack.Screen
        name="Imagenes"
        component={ImageListScreen}
        options={({ navigation }) => ({
          title: "Imagenes",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("New")}>
              <Ionicons name="md-add" color={colors.secondary} size={23} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Details"
        component={ImageDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="New"
        component={NewImageScreen}
        options={{ title: "Nueva direccion" }}
      />
    </Stack.Navigator>
  );
};

export default ImageNavigator;
