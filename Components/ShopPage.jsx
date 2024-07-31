import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BulbSeed from './Shops/BulbSeed';
import GreenGifts from './Shops/GreenGifts';
import ForGarden from './Shops/ForGarden';
import HomeDecor from './Shops/HomeDecor';
import PlantsCare from './Shops/PlantsCare';
import PotsPlant from './Shops/PotsPlant';

const ShopPage = ({ route }) => {
  const { shopName } = route.params;

  const renderShopComponent = () => {
    switch (shopName) {
      case 'BulbSeed':
        return <BulbSeed />;
      case 'GreenGifts':
        return <GreenGifts />;
      case 'ForGarden':
        return <ForGarden />;
      case 'HomeDecor':
        return <HomeDecor />;
      case 'PlantsCare':
        return <PlantsCare />;
      case 'PotsPlant':
        return <PotsPlant />;
      
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {shopName}</Text>
      {renderShopComponent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ShopPage;
