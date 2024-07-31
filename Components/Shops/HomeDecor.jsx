import React from 'react';
import { ScrollView, FlatList, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import ProductCard from '../ProductCard';


const HomeDecor = ({ addToCart }) => {
  const products = [
    { id: '041', name: 'HomeDecor 1', image: require('../img/Product6.png'), price: '10', dis: '50% off' },
    { id: '044', name: 'HomeDecor 2', image: require('../img/Product2.png'), price: '15', dis: '60% off' },
    { id: '048', name: 'HomeDecor 3', image: require('../img/Product3.png'), price: '20', dis: '55% off' },
    { id: '051', name: 'HomeDecor 4', image: require('../img/Product4.png'), price: '25', dis: '50% off' },
    { id: '052', name: 'HomeDecor 5', image: require('../img/Product7.png'), price: '30', dis: '70% off' },
    { id: '031', name: 'HomeDecor 6', image: require('../img/Potps5.png'), price: '12', dis: '50% off' },
    { id: '032', name: 'HomeDecor 7', image: require('../img/Potps2.png'), price: '25', dis: '60% off' },
    { id: '033', name: 'HomeDecor 8', image: require('../img/Potps3.png'), price: '21', dis: '55% off' },
    { id: '034', name: 'HomeDecor 9', image: require('../img/Potps4.png'), price: '16', dis: '50% off' },
    { id: '035', name: 'HomeDecor 10', image: require('../img/Potps5.png'), price: '18', dis: '70% off' },
    { id: '036', name: 'HomeDecor 11', image: require('../img/Potps6.png'), price: '12', dis: '50% off' },
    { id: '037', name: 'HomeDecor 12', image: require('../img/Potp19.png'), price: '25', dis: '60% off' },
    { id: '038', name: 'HomeDecor 13', image: require('../img/Potp20.png'), price: '21', dis: '55% off' },
    { id: '039', name: 'HomeDecor 14', image: require('../img/Potp21.png'), price: '16', dis: '50% off' },
    { id: '040', name: 'HomeDecor 15', image: require('../img/Potp22.png'), price: '18', dis: '70% off' },
    { id: '042', name: 'HomeDecor 16', image: require('../img/Potp4.png'), price: '25', dis: '60% off' },
    { id: '043', name: 'HomeDecor 17', image: require('../img/Potp5.png'), price: '21', dis: '55% off' },
    { id: '045', name: 'HomeDecor 18', image: require('../img/Potp7.png'), price: '18', dis: '70% off' },
    { id: '046', name: 'HomeDecor 19', image: require('../img/Potp8.png'), price: '12', dis: '50% off' },
    { id: '047', name: 'HomeDecor 20', image: require('../img/Potp9.png'), price: '25', dis: '60% off' },
    { id: '049', name: 'HomeDecor 21', image: require('../img/Potp11.png'), price: '16', dis: '50% off' },
    { id: '050', name: 'HomeDecor 22', image: require('../img/Potp12.png'), price: '18', dis: '70% off' },
 

  ];

  const renderProductCard = ({ item }) => (
    <ProductCard product={item} addToCart={addToCart} />
  );
  
  return (

    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <FlatList
        data={products}
        renderItem={renderProductCard}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.cardContainer}
      />
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  cardContainer: {

  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  cardImage: {
    width: 165,
    height: 180,
    borderRadius: 10,
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,

    width: 165,
    height: 260,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom:10,
  },
  cardName: {
    fontSize: 16,
    paddingLeft: 10,
    color: '#333',
    fontWeight: 'bold',
    margin: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrice: {
    fontSize: 14,
    color: '#00BF35',
    paddingLeft: 10,
  },
  buy: {
    margin: 10,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
  },
  buyText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dis: {
    color: 'red',
    fontSize: 10,
    fontWeight: 'light',
  },
});

export default HomeDecor;
