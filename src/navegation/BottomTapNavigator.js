import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";
import ProductNavigation from "./ProductNavigation";
import CartNavigator from "./CartNavigator";

const BottomTabs = createBottomTabNavigator();

const BottomTapNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="ProductsTap"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <BottomTabs.Screen
          name="ProductsTap"
          component={ProductNavigation}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                <IonIcons name="home" size={20} color="black" />
                <Text>Productos</Text>
              </View>
            ),
          }}
        />
        <BottomTabs.Screen
          name="CartTap"
          component={CartNavigator}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                <IonIcons name="cart" size={20} color="black" />
                <Text>Carrito</Text>
              </View>
            ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default BottomTapNavigator;

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#7F5DF0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 5,
    position: "absolute",
    borderRadius: 15,
    height: 70,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
