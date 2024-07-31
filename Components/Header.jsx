import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ onSearch, onMenuPress }) => {

  return (
  <>
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuButton} onPress={onMenuPress}>
        <Icon name="menu-sharp" size={30} color="green" />
      </TouchableOpacity>

      <TextInput
        style={styles.searchBox}
        placeholder= "Search the Products (ex. Rose Plants ,...)"
        onChangeText={onSearch}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
        <Icon name="search-sharp" size={30} color="green" />
      </TouchableOpacity>
         </View>
</>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  menuButton: {
    marginRight: 10,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  searchBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: 'green',
    borderWidth: 1,
  },
  button:{
  padding:5,
  backgroundColor:"white",
  borderRadius:20,
  },

});

export default Header;
