import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For icons
import BookHome from './screens/BookHome'; // Your existing BookHome screen

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Home Screen
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}

// Settings Screen
function SettingsScreen() {
  return (
    <SafeAreaView>
      <Text>Settings Screen</Text>
    </SafeAreaView>
  );
}

// About Screen
function AboutScreen() {
  return (
    <SafeAreaView>
      <Text>About Screen</Text>
    </SafeAreaView>
  );
}

// Drawer Navigator (this contains the Home, Settings, and About options)
function DrawerNavigator({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={30} style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        ),
        // Add notification icon in headerRight
        headerRight: () => (
          <TouchableOpacity onPress={() => alert('Notification Icon Pressed')}>
            <Icon name="notifications-outline" size={30} style={{ marginRight: 15 }} />
          </TouchableOpacity>
        ),
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

// Stack Navigator (this allows navigation between BookHome and the Drawer screens)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hides the header for all screens
        }}
      >
        {/* Drawer Navigator (Hamburger menu with Home, Settings, About) */}
        <Stack.Screen name="Drawer" component={DrawerNavigator} />

        {/* BookHome Screen (Accessible through Stack navigation) */}
        <Stack.Screen name="BookHome" component={BookHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
