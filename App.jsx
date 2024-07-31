import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Components/Home';
import Login from './Components/Login';
import AllProduct from './Components/AllProduct';
import CartPage from './Components/CartPage';
import UserProfile from './Components/UserProfile';
import PayPlant from './Components/Payplant';
import ShopPage from './Components/ShopPage';
import PaymentPage from './Components/PaymentPage';


import { Provider } from 'react-redux';
import { store } from './Components/redux/Store/Store';

import HomeDecor from './Components/Shops/HomeDecor';
import PotsPlant from './Components/Shops/PotsPlant';
import PlantsCare from './Components/Shops/PlantsCare';
import GreenGifts from './Components/Shops/GreenGifts';
import ForGarden from './Components/Shops/ForGarden';
import BulbSeed from './Components/Shops/BulbSeed';




const Stack = createStackNavigator();

const App = () => {
  return(
    <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Home" component={Home}  options={{ headerShown: true }}  />
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
        <Stack.Screen name="AllProduct" component={AllProduct} options={{headerShown: false}} />
        <Stack.Screen name="PayPlant" component={PayPlant} options={{headerShown: false}} />
        <Stack.Screen name="CartPage" component={CartPage} options={{ headerShown:false}} />
        <Stack.Screen name="PaymentPage" component={PaymentPage} options={{ headerShown:true}} />
        <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown:false}} />
        <Stack.Screen name="ShopPage" component={ShopPage} options={{ headerShown:true}}   />
        <Stack.Screen name="HomeDecor" component={HomeDecor} options={{ headerShown:true}}   />
        <Stack.Screen name="PotsPlant" component={PotsPlant} options={{ headerShown:true}}   />
        <Stack.Screen name="PlantsCare" component={PlantsCare} options={{ headerShown:true}}   />
        <Stack.Screen name="BulbSeed" component={BulbSeed} options={{headerShown:true}} />
        <Stack.Screen name="ForGarden" component={ForGarden} options={{ headerShown:true}}   />
        <Stack.Screen name="GreenGifts" component={GreenGifts} options={{ headerShown:true}}   />
      </Stack.Navigator>
    </NavigationContainer>

    </Provider>
  );
};

export default App;




