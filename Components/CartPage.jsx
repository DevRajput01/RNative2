import React, {useMemo} from 'react';
import { View, Text, FlatList, StyleSheet, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, incrementQuantity, decrementQuantity } from './redux/Slice/userSlice';
import Icon from 'react-native-vector-icons/Ionicons';
import Footerbtn from './Footerbtn';

const CartPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.user);

  // Memoize the total price calculation

  const totalPrice = useMemo(() => {
    console.log('Calculating total price...');
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity, 10) || 0;
      console.log(`Item: ${item.name}, Price: ${price}, Quantity: ${quantity}`);
      return total + (price * quantity);
    }, 0).toFixed(2);
  }, [cartItems]);



  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productDis}>{item.dis}</Text>
      </View>
      <View style={styles.remAdd}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleDecrementQuantity(item.id)}>
            <Text style={styles.quantityButton}>
              <Icon name="remove-circle-sharp" size={30} color='red' />
            </Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleIncrementQuantity(item.id)}>
            <Text style={styles.quantityButton}>
              <Icon name="add-circle-sharp" size={30} color='green' />
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveFromCart(item.id)}
        >
          <Text style={styles.removeButtonText}>
            <Icon name="trash-sharp" size={25} color='grey' />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Cart Items</Text>
        {cartItems.length === 0 ? (
          <View>
            <Icon style={styles.emptyCartIcon} name="cloud-offline-sharp" color='skyblue' size={150} />
            <Text style={styles.emptyCartText}>Your cart is empty.</Text>
          </View>
        ) : (
          <>
            <FlatList
              data={cartItems}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.cartList}
            />
            <View style={styles.clrAdd}>
              <TouchableOpacity style={styles.clearButton} onPress={handleClearCart}>
                <Text style={styles.clearButtonText}>Clear Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.AddButton} >
              <View style={styles.totalAdd}>
                <Text style={styles.clearButtonText}>Total Price is </Text>
                <Text style={styles.AddButtonText} >${totalPrice}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.paySection}>
              <View>
                <Text style={styles.paySectionText}> Pay Using
                  <Icon name="chevron-down-outline" size={14} color="green" />
                </Text>
                <Text style={styles.online}>Online</Text>
              </View>
              <TouchableOpacity style={styles.crtBtn} onPress={() => navigation.navigate('PaymentPage')}>
                <Text style={styles.crtBtnText}>Pay Now </Text>
                  <Icon style={styles.iconPay} name="arrow-redo-sharp" size={25} />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </ScrollView>
    <Footerbtn navigation={navigation} />
    </>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f7f7f7',
  },
  container: {
    flex: 1,
    padding: 15,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 6,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#28a745',
    marginVertical: 5,
  },
  productDis: {
    fontSize: 14,
    color: '#ff6347',
  },
  removeButton: {
    padding: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    width: 120,
    height: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  quantityButton: {
    fontSize: 18,
    color: '#007bff',
  },
  quantityText: {
    fontSize: 16,
    color: "#333",
  },
  removeButtonText: {
    fontSize: 20,
    color: '#dc3545',
  },
  totalAdd:{
  flexDirection:'row',
  },
  clrAdd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 2,
  },
  clearButtonText:{
  fontSize:15,
 fontWeight:'bold',
  },

  AddButton: {
    flex: 1,
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  AddButtonText:{
  fontSize:16,
  fontWeight:'bold',
  color:'green',
  },

  paySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    padding:10,
    margin: 10,
  },
  paySectionText: {
    fontSize: 16,
    color: '#333',
  },
  online: {
    fontSize: 25,
    color: '#007bff',//coral
    fontWeight: 'bold',

  },
  crtBtn: {
    width:'60%',
    backgroundColor: '#28a745',
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#1e7e34',
    alignItems: 'center',
    marginTop: 1,
  },
  crtBtnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:30,
  },
  iconPay: {
    color: "skyblue",
    margin:5,
  },
  emptyCartText: {
    fontSize: 18,
    fontStyle: 'italic',
    justifyContent:'center',
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
  emptyCartIcon: {
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    padding: 20,
  },
  cartList: {
    marginHorizontal: 10,
  },
});

export default CartPage;


