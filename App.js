import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        You’ve pressed the button {count} times
      </Text>
      <Button
        title="Press me!"
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',      
    justifyContent: 'center',     
    alignItems: 'center',         
    // alignItems + justifyContent + backgroundColor + flex 
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
  },
});

