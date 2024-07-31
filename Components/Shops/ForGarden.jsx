
import React from 'react';
import { ScrollView, FlatList, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import ProductCard from '../ProductCard';


const ForGarden = ({ addToCart }) => {
  const products = [
    { id: '071', name: 'Home 1', image: require('../img/FG1.png'), price: '12', dis: '50% off' },
    { id: '072', name: 'Home 2', image: require('../img/FG2.png'), price: '25', dis: '60% off' },
    { id: '073', name: 'Home 3', image: require('../img/FG3.png'), price: '21', dis: '55% off' },
    { id: '074', name: 'Home 4', image: require('../img/FG4.png'), price: '16', dis: '50% off' },
    { id: '075', name: 'Home 5', image: require('../img/FG5.png'), price: '18', dis: '70% off' },
    { id: '076', name: 'Home 6', image: require('../img/FG6.png'), price: '12', dis: '50% off' },
    { id: '077', name: 'Pots 7', image: require('../img/FG7.png'), price: '25', dis: '60% off' },
    { id: '078', name: 'Pots 8', image: require('../img/FG8.png'), price: '21', dis: '55% off' },
    { id: '079', name: 'Pots 9', image: require('../img/FG9.png'), price: '16', dis: '50% off' },
    { id: '080', name: 'Pots 10', image: require('../img/FG10.png'), price: '18', dis: '70% off' },
    { id: '081', name: 'Pots 11', image: require('../img/FG11.png'), price: '12', dis: '50% off' },
    { id: '082', name: 'Pots 12', image: require('../img/FG12.png'), price: '25', dis: '60% off' },
    { id: '083', name: 'Pots 13', image: require('../img/FG13.png'), price: '21', dis: '55% off' },
    { id: '084', name: 'Pots 14', image: require('../img/FG14.png'), price: '16', dis: '50% off' },
    { id: '085', name: 'Pots 15', image: require('../img/FG15.png'), price: '18', dis: '70% off' },
    { id: '086', name: 'Pots 16', image: require('../img/FG16.png'), price: '12', dis: '50% off' },
    // { id: '087', name: 'Pots 17', image: require('../img/FG17.png'), price: '25', dis: '60% off' },
    // { id: '088', name: 'Pots 18', image: require('../img/FG18.png'), price: '21', dis: '55% off' },
    // { id: '089', name: 'Pots 19', image: require('../img/FG19.png'), price: '16', dis: '50% off' },
    // { id: '090', name: 'Pots 20', image: require('../img/FG20.png'), price: '18', dis: '70% off' },
 

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

export default ForGarden;
