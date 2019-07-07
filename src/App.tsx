import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useValueState } from './App.hooks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const App = () => {
  const {
    value,
    incrementValue,
    decrementValue,
  } = useValueState(0);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{value}</Text>
      <Button
        title="+1"
        onPress={incrementValue}
      />
      <Button
        title="-1"
        onPress={decrementValue}
      />
    </View>
  );
};
