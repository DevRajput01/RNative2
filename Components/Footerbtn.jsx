import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Footerbtn = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Icon style={styles.icon} name="home-outline" size={30}  color='green' />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllProduct')}>
        <Icon style={styles.icon} name="leaf-outline" size={30} color="green" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CartPage')}>
        <Icon style={styles.icon} name="cart-outline" size={30} color="green" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserProfile') }>
        <Icon style={styles.icon} name="people-outline" size={30} color="green" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PayPlant') }>
        <Icon style={styles.icon} name="fitness-sharp" size={30} color="green" />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  button: {
    alignItems: 'center',
  },
  icon:{

  },

});

export default Footerbtn;
