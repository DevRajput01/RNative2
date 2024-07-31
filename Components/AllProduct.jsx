import React from 'react';
import { ScrollView, FlatList, View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import ProductCard from './ProductCard';
import GreenGifts from '../Components/Shops/GreenGifts';
import BulbSeed from '../Components/Shops/BulbSeed';
import ForGarden from '../Components/Shops/ForGarden';
import HomeDecor from '../Components/Shops/HomeDecor';
import PlantsCare from '../Components/Shops/PlantsCare';
import PotsPlant from '../Components/Shops/PotsPlant';
import Footerbtn from '../Components/Footerbtn';


const AllProducts = ({ addToCart , navigation }) => {
  const products = [
         { id: '11', name: 'Product 1', image: require('./img/Product6.png'), price: '10', dis: '50% off' },
         { id: '060', name: 'Pots 10', image: require('./img/RP10.png'), price: '18', dis: '70% off' },

  ];

  const renderProductCard = ({ item }) => (
    <ProductCard product={item} addToCart={addToCart} />
  );
  
  return (
    <>

<ScrollView contentContainerStyle={styles.scrollContainer}>
<ScrollView

horizontal
contentContainerStyle={styles.filterShop}
showsHorizontalScrollIndicator={false}
>
<TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('HomeDecor' )}>
    <Text style={styles.text1}> Home Decor</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('PotsPlant' )}>
    <Text style={styles.text1}> Pots & Plant</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('BulbSeed' )}>
    <Text style={styles.text1}> Bulb & Seed</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('GreenGifts' )}>
    <Text style={styles.text1}> Green Gifts</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('PlantsCare' )}>
    <Text style={styles.text1}> Plants Care</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('ForGarden' )}>
    <Text style={styles.text1}> For Garden</Text>
</TouchableOpacity>
</ScrollView>


    <HomeDecor />
    <GreenGifts />
    <ForGarden />
    <PotsPlant />
    <BulbSeed />
    <PlantsCare />


      <FlatList
        data={products}
        renderItem={renderProductCard}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.cardContainer}
      />
    </ScrollView>
<Footerbtn navigation={navigation} />
</>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'stretch',
    paddingTop:15,
  },

  filterShop:{
  flexDirection:'row',
  },

  button1:{
    backgroundColor:'white',
    height:30,
    width:100,
    borderRadius:20,
    margin:10,
    borderColor:'green',
  },

  text1:{
color:'green',
padding:5,
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

export default AllProducts;
