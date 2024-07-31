import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { setUserProfile } from './redux/Slice/userSlice';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Footerbtn from './Footerbtn';

const UserProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { name, email, avatar } = useSelector((state) => state.user);

  const handleAvatarChange = () => {
    Alert.alert(
      'Change Profile Picture',
      'Choose an option',
      [
        {
          text: 'Take Photo',
          onPress: () => {
            launchCamera(
              { mediaType: 'photo', quality: 1 },
              (response) => handleImageResponse(response)
            );
          },
        },
        {
          text: 'Choose from Library',
          onPress: () => {
            launchImageLibrary(
              { mediaType: 'photo', quality: 1 },
              (response) => handleImageResponse(response)
            );
          },
        },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const handleImageResponse = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorMessage) {
      console.log('ImagePicker Error: ', response.errorMessage);
    } else {
      const source = { uri: response.assets[0].uri };
      dispatch(setUserProfile({ avatar: source.uri }));
    }
  };

  return (
    <>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <TouchableOpacity onPress={handleAvatarChange}>
            <Image source={{ uri: avatar || 'https://randomuser.me/api/portraits/men/40.jpg' }} style={styles.avatar} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.name}>Name: {name}</Text>
            <Text style={styles.email}>Email: {email}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => navigation.navigate('CartPage')}>
            <Icon style={styles.icon} name="cart-sharp" size={20} />
            <Text style={styles.buttonText}>Your Order</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => navigation.navigate('Login')}>
            <Icon style={styles.icon} name="person-add-sharp" size={20} />
            <Text style={styles.buttonText}>Your Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => navigation.navigate('AllProduct')}>
            <Icon style={styles.icon} name="location-sharp" size={20} />
            <Text style={styles.buttonText}>Address</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => navigation.navigate('AllProduct')}>
            <Icon style={styles.icon} name="planet-sharp" size={20} />
            <Text style={styles.buttonText}>About Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    <Footerbtn navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingTop:20,
  },
  container: {
    flex: 1,
    padding: 15,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'grey',
  },
  email: {
    fontSize: 15,
    color: 'gray',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#008876',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '48%',
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
  icon: {
    color: 'green',
  },
});

export default UserProfile;









// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {useSelector} from 'react-redux';

// const UserProfile = ({ navigation, route }) => {

// const { name, email } = useSelector((state) => state.user);


//   const user = {
//     avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.container}>
//         <View style={styles.userInfo}>
//           <Image source={{ uri: user.avatar }} style={styles.avatar}/>
//           <View style={styles.textContainer}>
//             <Text style={styles.name}> Name: {name}</Text>
//             <Text style={styles.email}>Email: {email}</Text>
//           </View>
//         </View>
//         <View style={styles.buttonContainer}>

//           <TouchableOpacity
//             style={styles.touchableOpacity}
//             onPress={() => navigation.navigate('CartPage')}>
//             <Icon style={styles.icon} name="cart-sharp" size={20} />
//             <Text style={styles.buttonText}>Your Order</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.touchableOpacity}
//             onPress={() => navigation.navigate('Login')}>
//             <Icon style={styles.icon} name="person-add-sharp" size={20} />
//             <Text style={styles.buttonText}>Your Profile</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.touchableOpacity}
//           onPress={() => navigation.navigate('AllProduct')}>
//             <Icon style={styles.icon} name="location-sharp" size={20} />
//             <Text style={styles.buttonText}> Address</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.touchableOpacity}
//           onPress={() => navigation.navigate('AllProduct')}>
//             <Icon style={styles.icon} name="planet-sharp" size={20} />
//             <Text style={styles.buttonText}>About Us</Text>
//           </TouchableOpacity>

//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     backgroundColor: 'white',
//   },
//   container: {
//     flex: 1,
//     padding: 15,
//   },
//   userInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginRight: 20,
//   },
//   textContainer: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   name: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color:'grey',
//   },
//   email: {
//     fontSize: 15,
//     color: 'gray',
//     marginBottom: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   touchableOpacity: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderWidth: 0.5,
//     borderColor: '#008876',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     width: '48%',
//   },
//   buttonText: {
//     marginLeft: 10,
//     fontSize: 16,
//     color:'black',
//   },
//   icon: {
//     color: 'green',
//   },
// });

// export default UserProfile;
