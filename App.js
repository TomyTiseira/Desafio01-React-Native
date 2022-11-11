import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import colors from './constants/colors';
import { useFonts } from 'expo-font';
import ListProducts from './screens/ListProducts';
import DetailsProduct from './screens/DetailsProduct';
import Header from './components/Header';

export default function App() {
  const [ loaded ] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Light.ttf'),
  });

  const [ selectedProduct, setSelectedProduct ] = useState({})

  const handleStartDetails = ({itemSelected}) => {
    setSelectedProduct(itemSelected)
  }

  let content = <ListProducts onStartDetails={handleStartDetails}/>

  if(selectedProduct.id) {
    content = <DetailsProduct selectedProduct={selectedProduct}/>
  }

  if(!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Header title={'Coff-fe'} newStyles={{fontFamily: 'Roboto'}}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});
