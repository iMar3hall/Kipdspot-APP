import React from 'react';
import { View, Text, TextInput, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../src/Card';
import VerticalCard from '../src/VerticalCard';
import TaskBar from '../src/Taskbar';

const BookHome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Menu Icon and Location */}
        <View style={styles.menuAndLocation}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={30} color="#000" />
          </TouchableOpacity>

          <View style={styles.locationContainer}>
            <Icon name="location-outline" size={25} color="#000" style={styles.locationIcon} />
            <Text style={styles.locationText}>Location</Text>
          </View>
        </View>

        {/* Search and Filter */}
        <View style={styles.searchAndFilterContainer}>
          <TextInput style={styles.searchInput} placeholder="Search..." />
          <TouchableOpacity style={styles.filterButton} onPress={() => alert('Filter Settings Icon Pressed')}>
            <Icon name="settings-outline" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Notification Icon */}
        <TouchableOpacity style={styles.notificationButton} onPress={() => alert('Notification Icon Pressed')}>
          <Icon name="notifications-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Text style={styles.text}>Featured Spots</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>

        <Text style={styles.text}>Spots Near Me</Text>
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
      </ScrollView>

      {/* TaskBar at the bottom */}
      <TaskBar navigation={navigation} />
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: 'yellow',
  },
  menuAndLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  locationIcon: {
    marginRight: 5,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  searchAndFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  filterButton: {
    marginLeft: 10,
  },
  notificationButton: {
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default BookHome;
