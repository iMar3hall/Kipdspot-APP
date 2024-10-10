import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Correct import for SafeAreaView
import Icon from 'react-native-vector-icons/MaterialIcons'; // For the menu icon

const Payment = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top bar with menu icon */}
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Main content of the Payment screen */}
      <View style={styles.content}>
        <Text style={styles.title}>Payment Screen</Text>
        <Text style={styles.text}>Here you can manage your payments.</Text>
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

export default Payment;