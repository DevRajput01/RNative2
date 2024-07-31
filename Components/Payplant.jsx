import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PaymentPage from './PaymentPage';
import Footerbtn from './Footerbtn';

const PlantPage = ({navigation}) => {
  return (
    <>
    <ImageBackground
      source={require('./img/pp1.png')}
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.title}>You Pay, We Plant</Text>
          <Text style={styles.description}>
            Thank you for contributing to our mission of planting trees for a better environment!
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('./img/sq1.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payButtonText}>Pay Now for Plant Your Tree</Text>
          </TouchableOpacity>
          <View style={styles.reviewContainer}>
          <View style= {styles.heading1}>
            <Text style={styles.sectionTitle}>Why us </Text>
            <Icon name="earth-sharp" size={30} color="white" />
            </View>
            {/* Example review/comment cards */}
            <View style={styles.reviewCard}>
              <Text style={styles.reviewText}>We Plant More Than 10,000 plants Last Week in India</Text>

              <Text style={styles.reviewAuthor}>- MyBaag.com</Text>
            </View>
            <View style={styles.reviewCard}>
              <Text style={styles.reviewText}>We Have More then 5000+ Volunteers to Plant tree for you.</Text>
              <Text style={styles.reviewAuthor}>- MyBaag.com</Text>
            </View>
           <View style={styles.reviewCard}>
              <Text style={styles.reviewText}>We Plant for future.</Text>
              <Text style={styles.reviewAuthor}>- MyBaag.com</Text>
            </View>
            <View style={styles.reviewCard}>
              <Text style={styles.reviewText}>Great initiative for the environment.</Text>
              <Text style={styles.reviewAuthor}>- Jane Smith</Text>
            </View>
          </View>
      <ScrollView
            horizontal
            contentContainerStyle={styles.plantedPic}
            showsHorizontalScrollIndicator={true}
            >
              <View style={styles.PlantedCard}>
                         <Image
                            source={require('./img/Potp2.png')}
                            style={styles.image1}
                            resizeMode="contain"
                          />
                     <Text style={styles.PlantedText}>Great initiative for the environment.</Text>
                     <Text style={styles.PlantedDate}>19-6-2020</Text>
              </View>
              <View style={styles.PlantedCard}>
                         <Image
                            source={require('./img/Potp7.png')}
                            style={styles.image1}
                            resizeMode="contain"
                          />
                     <Text style={styles.PlantedText} >Great initiative for the environment.</Text>
                     <Text style={styles.PlantedDate}>19-6-2020</Text>
              </View>
              <View style={styles.PlantedCard}>
                         <Image
                            source={require('./img/Potp10.png')}
                            style={styles.image1}
                            resizeMode="contain"
                          />
                     <Text style={styles.PlantedText}>Great initiative for the environment.</Text>
                     <Text style={styles.PlantedDate}>19-6-2020</Text>
              </View>
              <View style={styles.PlantedCard}>
                         <Image
                            source={require('./img/Potp19.png')}
                            style={styles.image1}
                            resizeMode="contain"
                          />
                     <Text style={styles.PlantedText}>Great initiative for the environment.</Text>
                     <Text style={styles.PlantedDate}>19-6-2020</Text>
              </View>

              </ScrollView>
       <TouchableOpacity style={styles.payButton1}
       onPress={() => navigation.navigate('PaymentPage') }
       >
        <Icon style={styles.iconPay} name="diamond-outline" size={25}></Icon>
            <Text style={styles.payButtonText1}>Pay Now</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </ImageBackground>
    <Footerbtn navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
  },
  backgroundImage: {
    opacity: 0.8,
  },
  imageContainer: {
    width: 200,
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 100,
    resizeMode: 'contain',
  },
  payButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  payButtonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  heading1:{
   flexDirection: 'row',
      flexWrap: 'wrap',
     justifyContent:"center",

  },

  reviewContainer: {
    width: '100%',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  reviewCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  reviewText: {
    fontSize: 16,
    color: '#fff',
  },
  reviewAuthor: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 5,
    textAlign: 'right',
  },

  plantedPic:{
   flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

  },

  PlantedCard:{
  padding:10,
  margin:10,
  backgroundColor:'white',
  height:170,
  maxWidth:125,
  borderRadius:10,
  borderWidth:2,
  borderColor:'green',

  },
image1:{
  height:100,
  width:100,
  borderRadius:10,
},

PlantedText:{
fontWeight:'bold',
color:'black',
fontSize:12,
},
PlantedDate:{
color:'grey',
fontSize:10,
fontWeight:'bold',
textAlign:'right',
},
payButton1:{
backgroundColor:'green',
width:150,
borderRadius:10,
height:40,
padding:5,
flexDirection:'row',
justifyContent:'space-between',
},
payButtonText1:{
color:'white',
fontSize:20,
marginRight:20,

},

iconPay:{
color:'skyblue',
margin:3,
},


});

export default PlantPage;
