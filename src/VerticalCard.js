import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const VerticalCard = () => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: 'https://via.placeholder.com/200x100' }} style={styles.cardImage} />
      
      {/* Rating and Like Icons */}
      <View style={styles.topIconsContainer}>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="gold" />
          <Text style={styles.ratingText}>4.5</Text>
        </View>
        <TouchableOpacity>
          <Icon name="heart-outline" size={24} color="#ff0000" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.cardTitle}>Vertical Card Title</Text>
      <Text style={styles.cardDescription}>Description of the vertical card goes here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  topIconsContainer: {
    position: 'absolute',
    top: 25, // Few pixels from the top of the card
    left: 25,
    right: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1, // Ensures the icons are above the image
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#000',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default VerticalCard;
