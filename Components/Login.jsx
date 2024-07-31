import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';
import { useDispatch } from 'react-redux';
import { SetName } from './redux/Slice/userSlice';
import{SetEmail} from "./redux/Slice/userSlice"

const Login = ({ navigation }) => {
  const [name, setName] = useState('');
  const isNameValid = name.trim().length > 0;

  const [email, setEmail] = useState('');
  const isEmailValid = email.trim().length > 0;

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(SetName(name));
    dispatch(SetEmail(email))
     navigation.navigate('Home', { name , email })
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsPagination={false}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={10}
      >
        <View style={styles.image}>
          <Image source={require('./img/plant.png')} style={styles.image} />
        </View>
        <View style={styles.image}>
          <Image source={require('./img/plant2.png')} style={styles.image} />
        </View>
        <View style={styles.image}>
          <Image source={require('./img/plant3.png')} style={styles.image} />
        </View>
        <View style={styles.image}>
          <Image source={require('./img/plant4.png')} style={styles.image} />
        </View>
      </Swiper>

      <View style={styles.titleContainer}>
        <Text style={styles.title}> Welcome to MyBaag 🪴 </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input2}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: isNameValid && isEmailValid ? '#04b338' : 'grey' }]}
        onPress={handleLogin}
        disabled={!isNameValid || !isEmailValid}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 350,
    height: 450,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388e3c',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#04b338',
    padding: 10,
    borderRadius: 25,
    width: '70%',
    marginBottom: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 45,
    color: 'grey',
    borderWidth: 1,
    borderColor: 'green',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    fontSize: 15,
  },
  input2: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 45,
    color: 'grey',
    borderWidth: 1,
    borderColor: 'green',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    fontSize: 15,
    marginTop: 10,
  },
});

export default Login;





// import * as React from 'react';
// import { useState } from 'react';
// import { View, Text, Button, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
// import Swiper from 'react-native-swiper';
//
//
//
// const Login = ({ navigation }) => {
//
//   const [name, setName] = useState('');
//   const isNameValid = name.trim().length > 0;
//
//   const [email, setEmail] = useState('');
//     const isEmailValid = email.trim().length > 0;
//
//
//   return (
//
//     <View style={styles.container}>
//       <Swiper
//         style={styles.wrapper}
//         showsPagination={false}
//         showsButtons={false}
//         autoplay={true}
//         autoplayTimeout={10} //10 sec
//       >
//         <View style={styles.image}>
//           <Image
//             source={require('./img/plant.png')}
//             style={styles.image}
//           />
//         </View>
//         <View style={styles.image}>
//           <Image
//             source={require('./img/plant2.png')}
//             style={styles.image}
//           />
//         </View>
//         <View style={styles.image}>
//           <Image
//             source={require('./img/plant3.png')}
//             style={styles.image}
//           />
//         </View>
//         <View style={styles.image}>
//           <Image
//             source={require('./img/plant4.png')}
//             style={styles.image}
//           />
//         </View>
//       </Swiper>
//
//
//       <View style={styles.titleContainer}>
//
//        <Text style={styles.title}> Welcome to MyBaag 🪴 </Text>
//
//       </View>
//
//       <TextInput
//         style={styles.input}
//         placeholder="Your Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//               style={styles.input2}
//               placeholder="Your Email"
//               value={email}
//               onChangeText={setEmail}
//             />
//
//
//       <TouchableOpacity
//               style={[styles.button, { backgroundColor: isNameValid && isEmailValid ? '#04b338' : 'grey' }]}
//               onPress={() => navigation.navigate('Home', { name , email })}
//               disabled={!isNameValid || !isEmailValid}
//             >
//         <Text style={styles.buttonText}>Login</Text>
//
//       </TouchableOpacity>
//
//     </View>
//
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   image: {
//     width: 350,
//     height: 450,
//     marginBottom: 10,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#388e3c',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: '#04b338',
//     padding: 10,
//     borderRadius: 25,
//     width: '70%',
//     marginBottom: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   input: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     height:45,
//     color: 'grey',
//     borderWidth: 1,
//     borderColor: 'green',
//     width: '70%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     display: 'flex',
//     fontSize: 15,
//   },
//   input2: {
//       backgroundColor: 'white',
//       borderRadius: 10,
//       height:45,
//       color: 'grey',
//       borderWidth: 1,
//       borderColor: 'green',
//       width: '70%',
//       alignItems: 'center',
//       justifyContent: 'center',
//       display: 'flex',
//       fontSize: 15,
//       marginTop:10,
//     },
// });
//
// export default Login;
//

