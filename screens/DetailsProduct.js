import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';

const DetailsProduct = ({selectedProduct}) => {
    console.log(selectedProduct)
    return (
        <View style={styles.container}>
            <Header title={'Detalle del producto'}/>
            <Text style={styles.text}>Nombre: {selectedProduct.name}</Text>
        </View>
    );
}

export default DetailsProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        marginTop: 5,
        fontSize: 20,
    }
});