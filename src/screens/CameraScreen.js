import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [result, setResult] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ quality: 0.6 });
      setPhotoUri(photo.uri);
      setResult(null);
    }
  };

  // Placeholder recognition function: replace with a real API integration later
  const recognizePhotoPlaceholder = async () => {
    setResult('Analyzing...');
    // Simulate network / model latency
    await new Promise((r) => setTimeout(r, 1200));
    // Fake categorization — in real implementation replace with model/API result
    const candidates = ['Plastic (PET)', 'Glass', 'Paper', 'Metal', 'Unknown'];
    const choice = candidates[Math.floor(Math.random() * candidates.length)];
    setResult(choice);
  };

  if (hasPermission === null) return <View style={styles.center}><Text>Requesting camera permission...</Text></View>;
  if (hasPermission === false) return <View style={styles.center}><Text>No access to camera</Text></View>;

  return (
    <View style={styles.container}>
      {!photoUri ? (
        <Camera style={styles.camera} ref={cameraRef} />
      ) : (
        <Image source={{ uri: photoUri }} style={styles.preview} />
      )}

      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, !photoUri && styles.buttonDisabled]}
          onPress={recognizePhotoPlaceholder}
          disabled={!photoUri}
        >
          <Text style={styles.buttonText}>Recognize</Text>
        </TouchableOpacity>

        {result ? (
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>Result: {result}</Text>
            <Text style={styles.hintText}>Tip: Replace placeholder with a real model or cloud API for accurate results.</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  camera: { flex: 1 },
  preview: { flex: 1, resizeMode: 'cover' },
  controls: { padding: 12, backgroundColor: '#f7f7f7' },
  button: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8, marginBottom: 8 },
  buttonDisabled: { backgroundColor: '#999' },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
  resultBox: { marginTop: 8, padding: 8, backgroundColor: '#eef' },
  resultText: { fontWeight: '700' },
  hintText: { marginTop: 4, color: '#444' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
