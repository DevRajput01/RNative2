import React from 'react';
import { ScrollView, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../ProductCard';


const GreenGifts = ({ addToCart }) => {
  const products = [
    { id: '001', name: ' GreenGifts 1', image: require('../img/Potp19.png'), price: '12', dis: '50% off' },
    { id: '002', name: ' GreenGifts 2', image: require('../img/Potp20.png'), price: '25', dis: '60% off' },
    { id: '003', name: ' GreenGifts 3', image: require('../img/Potp21.png'), price: '21', dis: '55% off' },
    { id: '004', name: ' GreenGifts 4', image: require('../img/Potp22.png'), price: '16', dis: '50% off' },
    { id: '005', name: ' GreenGifts 5', image: require('../img/Potp7.png'), price: '18', dis: '70% off' },
    { id: '006', name: ' GreenGifts 6', image: require('../img/Potp8.png'), price: '12', dis: '50% off' },
    { id: '007', name: ' GreenGifts 7', image: require('../img/Potp9.png'), price: '25', dis: '60% off' },
    { id: '008', name: ' GreenGifts 8', image: require('../img/Potp10.png'), price: '21', dis: '55% off' },
    { id: '009', name: ' GreenGifts 9', image: require('../img/Potp11.png'), price: '16', dis: '50% off' },
    { id: '010', name: ' GreenGifts 10', image: require('../img/Potp12.png'), price: '18', dis: '70% off' },
    { id: '011', name: ' GreenGifts 11', image: require('../img/Potp13.png'), price: '12', dis: '50% off' },
    { id: '012', name: ' GreenGifts 12', image: require('../img/Potp14.png'), price: '25', dis: '60% off' },
    { id: '013', name: ' GreenGifts 13', image: require('../img/Potp15.png'), price: '21', dis: '55% off' },
    { id: '014', name: ' GreenGifts 14', image: require('../img/Potp16.png'), price: '16', dis: '50% off' },
    { id: '015', name: ' GreenGifts 15', image: require('../img/Potp17.png'), price: '18', dis: '70% off' },
    { id: '016', name: ' GreenGifts 16', image: require('../img/Potp18.png'), price: '12', dis: '50% off' },
    { id: '017', name: ' GreenGifts 17', image: require('../img/Potp3.png'), price: '25', dis: '60% off' },
    { id: '018', name: ' GreenGifts 18', image: require('../img/Potp4.png'), price: '21', dis: '55% off' },
    { id: '019', name: ' GreenGifts 19', image: require('../img/Potp5.png'), price: '16', dis: '50% off' },
    { id: '020', name: ' GreenGifts 20', image: require('../img/Potp6.png'), price: '18', dis: '70% off' },
    { id: '021', name: 'GreenGifts 21', image: require('../img/Potp23.png'), price: '12', dis: '50% off' },
    { id: '022', name: 'GreenGifts 22', image: require('../img/Potp24.png'), price: '25', dis: '60% off' },
    { id: '023', name: 'GreenGifts 23', image: require('../img/Potp25.png'), price: '21', dis: '55% off' },
    { id: '024', name: 'GreenGifts 24', image: require('../img/Potp26.png'), price: '16', dis: '50% off' },
    { id: '025', name: 'GreenGifts 25', image: require('../img/Potp27.png'), price: '18', dis: '70% off' },
    { id: '026', name: 'GreenGifts 26', image: require('../img/Potp28.png'), price: '12', dis: '50% off' },
    { id: '027', name: 'GreenGifts 27', image: require('../img/Potp29.png'), price: '25', dis: '60% off' },
    { id: '028', name: 'GreenGifts 28', image: require('../img/Potp30.png'), price: '21', dis: '55% off' },
    { id: '029', name: 'GreenGifts 29', image: require('../img/Potp31.png'), price: '16', dis: '50% off' },
    { id: '030', name: 'GreenGifts 30', image: require('../img/Potps2.png'), price: '16', dis: '50% off' },
 

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

export default GreenGifts;
