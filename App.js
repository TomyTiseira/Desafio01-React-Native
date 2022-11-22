import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import colors from './src/constants/colors';
import { useFonts } from 'expo-font';
import ProductNavigation from './src/navegation/ProductNavigation';

export default function App() {
  const [ loaded ] = useFonts({
    Roboto: require('./src/assets/fonts/Roboto-Light.ttf'),
  });

  // let content = <ListProducts onStartDetails={handleStartDetails}/>

  // if(selectedProduct.id) {
  //   content = <DetailsProduct selectedProduct={selectedProduct}/>
  // }

  if(!loaded) {
    return null;
  }

  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto"/>
    //   <Header title={'Coff-fe'} newStyles={{fontFamily: 'Roboto'}}/>
    //   {content}
    // </View>
    <ProductNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});
