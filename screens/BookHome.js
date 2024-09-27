import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from "@react-navigation/native"



const BookHome = ({ navigation }) => {
  // useLayoutEffect to hide the header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,  // Hides the header
    });
  }, [navigation]); // Dependency on 'navigation' to run whenever the navigation prop changes

  return (
    <View>
      <Text> textInComponent </Text>
    </View>
  );
};

export default BookHome;

