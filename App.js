import { useFonts } from "expo-font";
import BottomTapNavigator from "./src/navegation/BottomTapNavigator";
import ProductNavigation from "./src/navegation/ProductNavigation";

export default function App() {
  const [loaded] = useFonts({
    Roboto: require("./src/assets/fonts/Roboto-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <BottomTapNavigator />;
}
