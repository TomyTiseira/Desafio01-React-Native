import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import BottomTapNavigator from "./src/navegation/BottomTapNavigator";
import store from "./src/store";

export default function App() {
  const [loaded] = useFonts({
    Roboto: require("./src/assets/fonts/Roboto-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <BottomTapNavigator />
    </Provider>
  );
}
