import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Correct import for SafeAreaView
import Icon from 'react-native-vector-icons/MaterialIcons'; // For the menu icon

const Favourites = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top bar with menu icon */}
      <View style={styles.menuBar}>
      <TouchableOpacity onPress={() => navigation.navigate('BookHome')}>
          <Icon name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Main content of the Payment screen */}
      <View style={styles.content}>
        <Text style={styles.title}>Favourites Screen</Text>
        <Text style={styles.text}>Here you can manage your Favourites.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuBar: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});


export default Favourites;
