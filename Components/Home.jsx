// import React from 'react';
// import { View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Swiper from 'react-native-swiper';
// import Header from './Header';
// import ProductCard from './ProductCard';
// import Footerbtn from './Footerbtn';
// import { useSelector } from "react-redux";


// const Home = ({ navigation, route }) => {
  

//   const {name, redName} = useSelector((state) => state.user);

//   const addToCart = route?.params?.addToCart;


//   const shops = [
//     { id: '1', name: 'Bulbs And Seeds', image: require('./img/Sp1.png') , ShopName: 'BulbSeed'  },
//     { id: '6', name: 'Green Gifts', image: require('./img/Sp6.png') , ShopName:'GreenGifts' },
//     { id: '3', name: 'Plant Care', image: require('./img/Sp3.png') , ShopName:'PlantsCare' },
//     { id: '2', name: 'Home Decor', image: require('./img/Sp2.png') , ShopName:'HomeDecor' },
//     { id: '4', name: 'For Garden', image: require('./img/Sp4.png') , ShopName:'ForGarden' },
//     { id: '5', name: 'Pots and Plants', image: require('./img/RP1.png') , ShopName:"PotsPlant"},
//   ];

//   const homeDecor = [
//     { id: '041', name: 'HomeDecor 1', image: require('./img/Product6.png'), price: '$10', dis: '50% off' },
//     { id: '044', name: 'HomeDecor 2', image: require('./img/Product2.png'), price: '$15', dis: '60% off' },
//     { id: '048', name: 'HomeDecor 3', image: require('./img/Product3.png'), price: '$20', dis: '55% off' },
//     { id: '051', name: 'HomeDecor 4', image: require('./img/Product4.png'), price: '$25', dis: '50% off' },
//     { id: '052', name: 'HomeDecor 5', image: require('./img/Product7.png'), price: '$30', dis: '70% off' },
//   ];

//   const potsPlant = [
//     { id: '051', name: 'Pots 1', image: require('./img/RP2.png'), price: '12', dis: '50% off' },
//     { id: '052', name: 'Pots 2', image: require('./img/RP1.png'), price: '25', dis: '60% off' },
//     { id: '053', name: 'Pots 3', image: require('./img/RP3.png'), price: '21', dis: '55% off' },
//     { id: '054', name: 'Pots 4', image: require('./img/RP4.png'), price: '16', dis: '50% off' },
//     { id: '055', name: 'Pots 5', image: require('./img/RP5.png'), price: '18', dis: '70% off' },
//     ];

//     const GreenGifts = [
//         { id: '001', name: ' GreenGifts 1', image: require('./img/Potp19.png'), price: '12', dis: '50% off' },
//         { id: '002', name: ' GreenGifts 2', image: require('./img/Potp20.png'), price: '25', dis: '60% off' },
//         { id: '003', name: ' GreenGifts 3', image: require('./img/Potp21.png'), price: '21', dis: '55% off' },
//         { id: '004', name: ' GreenGifts 4', image: require('./img/Potp22.png'), price: '16', dis: '50% off' },
//         { id: '005', name: ' GreenGifts 5', image: require('./img/Potp7.png'), price: '18', dis: '70% off' },

//     ];
//     const BulbSeed = [
//       { id: '0001', name: 'Product 1', image: require('./img/PC1.png'), price: '10', dis: '50% off' },
//       { id: '0002', name: 'Product 2', image: require('./img/PC2.png'), price: '15', dis: '60% off' },
//       { id: '0003', name: 'Product 3', image: require('./img/PC3.png'), price: '20', dis: '55% off' },
//       { id: '0004', name: 'Product 4', image: require('./img/PC1.png'), price: '25', dis: '50% off' },
//       { id: '0005', name: 'Product 5', image: require('./img/PC2.png'), price: '30', dis: '70% off' },
//     ];  

//     const ForGarden = [
//       { id: '071', name: 'Home 1', image: require('./img/FG1.png'), price: '12', dis: '50% off' },
//       { id: '072', name: 'Home 2', image: require('./img/FG2.png'), price: '25', dis: '60% off' },
//       { id: '073', name: 'Home 3', image: require('./img/FG3.png'), price: '21', dis: '55% off' },
//       { id: '080', name: 'Pots 10', image: require('./img/FG10.png'), price: '18', dis: '70% off' },
//       { id: '084', name: 'Pots 14', image: require('./img/FG14.png'), price: '16', dis: '50% off' },
//     ];  



//   const renderCard = ({ item }) => (
 

// <TouchableOpacity
//       style={styles.card}
//       onPress={() => navigation.navigate('ShopPage', { shopName: item.ShopName })}
//     >
//       <Image source={item.image} style={styles.cardImage} />
//       <Text style={styles.cardText}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   const renderProductCard = ({ item }) => (
//     <ProductCard product={item} addToCart={addToCart} />
//   );

//   return (
//     <>
//       <Header
//         onSearch={(text) => console.log('Search:',text)}
//         onMenuPress={() => navigation.openDrawer()} //Drawer Element
//       />
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.container}>
//           <View>
//           <Text style={styles.text1} >{redName?.name}</Text>
//             <Text style={styles.text1}> Hello,{name} 🪴</Text>
//             <Text style={styles.text2}>Let's make the Environment Green </Text>
//           </View>


//           <Swiper
//             style={styles.wrapper}
//             autoplay={true}
//             autoplayTimeout={5}
//             showsButtons={false}
//             showsPagination={false}
//           >
//             <View style={styles.slide}>
//               <Image
//                 source={require('./img/Hp1.png')}
//                 style={styles.image}
//               />
//             </View>
//             <View style={styles.slide}>
//               <Image
//                 source={require('./img/Hplant1.png')}
//                 style={styles.image}
//               />
//             </View>
//             <View style={styles.slide}>
//               <Image
//                 source={require('./img/Hp3.png')}
//                 style={styles.image}
//               />
//             </View>
//             <View style={styles.slide}>
//               <Image
//                 source={require('./img/Hp4.png')}
//                 style={styles.image}
//               />
//             </View>
//           </Swiper>

//           <Text style={styles.selectShop}>Select Shops</Text>
//           <FlatList
//             data={shops}
//             renderItem={renderCard}
//             keyExtractor={item => item.id}
//             numColumns={2}
//             contentContainerStyle={styles.cardContainer}
//           />
          
//           <Text style={styles.Products}>Our Home Decor Products</Text>
//           <FlatList
//             data={homeDecor}
//             renderItem={renderProductCard}
//             keyExtractor={item => item.id}
//             horizontal={true}
//             contentContainerStyle={styles.cardContainer}
//             showsHorizontalScrollIndicator={true}
//           />
         
//           <Text style={styles.Products}>Our Pots And Plants product</Text>
//           <FlatList
//             data={potsPlant}
//             renderItem={renderProductCard}
//             keyExtractor={item => item.id}
//             horizontal={true}
//             contentContainerStyle={styles.cardContainer}
//             showsHorizontalScrollIndicator={true}
//           />
         
//          <Text style={styles.Products}>Our Green Gifts product</Text>
//           <FlatList
//             data={GreenGifts}
//             renderItem={renderProductCard}
//             keyExtractor={item => item.id}
//             horizontal={true}
//             contentContainerStyle={styles.cardContainer}
//             showsHorizontalScrollIndicator={true}
//           /> 

//           <Text style={styles.Products}>Our Bulb and Seeds Product</Text>
//           <FlatList
//             data={BulbSeed}
//             renderItem={renderProductCard}
//             keyExtractor={item => item.id}
//             horizontal={true}
//             contentContainerStyle={styles.cardContainer}
//             showsHorizontalScrollIndicator={true}
//           />  


//           <Text style={styles.Products}>Our Garden Product</Text>
//           <FlatList
//             data={ForGarden}
//             renderItem={renderProductCard}
//             keyExtractor={item => item.id}
//             horizontal={true}
//             contentContainerStyle={styles.cardContainer}
//             showsHorizontalScrollIndicator={true}
//           />         
//         </View>
//       </ScrollView>
//       <Footerbtn navigation={navigation} />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     alignItems: 'center',
//   },
//   container: {
//     backgroundColor: 'white',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   text1: {
//     color: 'green',
//     fontSize: 20,
//     backgroundColor: 'white',
//   },
//   text2: {
//     color: 'grey',
//     fontSize: 20,
//     backgroundColor: 'white',
//     paddingLeft: 5,
//   },
//   wrapper: {
//     height: 200,
//   },
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 370,
//     height: 160,
//     borderRadius: 10,
//   },
//   selectShop: {
//     fontSize: 15,
//     color: '#737373',
//     fontWeight: 'light',
//     marginRight: 250,
//     marginTop: 10,
//   },
//   Products: {
//     fontSize: 15,
//     color: '#737373',
//     fontWeight: 'light',
//     marginRight: 190,
//     marginTop: 10,
//   },
//   cardContainer: {
//     paddingVertical: 10,
//   },
//   card: {
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
//     margin: 10,
//     alignItems: 'center',
//     width: 165,
//     height: 132,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   cardImage: {
//     width: 160,
//     height: 85,
//     borderRadius: 10,
//   },
//   cardText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#333',
//     fontWeight: 'bold',
//   },
// });

// export default Home;


















import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Header from './Header';
import ProductCard from './ProductCard';
import Footerbtn from './Footerbtn';
import { useSelector } from "react-redux";


const Home = ({ navigation, route }) => {
  

  const {name, redName} = useSelector((state) => state.user);

  const addToCart = route?.params?.addToCart;


  const shops = [
    { id: '1', name: 'Bulbs And Seeds', image: require('./img/Sp1.png') , ShopName: 'BulbSeed'  },
    { id: '6', name: 'Green Gifts', image: require('./img/Sp6.png') , ShopName:'GreenGifts' },
    { id: '3', name: 'Plant Care', image: require('./img/Sp3.png') , ShopName:'PlantsCare' },
    { id: '2', name: 'Home Decor', image: require('./img/Sp2.png') , ShopName:'HomeDecor' },
    { id: '4', name: 'For Garden', image: require('./img/Sp4.png') , ShopName:'ForGarden' },
    { id: '5', name: 'Pots and Plants', image: require('./img/RP1.png') , ShopName:"PotsPlant"},
  ];

  const homeDecor = [
    { id: '041', name: 'HomeDecor 1', image: require('./img/Product6.png'), price: '$10', dis: '50% off' },
    { id: '044', name: 'HomeDecor 2', image: require('./img/Product2.png'), price: '$15', dis: '60% off' },
    { id: '048', name: 'HomeDecor 3', image: require('./img/Product3.png'), price: '$20', dis: '55% off' },
    { id: '051', name: 'HomeDecor 4', image: require('./img/Product4.png'), price: '$25', dis: '50% off' },
    { id: '052', name: 'HomeDecor 5', image: require('./img/Product7.png'), price: '$30', dis: '70% off' },
  ];

  const potsPlant = [
    { id: '051', name: 'Pots 1', image: require('./img/RP2.png'), price: '12', dis: '50% off' },
    { id: '052', name: 'Pots 2', image: require('./img/RP1.png'), price: '25', dis: '60% off' },
    { id: '053', name: 'Pots 3', image: require('./img/RP3.png'), price: '21', dis: '55% off' },
    { id: '054', name: 'Pots 4', image: require('./img/RP4.png'), price: '16', dis: '50% off' },
    { id: '055', name: 'Pots 5', image: require('./img/RP5.png'), price: '18', dis: '70% off' },
    ];

    const GreenGifts = [
        { id: '001', name: ' GreenGifts 1', image: require('./img/Potp19.png'), price: '12', dis: '50% off' },
        { id: '002', name: ' GreenGifts 2', image: require('./img/Potp20.png'), price: '25', dis: '60% off' },
        { id: '003', name: ' GreenGifts 3', image: require('./img/Potp21.png'), price: '21', dis: '55% off' },
        { id: '004', name: ' GreenGifts 4', image: require('./img/Potp22.png'), price: '16', dis: '50% off' },
        { id: '005', name: ' GreenGifts 5', image: require('./img/Potp7.png'), price: '18', dis: '70% off' },

    ];
    const BulbSeed = [
      { id: '0001', name: 'Product 1', image: require('./img/PC1.png'), price: '10', dis: '50% off' },
      { id: '0002', name: 'Product 2', image: require('./img/PC2.png'), price: '15', dis: '60% off' },
      { id: '0003', name: 'Product 3', image: require('./img/PC3.png'), price: '20', dis: '55% off' },
      { id: '0004', name: 'Product 4', image: require('./img/PC1.png'), price: '25', dis: '50% off' },
      { id: '0005', name: 'Product 5', image: require('./img/PC2.png'), price: '30', dis: '70% off' },
    ];  

    const ForGarden = [
      { id: '071', name: 'Home 1', image: require('./img/FG1.png'), price: '12', dis: '50% off' },
      { id: '072', name: 'Home 2', image: require('./img/FG2.png'), price: '25', dis: '60% off' },
      { id: '073', name: 'Home 3', image: require('./img/FG3.png'), price: '21', dis: '55% off' },
      { id: '080', name: 'Pots 10', image: require('./img/FG10.png'), price: '18', dis: '70% off' },
      { id: '084', name: 'Pots 14', image: require('./img/FG14.png'), price: '16', dis: '50% off' },
    ];  



  const renderCard = ({ item }) => (
 

<TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ShopPage', { shopName: item.ShopName })}
    >
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderProductCard = ({ item }) => (
    <ProductCard product={item} addToCart={addToCart} />
  );

  return (
    <>
      <Header
        onSearch={(text) => console.log('Search:',text)}
        onMenuPress={() => navigation.navigate('')} //Drawer Element
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View>
          <Text style={styles.text1} >{redName?.name}</Text>
            <Text style={styles.text1}> Hello,{name} 🪴</Text>
            <Text style={styles.text2}>Let's make the Environment Green </Text>
          </View>


          <Swiper
            style={styles.wrapper}
            autoplay={true}
            autoplayTimeout={5}
            showsButtons={false}
            showsPagination={false}
          >
            <View style={styles.slide}>
              <Image
                source={require('./img/Hp1.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('./img/Hplant1.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('./img/Hp3.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('./img/Hp4.png')}
                style={styles.image}
              />
            </View>
          </Swiper>

          <Text style={styles.selectShop}>Select Shops</Text>
          <FlatList
            data={shops}
            renderItem={renderCard}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.cardContainer}
          />
          
          <Text style={styles.Products}>Our Home Decor Products</Text>
          <FlatList
            data={homeDecor}
            renderItem={renderProductCard}
            keyExtractor={item => item.id}
            horizontal={true}
            contentContainerStyle={styles.cardContainer}
            showsHorizontalScrollIndicator={true}
          />
         
          <Text style={styles.Products}>Our Pots And Plants product</Text>
          <FlatList
            data={potsPlant}
            renderItem={renderProductCard}
            keyExtractor={item => item.id}
            horizontal={true}
            contentContainerStyle={styles.cardContainer}
            showsHorizontalScrollIndicator={true}
          />
         
         <Text style={styles.Products}>Our Green Gifts product</Text>
          <FlatList
            data={GreenGifts}
            renderItem={renderProductCard}
            keyExtractor={item => item.id}
            horizontal={true}
            contentContainerStyle={styles.cardContainer}
            showsHorizontalScrollIndicator={true}
          /> 

          <Text style={styles.Products}>Our Bulb and Seeds Product</Text>
          <FlatList
            data={BulbSeed}
            renderItem={renderProductCard}
            keyExtractor={item => item.id}
            horizontal={true}
            contentContainerStyle={styles.cardContainer}
            showsHorizontalScrollIndicator={true}
          />  


          <Text style={styles.Products}>Our Garden Product</Text>
          <FlatList
            data={ForGarden}
            renderItem={renderProductCard}
            keyExtractor={item => item.id}
            horizontal={true}
            contentContainerStyle={styles.cardContainer}
            showsHorizontalScrollIndicator={true}
          />         
        </View>
      </ScrollView>
      <Footerbtn navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text1: {
    color: 'green',
    fontSize: 20,
    backgroundColor: 'white',
  },
  text2: {
    color: 'grey',
    fontSize: 20,
    backgroundColor: 'white',
    paddingLeft: 5,
  },
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 370,
    height: 160,
    borderRadius: 10,
  },
  selectShop: {
    fontSize: 15,
    color: '#737373',
    fontWeight: 'light',
    marginRight: 250,
    marginTop: 10,
  },
  Products: {
    fontSize: 15,
    color: '#737373',
    fontWeight: 'light',
    marginRight: 190,
    marginTop: 10,
  },
  cardContainer: {
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    width: 165,
    height: 132,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImage: {
    width: 160,
    height: 85,
    borderRadius: 10,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default Home;
