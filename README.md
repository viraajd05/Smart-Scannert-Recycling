# Smart-Scanner-Recycling

Cross-platform recycling helper app using AI image recognition.

This repository now has a minimal React Native (Expo) scaffold with a placeholder camera screen and a stubbed image-recognition flow.

Getting started

1. Install Expo CLI if you don't have it: `npm install -g expo-cli` or follow https://expo.dev
2. Install dependencies: `npm install`
3. Run the app: `npm start` (then open on simulator or Expo Go on your phone)

What I added

- App.js — app entry and navigation to Camera screen
- src/screens/CameraScreen.js — camera UI and placeholder recognition

Next steps I can do

- Integrate a real image-recognition provider (Google Vision / Azure / custom TF Lite)
- Add UI polish and result help text
- Add persistent history and suggestions for recycling

If you want me to integrate a real recognition API now, tell me which provider to use.
