import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BookHome from './screens/BookHome'; // Import your screen

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="BookHome"
        screenOptions={{ headerShown: false }} // Hide the default header
      >
        <Drawer.Screen name="BookHome" component={BookHome} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
