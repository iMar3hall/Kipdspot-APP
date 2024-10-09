import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native'; // Hook for navigation

const CustomDrawer = (props) => {
  const navigation = useNavigation(); // Use this hook to navigate to BookHome

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20, backgroundColor: 'yellow' }}>
        {/* Round Profile Image */}
        <Image
          source={{ uri: 'https://placekitten.com/200/200' }} // Replace with your image URL or local image
          style={{
            width: 80,
            height: 80,
            borderRadius: 40, // To make it round
            marginBottom: 10,
          }}
        />
        {/* Profile Name */}
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>John Doe</Text>
        {/* "My Account" Title */}
        <Text style={{ fontSize: 16, color: '#555', marginTop: 5 }}>My Account</Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity
        style={{
          padding: 10,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: '#ccc',
          borderRadius: 10,
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate('Home')} // Navigate back to BookHome
      >
        <Text style={{ color: 'black', fontWeight: 'bold' }}>Back to Home</Text>
      </TouchableOpacity>

      {/* Drawer items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

