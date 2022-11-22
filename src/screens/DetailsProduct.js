import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import colors from '../constants/colors';

const DetailsProduct = ({navigation, route}) => {
    const { name } = route.params;
    return (
        <View style={styles.container}>
            <Header title={'Detalle del producto'}/>
            <Text style={styles.text}>Nombre: {name}</Text>
            <Button title='Volver al inicio' onPress={() => navigation.popToTop()}/>
        </View>
    );
}

export default DetailsProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -500,
    },
    text: {
        color: '#fff',
        marginTop: 5,
        fontSize: 20,
    }
});