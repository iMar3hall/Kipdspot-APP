// src/Taskbar.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TaskBar = ({ navigation }) => {
  return (
    <View style={styles.taskBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
        <Icon name="compass-outline" size={30} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
        <Icon name="heart-outline" size={30} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sessions')}>
        <Icon name="videocam-outline" size={30} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Icon name="person-outline" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'lightgray',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default TaskBar;
