
import React from 'react';
import { ScrollView, FlatList, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import ProductCard from '../ProductCard';


const PotsPlant = ({ addToCart }) => {
  const products = [
    { id: '051', name: 'Pots 1', image: require('../img/RP2.png'), price: '12', dis: '50% off' },
    { id: '052', name: 'Pots 2', image: require('../img/RP1.png'), price: '25', dis: '60% off' },
    { id: '053', name: 'Pots 3', image: require('../img/RP3.png'), price: '21', dis: '55% off' },
    { id: '054', name: 'Pots 4', image: require('../img/RP4.png'), price: '16', dis: '50% off' },
    { id: '055', name: 'Pots 5', image: require('../img/RP5.png'), price: '18', dis: '70% off' },
    { id: '056', name: 'Pots 6', image: require('../img/RP6.png'), price: '12', dis: '50% off' },
    { id: '057', name: 'Pots 7', image: require('../img/RP13.png'), price: '25', dis: '60% off' },
    { id: '058', name: 'Pots 8', image: require('../img/RP14.png'), price: '21', dis: '55% off' },
    { id: '059', name: 'Pots 9', image: require('../img/RP9.png'), price: '16', dis: '50% off' },
    { id: '060', name: 'Pots 10', image: require('../img/RP10.png'), price: '18', dis: '70% off' },
    { id: '061', name: 'Pots 11', image: require('../img/RP11.png'), price: '12', dis: '50% off' },
    { id: '062', name: 'Pots 12', image: require('../img/RP12.png'), price: '25', dis: '60% off' },
    { id: '063', name: 'Pots 13', image: require('../img/RP7.png'), price: '21', dis: '55% off' },
    { id: '064', name: 'Pots 14', image: require('../img/RP8.png'), price: '16', dis: '50% off' },
    { id: '065', name: 'Pots 15', image: require('../img/RP15.png'), price: '18', dis: '70% off' },
    { id: '066', name: 'Pots 16', image: require('../img/RP16.png'), price: '12', dis: '50% off' },
    { id: '067', name: 'Pots 17', image: require('../img/RP17.png'), price: '25', dis: '60% off' },
    { id: '068', name: 'Pots 18', image: require('../img/RP18.png'), price: '21', dis: '55% off' },
    { id: '069', name: 'Pots 19', image: require('../img/RP13.png'), price: '16', dis: '50% off' },
    { id: '070', name: 'Pots 20', image: require('../img/RP14.png'), price: '18', dis: '70% off' },

    
 

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
    justifyContent: 'RPace-between',
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

export default PotsPlant;
