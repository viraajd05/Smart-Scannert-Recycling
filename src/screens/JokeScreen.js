import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

export default function JokeScreen() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      setJoke(data);
    } catch (err) {
      setError('Failed to fetch joke.');
      setJoke(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Joke Generator</Text>

      {loading && <ActivityIndicator size="large" color="#007AFF" />}

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {joke && !loading ? (
        <View style={styles.jokeBox}>
          <Text style={styles.setup}>{joke.setup}</Text>
          <Text style={styles.punchline}>{joke.punchline}</Text>
        </View>
      ) : null}

      <TouchableOpacity style={styles.button} onPress={fetchJoke}>
        <Text style={styles.buttonText}>{loading ? 'Loading...' : 'New Joke'}</Text>
      </TouchableOpacity>

      <Text style={styles.hint}>Source: Official Joke API (https://official-joke-api.appspot.com)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
  jokeBox: { padding: 12, borderRadius: 8, backgroundColor: '#f1f7ff', width: '100%', marginBottom: 16 },
  setup: { fontSize: 16, fontWeight: '600', marginBottom: 8 },
  punchline: { fontSize: 16, color: '#333' },
  button: { backgroundColor: '#007AFF', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: '700' },
  hint: { marginTop: 12, color: '#666', fontSize: 12 },
  error: { color: 'red', marginBottom: 8 },
});
