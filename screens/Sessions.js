import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sessions = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Sessions screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Sessions;
