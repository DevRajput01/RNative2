import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/Slice/userSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));

  };

  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.cardImage} />
      <Text style={styles.cardName}>{product.name}</Text>
      <View style={styles.footer}>
        <Text style={styles.cardPrice}>${product.price}</Text>
        <Text style={styles.dis}>{product.dis}</Text>
        <TouchableOpacity style={styles.buy} onPress={handleAddToCart}>
          <Text style={styles.buyText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    margin: 10,
    width: 165,
    height: 260,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 10,
  },
  cardImage: {
    width: 165,
    height: 180,
    borderRadius: 10,
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
    paddingHorizontal: 10,
  },
  cardPrice: {
    fontSize: 14,
    color: '#00BF35',
  },
  buy: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  buyText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dis: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'light',
  },
});

export default ProductCard;
