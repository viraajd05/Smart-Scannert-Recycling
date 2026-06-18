import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import CameraScreen from './src/screens/CameraScreen';
import JokeScreen from './src/screens/JokeScreen';

export default function App() {
  const [screen, setScreen] = useState('camera');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.tab, screen === 'camera' && styles.tabActive]}
          onPress={() => setScreen('camera')}
        >
          <Text style={styles.tabText}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, screen === 'joke' && styles.tabActive]}
          onPress={() => setScreen('joke')}
        >
          <Text style={styles.tabText}>Jokes</Text>
        </TouchableOpacity>
      </View>

      {screen === 'camera' ? <CameraScreen /> : <JokeScreen />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  tabActive: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    color: '#000',
    fontWeight: '600',
  },
});
