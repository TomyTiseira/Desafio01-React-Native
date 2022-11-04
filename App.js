import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import ModalDelete from './components/ModalDelete';

export default function App() {
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
      setListProducts(currentItems => [...currentItems, {id: Math.random().toString(), value: product}]);
      setProduct('');
    }
  }

  // Render de cada item.
  const renderItem = ({ item }) => (
    <View style={styles.containerItem}>
      <Text style={styles.list}>{item.value}</Text>
      <TouchableOpacity onPress={() => selectedItem(item.id)} >
        <Text style={styles.buttonDelete}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  // Setear itemSelected con el product seleccionado y hacer visible el modal.
  const selectedItem = (id) => {
    setItemSelected(listProducts.find(item => item.id === id));
    setModalVisible(true);
  }

  // Eliminar el product de la listProducts, dandole al itemSeleced un objeto vacio y ocultando el modal.
  const deleteItem = () => {
    setListProducts(currentItems => currentItems.filter(item => item.id !== itemSelected.id));
    setItemSelected({});
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coff-Fe</Text>
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
      <View style={styles.containerList}>
        <FlatList 
          data={listProducts} 
          renderItem={renderItem} 
          keyExtractor={item =>  item.id}
        />
      </View>
      <ModalDelete isVisible={modalVisible} actionDeleteItem={deleteItem} actionCancelModal={() => setModalVisible(false)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010103',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginTop: 30,
  },
  inputContainer: {
    marginTop: 30,
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
    borderBottomColor: '#fffacd',
    borderRadius: 10,
    height: 35,
  },
  containerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#13131a',
    width: 200,
    height: 70,
    paddingBottom: 5,
    marginTop: 10,
  },
  buttonAdd: {
    backgroundColor: "#fffacd",
    height: 35,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  buttonDelete: {
    backgroundColor: "#D22B2B",
    height: 30,
    width: 65,
    borderRadius: 15,
    textAlign: 'center',
  },
  list: {
    color: '#fff',
    marginBottom: 5,
  }
});
