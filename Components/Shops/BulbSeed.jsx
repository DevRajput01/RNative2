import React from 'react';
import { ScrollView, FlatList, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import ProductCard from '../ProductCard';


const BulbSeed = ({ addToCart }) => {
  const products = [
    { id: '0001', name: 'Product 1', image: require('../img/PC1.png'), price: '10', dis: '50% off' },
    { id: '0002', name: 'Product 2', image: require('../img/PC2.png'), price: '15', dis: '60% off' },
    { id: '0003', name: 'Product 3', image: require('../img/PC3.png'), price: '20', dis: '55% off' },
    { id: '0004', name: 'Product 4', image: require('../img/PC1.png'), price: '25', dis: '50% off' },
    { id: '0005', name: 'Product 5', image: require('../img/PC2.png'), price: '30', dis: '70% off' },
    { id: '0006', name: 'Product 5', image: require('../img/PC3.png'), price: '30', dis: '70% off' },
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

export default BulbSeed;
