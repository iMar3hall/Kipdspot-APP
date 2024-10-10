import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native'; // Hook for navigation
import Icon from 'react-native-vector-icons/MaterialIcons'; // For the back icon
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // For the star icon


const CustomDrawer = (props) => {
  const navigation = useNavigation(); // Use this hook to navigate to BookHome

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20, backgroundColor: 'yellow' }}>
         
         <View>
                              {/* Round Profile Image */}
                    <Image
                      source={{ uri: 'https://placekitten.com/200/200' }} // Replace with your image URL or local image
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40, // To make it round
                        marginRight: 15, // Add some space between the image and text
                      }}
                    />

                    {/* Rating Section */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 95 }}>
                      {/* Star Icon */}
                      <FontAwesome name="star" size={20} color="gold" />
                      {/* Rating Text */}
                      <Text style={{ fontSize: 16, marginLeft: 5 }}>5.0 Rating</Text>
        </View>
         </View>

             {/* Profile Name and "My Account" */}
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>John Doe</Text>
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
        onPress={() => navigation.navigate('BookHome')} // Navigate back to BookHome
      >
        <Text><Icon name="arrow-back" size={30} color="black" /></Text>  
      </TouchableOpacity>
      </View>

          
      

      

      {/* Drawer items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

