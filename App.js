import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet, Text, Button, SafeAreaView } from 'react-native';
import BookHome from './screens/BookHome'; 



const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    
    <SafeAreaView>
      
        <Text>Home Screen</Text>
      
    </SafeAreaView>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hides the header for ALL screens
        }}
      >
        {/* Home Screen */}
        <Stack.Screen name="Home" component={HomeScreen} />
        
        {/* BookHome Screen */}
        <Stack.Screen name="BookHome" component={BookHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



