import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BookHome from './screens/BookHome';
import Explore from './screens/Explore';
import Favorites from './screens/Favorites';
import Sessions from './screens/Sessions';
import Profile from './screens/Profile';
import CustomDrawer from './componets/CustomDrawer'; // Import the custom drawer

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="BookHome"
        drawerContent={(props) => <CustomDrawer {...props} />} // Use the custom drawer
        screenOptions={{ headerShown: false }} 
      >
        <Drawer.Screen name="Home" component={BookHome} />
        <Drawer.Screen name="Explore" component={Explore} />
        <Drawer.Screen name="Favorites" component={Favorites} />
        <Drawer.Screen name="Sessions" component={Sessions} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
