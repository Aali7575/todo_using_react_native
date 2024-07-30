import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SecondScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>SecondScreen</Text>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
