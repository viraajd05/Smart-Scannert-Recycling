import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Joke screen removed — placeholder retained for history. The Jokes feature has been cancelled per user request.
export default function JokeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jokes feature removed.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  text: { fontSize: 16 },
});
