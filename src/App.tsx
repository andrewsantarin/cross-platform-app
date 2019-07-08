import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// Shared modules, most likely to do with just the business logic.
import { INITIAL_VALUE, STEP_VALUE } from './App.constants';
import { useValueState } from './App.hooks';
import { toAddString, toSubtractString } from './App.utilities';

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
  } = useValueState(INITIAL_VALUE, STEP_VALUE);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{value}</Text>
      <Button
        title={toAddString(STEP_VALUE)}
        onPress={incrementValue}
      />
      <Button
        title={toSubtractString(STEP_VALUE)}
        onPress={decrementValue}
      />
    </View>
  );
};
