import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import colors from '../constants/colors';
import ModalDelete from '../components/ModalDelete';
import Card from '../components/Card';

const ListProducts = ({navigation}) => {
    const [ product, setProduct ] = useState('');
    const [ listProducts, setListProducts ] = useState([]);
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ itemSelected, setItemSelected ] = useState({});

    // Setear el state product con cada cambio en el input.
    const onHandleChangeItem = (t) => setProduct(t);

    // Añadir product a la listProducts.
    const addProduct = () => {
        // Controlar que no esté vacio.
        if(product) {
            setListProducts(currentItems => [...currentItems, {id: Math.random().toString(), name: product}]);
            setProduct('');
        }
    }

    // Render de cada item.
    const renderItem = ({ item }) => (
        <Card>
            <Text style={styles.list}>{item.name}</Text>
            <View style={styles.containerButtons}>
                <TouchableOpacity onPress={() => selectedItemDelete(item.id)} >
                    <Text style={styles.buttonDelete}>Eliminar</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => selectedItemDetails(item.id)} >
                    <Text style={styles.buttonDetails}>Detalles</Text>
                </TouchableOpacity> */}
                <Button title='Detalles' onPress={() => handleDetails(item.id)}/>
            </View>
        </Card>
    );

    // Setear itemSelected con el product seleccionado y hacer visible el modal.
    const selectedItemDelete = (id) => {
        setItemSelected(listProducts.find(item => item.id === id));
        setModalVisible(true);
    }

    // Eliminar el product de la listProducts, dandole al itemSeleced un objeto vacio y ocultando el modal.
    const deleteItem = () => {
        setListProducts(currentItems => currentItems.filter(item => item.id !== itemSelected.id));
        setItemSelected({});
        setModalVisible(false);
    }

    const handleDetails = (id) => {
        setItemSelected(listProducts.find(item => item.id === id));
        navigation.navigate('Detalles', {
            id: itemSelected.id,
            name: itemSelected.name,
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={product} 
                    placeholder='Agregar producto a la lista' 
                    style={styles.input} 
                    onChangeText={onHandleChangeItem}
                />
                <TouchableOpacity style={styles.buttonAdd} onPress={addProduct}>
                    <Text>Agregar</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={listProducts} 
                renderItem={renderItem} 
                keyExtractor={item =>  item.id}
            />
            <ModalDelete isVisible={modalVisible} actionDeleteItem={deleteItem} actionCancelModal={() => setModalVisible(false)}/>
        </View>
    );
}

export default ListProducts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 30,
    },
    input: {
        backgroundColor: '#ccc',
        marginBottom: 4,
        borderBottomWidth: 2,
        width: 250,
        color: '#000',
        paddingLeft: 10,
        borderBottomColor: colors.primary,
        borderRadius: 10,
        height: 35,
    },
    buttonAdd: {
        backgroundColor: colors.primary,
        height: 35,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    buttonDelete: {
        backgroundColor: colors.buttonDelete,
        height: 30,
        width: 65,
        borderRadius: 15,
        textAlign: 'center',
    },
    list: {
        color: '#fff',
        marginBottom: 5,
    },
    buttonDetails: {
        backgroundColor: colors.buttonCancel,
        height: 30,
        width: 65,
        borderRadius: 15,
        textAlign: 'center',
        marginLeft: 10,
    },
    containerButtons: {
        flexDirection: "row",
        marginTop: 5,
    },
});