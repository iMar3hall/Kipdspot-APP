import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BookHome from './screens/BookHome';
import Promotions from './screens/Promotions';
import MySessions from './screens/MySessions';
import Reports_Violation from './screens/Reports_Violation';
import About from './screens/About';
import Support from './screens/Support';
import Payment from './screens/Payment';
import Explore from './screens/taskbarScreens/Explore';
import Sessions from './screens/taskbarScreens/Sessions';
import Favourites from './screens/taskbarScreens/Favourites';
import Profile from './screens/taskbarScreens/Profile';
import CustomDrawer from './componets/CustomDrawer'; // Import the custom drawer

const Drawer = createDrawerNavigator();

const ScreenWithMenu = (Component) => ({ navigation }) => {
  return (
    <>
      <Component navigation={navigation} />
    </>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="BookHome"
        drawerContent={(props) => <CustomDrawer {...props} />} // Use the custom drawer
        screenOptions={{ headerShown: false }} 
      >
        {/* Hide BookHome from the drawer */}
        <Drawer.Screen
          name="BookHome"
          component={BookHome}
          options={{ drawerItemStyle: { display: 'none' } }} // Hide from drawer
        />
        <Drawer.Screen name="Payment" component={ScreenWithMenu(Payment)} />
        <Drawer.Screen name="Promotions" component={ScreenWithMenu(Promotions)} />
        <Drawer.Screen name="My Sessions" component={ScreenWithMenu(MySessions)} />
        <Drawer.Screen name="Reports & Violation" component={ScreenWithMenu(Reports_Violation)} />
        <Drawer.Screen name="Support" component={ScreenWithMenu(Support)} />
        <Drawer.Screen name="About" component={ScreenWithMenu(About)} />
        <Drawer.Screen 
          name="Explore" 
          component={ScreenWithMenu(Explore)} 
          options={{ drawerItemStyle: { display: 'none' } }} // Hide Profile from drawer
        />
        <Drawer.Screen 
          name="Favourites" 
          component={ScreenWithMenu(Favourites)} 
          options={{ drawerItemStyle: { display: 'none' } }} // Hide Profile from drawer
        />
        <Drawer.Screen 
          name="Sessions" 
          component={ScreenWithMenu(Sessions)} 
          options={{ drawerItemStyle: { display: 'none' } }} // Hide Profile from drawer
        />
        <Drawer.Screen 
          name="Profile" 
          component={ScreenWithMenu(Profile)} 
          options={{ drawerItemStyle: { display: 'none' } }} // Hide Profile from drawer
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
